import React from 'react';

const PlaceCardItem = ({ place }) => {
  return (
    <div className='border rounded-xl p-4 mt-2 flex gap-4 items-start bg-gray-100 shadow-md'>
      <img src= '/place.jpg' alt={place.placeName} className='w-[130px] h-[130px] rounded-xl object-cover' />

      <div className='flex-1'>
        <h3 className='font-semibold text-lg text-gray-900'>{place.placeName}</h3>
        <p className='text-gray-600'>{place.placeDetails}</p>
        <p className='text-sm text-gray-500'><strong>Best Time:</strong> {place.bestTime}</p>
        <p className='text-sm text-gray-500'><strong>Ticket Price:</strong> {place.ticketPricing}</p>
        <p className='text-sm text-gray-500'><strong>Travel Time:</strong> {place.travelTime}</p>
      </div>
    </div>
  );
};

export default PlaceCardItem;
