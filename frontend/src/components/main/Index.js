import React, { useEffect } from 'react'
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Event from './Event'
import Scheme from './Scheme'
import { useNavigate } from 'react-router-dom'
import Contact from './Contact'
import Problem from './Problem'

export default function Index() {
    
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat">
    <Navbar/>
    <div className='mt-5 pt-0 '></div>
    <Routes>
    <Route path='/event' element={<Event/>}></Route>
    <Route path='/scheme' element={<Scheme/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/problem' element={<Problem/>}></Route>
    </Routes>
    </div>
  )
}
