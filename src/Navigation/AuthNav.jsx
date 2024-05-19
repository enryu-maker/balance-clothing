import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Screens/HomeScreens/Home'
import Auth from '../Screens/AuthScreens/Auth'

export default function AuthNav() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
    </Routes>
  )
}
