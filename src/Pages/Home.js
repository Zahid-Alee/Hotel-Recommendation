import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './Searchbar';
import TagList from './Tags';
import HotelCard from './HotelCard';
import { Card } from '@material-tailwind/react';
import { BookingCard } from './Card';
import Navigation from './Navigation';


function App() {
  const [hotels, setHotels] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [userReview, setUserReview] = useState('');
  const [userPrompt, setUserPrompt] = useState('');


    const sortedHotels = hotels?.sort((a, b) => b[Object.keys(b)[0]].priority - a[Object.keys(a)[0]].priority);


  const fetchHotels = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/recommend-hotels', {
        user_tags: selectedTags,
        review: userReview,
        num_recommendations: 15,
        user_prompt: userPrompt
      });
      setHotels(response.data.recommendations);
    } catch (error) {
      console.error('Error fetching hotels:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Navigation/>
      <h1 className="text-3xl font-semibold mb-8">Hotel Recommendations</h1>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <TagList selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      <textarea
        placeholder="Enter your review here..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
        value={userReview}
        onChange={(e) => setUserReview(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your prompt here..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
        value={userPrompt}
        onChange={(e) => setUserPrompt(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        onClick={fetchHotels}
      >
        Fetch Hotels
      </button>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedHotels?.map((hotel, index) => (
          // <HotelCard key={index} hotel={hotel} />
                <BookingCard key={index} hotel={hotel}/>
        ))}
      </div>
    </div>
  );
}

export default App;
