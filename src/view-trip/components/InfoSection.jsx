import React from 'react'
import { IoIosSend } from "react-icons/io";
import { Button } from '@/components/ui/button';

const InfoSection = ({trip}) => {
  return (
    <div>
        <img src="/place.jpg" className='h-[340px] w-full object-cover roundded-xl'/>

        <div className='my-5 flex flex-col gap-2'>
            <h2 className='font-bold text-left text-2xl '>{trip?.userSelection?.location?.label}</h2>

           <div className='flex justify-between items-center'>
           <div className='flex gap-2'>
                <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>📅 {trip?.userSelection?.noOfDays} Day </h2>
                <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'> 💰 {trip?.userSelection?.budget} Budget </h2>
                <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'> 🥂 No. Of Travellers {trip?.userSelection?.travelers}</h2>
            </div>

            <Button> <IoIosSend /> </Button>
           </div>
        </div>
    </div>
  )
}

export default InfoSection