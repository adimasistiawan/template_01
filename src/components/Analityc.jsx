import React from 'react'
import Laptop from '../assets/laptop.jpg'
const Analityc = () => {
  return (
    <div className='bg-white w-full py-16 px-4'>
      <div className="grid md:grid-cols-2 mx-auto max-w-[1240px]">
        <img src={Laptop} className='w-[500px] mx-auto my-4' alt="" />
        <div className="flex flex-col justify-center">
          <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque error atque doloremque praesentium, ipsam vel esse corrupti voluptate est ex magni suscipit labore laborum excepturi nisi? Vero veniam similique tempore.
          </p>
          <button className='bg-black w-[200px] rounded-md font-medium my-6 md:mx-0 mx-auto py-3 text-[#00df9a]'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analityc