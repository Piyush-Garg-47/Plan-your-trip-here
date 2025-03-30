import React from 'react';
import PlaceCardItem from './PlaceCardItem';
import { Link } from 'react-router-dom';

const PlacesToVisit = ({ trip }) => {
  if (!trip?.tripData?.itinerary) return <p>No itinerary found</p>;

  return (
    <div>
      <h1 className='text-2xl font-bold text-left my-10'>Places To Visit</h1>

      <div>
        {Object.entries(trip.tripData.itinerary)
          .sort(([dayA], [dayB]) => dayA.localeCompare(dayB)) // Sorting days in ASC order
          .map(([dayKey, places], index) => {
            // Convert object to array if necessary
            const placeList = Array.isArray(places) ? places : [places];

            return (
              <div key={index} className='mb-6'>
                <h2 className='font-medium text-lg text-blue-600 my-2'>{dayKey.toUpperCase()}</h2>

                {placeList.map((place, i) => (
                  <div key={i} className='my-4'>
                    {/* Google Maps link for the place */}
                    <Link 
                      to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.placeName)}`} 
                      target='_blank' 
                      rel='noopener noreferrer'
                      className="text-blue-500 hover:underline"
                    >
                      <PlaceCardItem place={place} />
                    </Link>
                  </div>
                ))}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PlacesToVisit;
