import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
const Service = () => {
  return (
    <div className='w-full py-[10rem] bg-white'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 px-8">
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="" />
                <h1 className='text-2xl text-center font-bold py-8'>Single User</h1>
                <p className='text-center font-bold text-4xl'>$148</p>
                <div className='text-center font-medium px-8'>
                    <p className='py-2 border-b'>500 GB Storage</p>
                    <p className='py-2 border-b'>1 User Allowed</p>
                    <p className='py-2 border-b'>Send up to 8 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6 text-black'>Start Trial</button>
            </div>
            <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="" />
                <h1 className='text-2xl text-center font-bold py-8'>Double User</h1>
                <p className='text-center font-bold text-4xl'>$149</p>
                <div className='text-center font-medium px-8'>
                    <p className='py-2 border-b'>1 TB Storage</p>
                    <p className='py-2 border-b'>3 Users Allowed</p>
                    <p className='py-2 border-b'>Send up to 10 GB</p>
                </div>
                <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6 text-[#00df9a]'>Start Trial</button>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="" />
                <h1 className='text-2xl text-center font-bold py-8'>Triple User</h1>
                <p className='text-center font-bold text-4xl'>$299</p>
                <div className='text-center font-medium px-8'>
                    <p className='py-2 border-b'>5 TB Storage</p>
                    <p className='py-2 border-b'>10 Users Allowed</p>
                    <p className='py-2 border-b'>Send up to 8 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6 text-black'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Service