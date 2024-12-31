import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 '>
        <BsMoonStarsFill  className=' text-3xl ml-20 '/>
        <FaRegUserCircle className=' text-3xl mr-20' />
      
    </div>
  )
}

export default Navbar;