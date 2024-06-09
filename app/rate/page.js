'use client';
import React from 'react';
import '../../styles/rate.css';
import Link from 'next/link';
import ProtectedRoute from '../../components/Protectedcomp'
const Rate = () => {
  return (
    <>
    <div className='rate'>
        <h2>POUR YOUR HEART OUT HERE</h2>
       <Link href={"https://forms.gle/gGupXwAkxPMmuaJx9"}target="_blank"> <div className='rate-box'>
      <h4>https://forms.gle/gGupXwAkxPMmuaJx9</h4> 
        </div></Link>
    </div>
    





        {/* cloud images */}
    <div className='images'>
      <img className='cloud1' src="/cloud.svg" alt="" />
      <div className='cloud2'>
        <img src="/cloud.svg" alt="" />
        <span className="cloud-text">Pro tip : Chill Out</span>
      </div>
      <img className='cloud3' src="/cloud.svg" alt="" />
    </div>
    </>
  );
}

// export default ProtectedRoute(Rate);
export default Rate;
