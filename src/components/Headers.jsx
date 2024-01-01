import React, { useState } from 'react'
import logo from "../assets/LYM LOGO-01 1.png";
import { Link, useLocation } from 'react-router-dom';
const Headers = () => {
    //conditionally rendering create service btn
    const location=useLocation()
  return (
   <Link to={"/home"}>
        <div className='px-5 py-6 flex justify-between items-center lg:px-24'>
            <img src={logo} alt="" />
          {location.pathname==="/home" &&  <Link to={"/service"}><button className='border-[1px] border-zinc-600 px-10 py-3'>Create service</button></Link>}
        </div>
   </Link>
  )
}

export default Headers