import React from 'react'
import {Button} from '../ui/button' 
const Header = () => {
  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5'>
      <img src='/logo.svg' />
      <div>
      <Button>Sing in</Button>
      </div>
    </div>
  )
}

export default Header