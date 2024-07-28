import React, { useEffect } from 'react'
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Event from './Event'
import Scheme from './Scheme'
import { useNavigate } from 'react-router-dom'

export default function Index() {
    
  return (
    <div className=" bg-cover bg-center bg-no-repeat">
    <Navbar/>
    <div className='mt-5 pt-3 '></div>
    <Routes>
    <Route path='/event' element={<Event/>}></Route>
    <Route path='/scheme' element={<Scheme/>}></Route>
    </Routes>
    </div>
  )
}
