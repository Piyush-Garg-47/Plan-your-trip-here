import React from 'react';
import PlaceCardItem from './PlaceCardItem';

const PlacesToVisit = ({ trip }) => {
  if (!trip?.tripData?.itinerary) return <p>No itinerary found</p>;

  return (
    <div>
      <h1 className='text-2xl font-bold text-left my-10'>Places To Visit</h1>

      <div>
        {Object.entries(trip.tripData.itinerary)
           .sort(([dayA], [dayB]) => dayA.localeCompare(dayB))
          .map(([dayKey, places], index) => (
            <div key={index} className='mb-6'>
              <h2 className='font-medium text-lg text-blue-600 my-2'>{dayKey.toUpperCase()}</h2>

              {places.map((place, i) => (
                <div key={i} className='my-4'>
                  <PlaceCardItem place={place} />
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default PlacesToVisit;
