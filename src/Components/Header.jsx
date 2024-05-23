import { motion } from 'framer-motion'
import React from 'react'
import { FaRegCircleUser } from "react-icons/fa6";
import { BsBagHeart } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
export default function Header() {
    const [show, setShow] = React.useState({
        show: false,
        show1: false,
    })
    const navigate = useNavigate()
    return (
        <div className=' flex justify-between items-start px-5 py-3 z-50 h-[100px] bg-black sticky top-0' >
            <div className=''>
                <p className='font-Montserrat text-6xl text-white tracking-widest'>
                    BALĀNCE
                </p>
                <button className='font-Montserrat  text-white tracking-tighter px-2'>
                    Clothing
                </button>
            </div>
            <div className='flex space-x-3'>
                <p className='font-Montserrat text-lg text-white tracking-tighter'>
                    Products on <br /> <span className='text-red-600 font-semibold tracking-widest'>hotsale</span>
                </p>
                <p className='font-Montserrat text-lg text-white tracking-tighter'>
                    {"27 May 2024"}<br />
                    {"04:30PM"}
                </p>
            </div>
            <div className='flex w-[35%] justify-between'>
                <div>
                    <motion.button 
                    onClick={()=>{
                        navigate('store')
                    }}
                    className='font-Montserrat text-lg hover:text-red-600  text-white px-2'>
                        Store
                    </motion.button>
                    <motion.button 
                    onClick={()=>{
                        navigate('about')
                    }}
                    className='font-Montserrat text-lg hover:text-red-600  text-white px-2'>
                        About
                    </motion.button>
                    <motion.button  
                    onClick={()=>{
                        navigate('blogs')
                    }}
                    className='font-Montserrat text-lg hover:text-red-600  text-white px-2'>
                        Blogs
                    </motion.button>
                </div>
                <div className='space-x-2 flex'>
                    <button onMouseEnter={() => {
                        setShow({ ...show, show: true })
                    }}
                        onMouseLeave={() => {
                            setShow({ ...show, show: false })
                        }} className='font-Montserrat py-2 flex px-1 items-center h-[35px] justify-evenly text-base space-x-3  rounded-full bg-white text-black'>
                        {
                            show?.show ?
                                <p className='ml-3 font-semibold'>
                                    Cart
                                </p>
                                :
                                null
                        }

                        <motion.button

                            whileHover={{ backgroundColor: "#fff", color: "#000" }} className='bg-Matte text-white h-[30px] w-[30px] rounded-full flex justify-center items-center'>
                            <BsBagHeart />
                        </motion.button>
                    </button>
                    <button 
                    onClick={()=>{
                        navigate('auth')
                    }}
                    className='font-Montserrat py-2 flex px-1 items-center h-[35px] justify-between text-base space-x-3  rounded-full bg-white text-black'>
                        <p className='ml-3 font-semibold'>
                            Login
                        </p>
                        <motion.button
                            whileHover={{ backgroundColor: "#fff", color: "#000" }} className='bg-Matte text-white h-[30px] w-[30px] rounded-full flex justify-center items-center'>
                            <FaRegCircleUser />
                        </motion.button>
                    </button>
                </div>
            </div>
        </div>
    )
}
