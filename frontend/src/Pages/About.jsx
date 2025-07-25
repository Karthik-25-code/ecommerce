import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>More than just apparel, we're building a community around authentic and expressive style. Explore our thoughtfully sourced collections, designed to empower you with confidence and comfort. Join us in embracing fashion that feels good, looks great, and tells your story. Dive into our world of style.</p>
          <p>We offer a handpicked selection of high-quality clothing for men and women, ensuring both style and lasting comfort. From essential basics to statement pieces, our collections are designed to fit seamlessly into your life. Enjoy an effortless shopping experience and find your next favorite outfit with us.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at Instyle is to empower individuals through fashion that inspires confidence and celebrates personal expression. We're dedicated to curating high-quality, stylish apparel that not only looks good but feels great. We believe everyone deserves to discover their unique style effortlessly, making fashion an accessible and joyful experience for all.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance :</b>
          <p className='text-gray-600'>Our Commitment to Quality</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Our Commitment to Quality
Shop with Unmatched Convenience</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Exceptional Service, Every Time</p>
        </div>
      </div>
    </div>
  )
}

export default About