import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { images } from '../../Assets/Images';
import Select from "react-dropdown-select";
import { motion } from 'framer-motion';
export default function Auth() {
  const [data,setData]=React.useState({
    "code":""
  })
  const options = [
    {
      value: 1,
      label: '+91'
    },
    {
      value: 2,
      label: '+92'
    }
  ];
  return (
    <div className='bg-gradient-to-b from-black flex flex-col items-center justify-center to-Onyx h-[88vh]'>
      <div className='flex w-[88%] justify-between'>
        <div className='flex w-[40%] flex-col items-center justify-center space-y-10'>
          <p className='font-semibold font-Montserrat text-3xl text-white'>
            Login or Signup
          </p>
          <div className='flex space-x-2'>
          <Select
          searchable={false}
          style={{
            backgroundColor:"#fff",
            borderRadius:20,
            outline:"none",
            fontFamily:"Montserrat",
            color:"#5c5c5c",
            fontWeight:500,
            height:40
          }}
          className=' outline-red-600'
          placeholder='Select'
          options={options} onChange={(values) => setData({...data,code:values})} />
            <input
              max={10}
              type='tel'
              placeholder='Enter Phone Number'
              className='w-[350px] outline-red-600 bg-white h-[40px] px-5 font-Montserrat rounded-full' />
          </div>

          <p className='font-Montserrat text-base text-white'>
            By continuing, I agree to <span className=' text-red-600 font-medium'>Terms of Use</span> &  <span className=' text-red-600 font-medium'>Privacy Policy</span>
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className='bg-red-600 px-4 py-1 rounded-full'>
            <p className='font-medium font-Montserrat text-base text-white'>
              Request OTP
            </p>
          </motion.button>

        </div>
        <Carousel infiniteLoop
          autoPlay
          swipeable={true}
          showThumbs={false}
          showIndicators={true}
          showArrows={false}
          showStatus={false}
          interval={3500}
          animationHandler={"fade"}
          transitionTime={2000}
          axis='vertical'
          className='w-[40%] rounded-xl -rotate-2'>
          <div className=' rounded-xl'>
            <img src={images.test} className=' rounded-2xl' />
          </div>
          <div className=' rounded-xl'>
            <img src={images.test} className=' rounded-2xl' />
          </div>
          <div className=' rounded-xl'>
            <img src={images.test} className=' rounded-2xl' />
          </div>
        </Carousel>
      </div>

    </div>
  )
}
