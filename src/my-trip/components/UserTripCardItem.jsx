import React from 'react'
import { Link } from 'react-router-dom'

const UserTripCardItem = ({trip}) => {
  return (
    <Link to={'/view-trip/'+trip?.id}>
    <div  className='shadow-md rounded-xl p-3 hover:scale-105 transition-all duration-300'>
      <img src="/download (1).jpeg" className="object-cover rounded-xl" />
      <div>
        <h2 className='font-bold text-lg'>{trip?.userSelection?.location?.label}</h2>
        <h2 className='text-sm text-gray-500'>{trip.userSelection.noOfDays} Days trip with {trip.userSelection.budget} Budget </h2>
        <h2 className='text-sm text-gray-500'>{trip.tripData.travelers} People </h2>
      </div>
    </div>
    </Link>
  )
}

export default UserTripCardItem