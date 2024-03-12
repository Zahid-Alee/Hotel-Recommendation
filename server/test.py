import pandas as pd
import json

# Read the CSV file
df = pd.read_csv('unique_tags.csv')

# Extract unique tags
tags = df['Tags'].unique().tolist()

# Create a dictionary to store tags
tags_dict = [{'value': tag, 'label': tag} for tag in tags]

# Write the dictionary to a JSON file
with open('tags.json', 'w') as json_file:
    json.dump(tags_dict, json_file, indent=4)
