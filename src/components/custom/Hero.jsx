import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
const Hero = () => {
  return (
    <div className='flex flex-col items-center mx-50 gap-9 mt-16'>
      <h1 
       className='font-extrabold text-[60px] text-center'
       > <span className='text-[#f56551]'>Embark on Your Dream Journey with AI : </span>Custom Travel Plans Instantly</h1>
       <p className='text-xl text-gray-500 text-center'>Your personalized travel guide and planner, crafting unique itineraries based on your interests and budget.</p>
        
        <Link to={'/create-trip'}>
        <Button>Get Started , it's Free</Button>
        </Link>
      <img src="/exp.jpg" className='-mt-20 w-full' />
    </div>
  )
}

export default Hero