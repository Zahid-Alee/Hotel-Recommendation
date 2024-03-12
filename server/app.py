from flask import Flask, request, jsonify
from flask_cors import CORS
from nltk.sentiment import SentimentIntensityAnalyzer
import nltk
import pandas as pd
import ast

nltk.download('vader_lexicon')

app = Flask(__name__)
CORS(app)

def analyze_sentiments(reviews):
    sia = SentimentIntensityAnalyzer()
    sentiments = []
    for review in reviews:
        score = sia.polarity_scores(review)
        if score['compound'] > 0.05:
            sentiments.append('positive')
        elif score['compound'] < -0.05:
            sentiments.append('negative')
        else:
            sentiments.append('neutral')
    return sentiments

def create_hotel_profiles(reviews_by_hotel, df, user_prompt_sentiment):
    profiles = {}
    for hotel, reviews in reviews_by_hotel.items():
        sentiments = analyze_sentiments(reviews)
        hotel_tags = df[df['Hotel_Name'] == hotel]['Tags'].explode()
        hotel_tags_dist = []
        for tags in hotel_tags:
            if tags not in hotel_tags_dist:
                hotel_tags_dist.append(tags)

        # Check if 'Average_Score' column exists in the DataFrame
        if 'Average_Score' in df.columns:
            avg_score = df[df['Hotel_Name'] == hotel]['Average_Score'].iloc[0]
        else:
            avg_score = None  # Or assign a default value if the column is missing

        # Check if 'Reviewer_Nationality' column exists in the DataFrame
        if 'Reviewer_Nationality' in df.columns:
            reviewer_nationality = df[df['Hotel_Name'] == hotel]['Reviewer_Nationality'].tolist()
        else:
            reviewer_nationality = None  # Or assign a default value if the column is missing

        profiles[hotel] = {
            'positive_reviews': sentiments.count('positive'),
            'negative_reviews': sentiments.count('negative'),
            'neutral_reviews': sentiments.count('neutral'),
            'Tags': hotel_tags_dist,
            'Reviews': reviews,
            'Average_Score': avg_score,
            'Reviewer_Nationality': reviewer_nationality,
            'Prompt_Sentiment': user_prompt_sentiment  # Include sentiment of user prompt
        }
    return profiles

df = pd.read_csv('reviews.csv')
df['combined_review'] = df['Negative_Review'] + df['Positive_Review']
df.dropna(inplace=True)
# Remove unwanted columns
df = df.drop(['Additional_Number_of_Scoring', 'Review_Total_Negative_Word_Counts', 'Total_Number_of_Reviews', 'Review_Total_Positive_Word_Counts', 'Total_Number_of_Reviews_Reviewer_Has_Given', 'Reviewer_Score', 'days_since_review', 'lat', 'lng'], axis=1)

reviews_by_hotel = df.groupby('Hotel_Name')['combined_review'].apply(list).to_dict()

@app.route('/recommend-hotels', methods=['POST'])
def get_recommendations():
    try:
        data = request.json
        user_tags = data['user_tags']
        review = data['review']
        num_recommendations = data['num_recommendations']
        user_prompt = data['user_prompt']

        # Analyze sentiment of the user prompt
        prompt_sentiment = analyze_sentiments([user_prompt])[0]

        # Create hotel profiles including prompt sentiment
        hotel_profiles = create_hotel_profiles(reviews_by_hotel, df, prompt_sentiment)

        recommendations = recommend_hotels_based_on_review(review, user_tags, hotel_profiles, num_recommendations)

        # Initialize the response list
        response = []

        for hotel, score in recommendations.items():
            profile = hotel_profiles[hotel]

            hotel_reviews = []

            hotel_df = df[df['Hotel_Name'] == hotel]
            for i in range(min(20, len(profile['Reviews']))):
                review_message = profile['Reviews'][i]
                review_date = hotel_df.iloc[i]['Review_Date']
                review_nationality = hotel_df.iloc[i]['Reviewer_Nationality']
                address = hotel_df.iloc[i]['Hotel_Address']
                avg_score = hotel_df.iloc[i]['Average_Score']
                review_status = analyze_sentiments([review_message])[0]

                review_dict = {
                    'message': review_message,
                    'date': review_date,
                    'review_nationality': review_nationality,
                    'review_status': review_status,
                    # 'avg_score':avg_score
                }

                hotel_reviews.append(review_dict)

            # Calculate priority based on sentiment match with user prompt
            priority = score + (1 if review_status == prompt_sentiment else 0)

            hotel_dict = {
                hotel: {
                    'reviews': hotel_reviews,
                    'priority': priority ,
                    'avg_score':avg_score,
                    'address':address
                }
            }

            response.append(hotel_dict)

        # Sort recommendations by priority
        response_sorted = sorted(response, key=lambda x: x[list(x.keys())[0]]['priority'], reverse=True)

        return jsonify({'recommendations': response_sorted})

    except Exception as e:
        return jsonify({'error': str(e)}), 500


def recommend_hotels_based_on_review(review, user_tags, hotels_data, num_recommendations=10):
    def score_hotel(hotel, hotel_tags, user_tags, prompt_sentiment):  # Add 'hotel' parameter
        count = 0
        for tags_n in hotel_tags:
            tag_n_l = ast.literal_eval(tags_n)
            tags = [tag.lower().strip() for tag in tag_n_l]
            for tag in user_tags:
                if tag.lower() in tags:
                    count += 1
        # Increment count if the prompt sentiment matches the hotel's prompt sentiment
        if hotels_data[hotel]['Prompt_Sentiment'] == prompt_sentiment:
            count += 1
        return count

    scored_hotels = [
        (hotel, score_hotel(hotel, hotels_data[hotel]['Tags'], user_tags, hotels_data[hotel]['Prompt_Sentiment']))  # Pass 'hotel' variable
        for hotel in hotels_data
    ]

    recommended_hotels = dict(sorted(scored_hotels, key=lambda x: x[1], reverse=True)[:num_recommendations])

    return recommended_hotels


if __name__ == '__main__':
    app.run(debug=True)
