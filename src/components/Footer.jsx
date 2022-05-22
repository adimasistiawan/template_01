import React from 'react'
import {
    FaInstagram,
    FaDribbbleSquare,
    FaTwitterSquare,
    FaFacebookSquare,
    FaGithubSquare
} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='w-full text-gray-300'>
        <div className="max-w-[1240px] max-auto py-16 px-16 grid lg:grid-cols-3 gap-8">
            <div>
                <h1 className='text-3xl font-bold text-[#00df9a]'>PERSONA</h1>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facere ipsam voluptate non iste, fugit sapiente necessitatibus dolor nesciunt aspernatur similique quaerat fuga voluptatibus perferendis magni ea incidunt sit eveniet!</p>
                <div className="flex justify-between md:w-[75%] my-6">
                    <FaDribbbleSquare size={30}/>
                    <FaFacebookSquare size={30}/>
                    <FaGithubSquare size={30}/>
                    <FaInstagram size={30}/>
                    <FaTwitterSquare size={30}/>
                </div>
            </div>
            <div className="lg:col-span-3 flex justify-between">
                <div>
                    <h6 className="font-medium text-gray-400">Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>Commerce</li>
                        <li className='py-2 text-sm'>Insight</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-400">Support</h6>
                    <ul>
                        <li className='py-2 text-sm'>Pricing</li>
                        <li className='py-2 text-sm'>Documentations</li>
                        <li className='py-2 text-sm'>Guides</li>
                        <li className='py-2 text-sm'>API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-400">Company</h6>
                    <ul>
                        <li className='py-2 text-sm'>About</li>
                        <li className='py-2 text-sm'>Blog</li>
                        <li className='py-2 text-sm'>Job</li>
                        <li className='py-2 text-sm'>Careers</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer