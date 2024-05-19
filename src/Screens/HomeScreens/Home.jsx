import React from 'react'
import { images } from '../../Assets/Images'
import { motion } from 'framer-motion'
import { MdOutlineArrowOutward, MdArrowForward } from "react-icons/md";
import { IoShirtOutline } from "react-icons/io5";
export default function Home() {
    return (
        <div className='bg-gradient-to-b from-black flex flex-col items-center to-Onyx h-[88vh]'>
            <div className=' flex flex-row h-full w-[88%] self-center justify-between text-white'>
                <div className='  h-[70%] w-[35%] mt-6 rounded-2xl rotate-2'>
                    <motion.button
                        className=' font-Montserrat flex text-2xl self-right hover:text-red-600 font-semibold text-white rounded-full p-1 '>
                        Spotlight of Week 
                        <div className='h-[30px] w-[30px] ml-5 border-white border-[1px] rounded-full flex justify-center items-center'><MdArrowForward color='#fff' size={15} /></div>
                    </motion.button>
                    <img src={images.test} alt='tetx' className='rounded-2xl' />
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                        className=' font-Montserrat flex tracking-widest items-center space-x-2 border-white border-[1px] text-xs font-semibold text-white rounded-full p-1 px-2 mt-1'>
                        /spotlight
                    </motion.button>
                </div>
                <div className='  h-[95%] w-[55%] mt-2 flex flex-col justify-between '>
                    <div className=' self-end w-[60%] flex flex-col space-y-2 '>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }}
                            className=' font-Montserrat flex items-center space-x-2 tracking-widest w-[82px] border-white border-[1px] text-xs font-semibold text-white rounded-full mx-2 p-1 px-2 mt-1'>
                            /featured
                        </motion.button>
                        <motion.button
                            className=' font-Montserrat text-left   text-2xl text-white rounded-full p-1 px-2 mt-1'>
                            elevate your experience with our handpicked featured selection...
                        </motion.button>
                        <hr className='w-[20%] self-end'/>
                        <div className='flex justify-between  items-center'>
                            <div className='flex space-x-2'>
                                <div className='h-[80px] w-[80px] bg-white rounded-full flex justify-center items-center'><img src={images.test} alt='tetx' className='rounded-full h-full w-full object-cover' /></div>
                                <div className='h-[80px] w-[80px] border-white border-[1px] rounded-full flex justify-center items-center'><IoShirtOutline color='#fff' size={35} /></div>
                                <div className='h-[80px] w-[80px] bg-white rounded-full flex justify-center items-center'><img src={images.test} alt='tetx' className='rounded-full h-full w-full object-cover' /></div>
                            </div>
                            <div className='h-[30px] w-[30px] border-white border-[1px] rounded-full flex justify-center items-center'><MdArrowForward color='#fff' /></div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }}
                            className=' font-Montserrat flex items-center space-x-2 border-white border-[1px] text-xs font-semibold tracking-widest text-white rounded-full mx-2 p-1 px-2 mt-1'>
                            /latest
                        </motion.button>
                        <motion.button
                            className=' font-Montserrat text-left   text-6xl font-semibold text-[#9c9c9c] rounded-full p-1 px-2 mt-1'>
                            balānce introducing our latest <span className='text-white'> clothing <br /> collection <div className='h-[40px] w-[40px] bg-white rounded-full flex justify-center items-center'><MdOutlineArrowOutward color='#000' size={28} /></div></span>
                        </motion.button>
                    </div>

                </div>
            </div>
        </div>
    )
}
