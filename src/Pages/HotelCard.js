import React from 'react';
import { FaStar, FaRegStar } from "react-icons/fa";

const HotelCard = ({ hotel, index }) => {
  const hotelName = Object.keys(hotel)[0];
  const { reviews, priority, avg_score } = hotel[hotelName];

  const positiveReviewsCount = reviews.filter((review) => review.review_status === 'positive').length;
  const totalReviewsCount = reviews.length;

  // Calculate star rating based on average score
  const starRating = Math.ceil(avg_score / 2);

  // Calculate priority percentage
  const priorityPercentage = (priority / 5) * 100;

  // Determine star color
  const starColor = starRating > 0 ? 'orange' : 'gray'; 

  const dummyImageUrl = `https://via.placeholder.com/400x200?text=${hotelName}`;

  return (
    <div className="max-w-lg rounded overflow-hidden shadow-lg bg-white">
      
      <img className="w-full" src={dummyImageUrl} alt="Hotel" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{hotelName}</div>
        <div className="flex items-center">
          {Array.from({ length: 5 }, (_, index) => (
            index < starRating ? <FaStar key={index} color={starColor} /> : <FaRegStar key={index} color={starColor} />
          ))}
        </div>
        <p className="text-gray-700 text-base">Positive Reviews: {positiveReviewsCount}</p>
        <p className="text-gray-700 text-base">Total Reviews: {totalReviewsCount}</p>
        <p className="text-gray-700 text-base">Priority: {priority}</p> {/* Display priority number */}
        <div className="w-full bg-gray-200 rounded-lg mt-4">
          <div className="bg-green-500 text-xs leading-none py-1 text-center text-white rounded-lg" style={{ width: `${priorityPercentage}%` }}>{priorityPercentage}%</div>
        </div>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Book Now</button>
      </div>
    </div>
  );
};

export default HotelCard;
