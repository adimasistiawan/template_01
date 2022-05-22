import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full text-white py-16 px-24'>
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
            <div className="lg:col-span-2 my-4">
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Wants Tips & Tricks ?</h1>
                <p>Sign up to our newsletter and stay up to date</p>
            </div>
            <div className="my-4">
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input type="email" className='p-3 w-full rounded-md text-black' placeholder='Enter Email' />
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 mx-auto px-6 py-3 text-black'>Notify Me</button>
                </div>
                <p>We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy policy</span></p>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter