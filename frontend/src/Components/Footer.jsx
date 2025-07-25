import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div className='px-7'>
                <img src={assets.logo1} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                Your ultimate destination for contemporary fashion. We meticulously curate a diverse range of clothing for every wardrobe, blending the latest trends with timeless quality. Discover pieces crafted for comfort, confidence, and to perfectly express your unique style. Shop now and elevate your everyday.
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>CONTACT US</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+08912746305</li>
                    <li>bharathkarthik2006@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ Instyle.com -All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer