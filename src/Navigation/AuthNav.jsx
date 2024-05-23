import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Screens/HomeScreens/Home'
import Auth from '../Screens/AuthScreens/Auth'
import Store from '../Screens/HomeScreens/Store'
import Blogs from '../Screens/HomeScreens/Blogs'
import About from '../Screens/HomeScreens/About'

export default function AuthNav() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
    </Routes>
  )
}
