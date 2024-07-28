import React from 'react'
import { Link } from 'react-router-dom'



export default function Navbar() {
  return (
      <nav className="navbar bg-gradient-to-r from-blue-800  to-purple-800   m-0 navbar-expand-lg  border-bottom fixed-top">
  <div className="container">
    <Link className="navbar-brand text-white" to='/'>Navbar</Link>
   
    <div className=" pr-5 mr-5 " >
      <ul className="navbar  mb-1 mb-lg-0 "Link>
        <li className="nav-item">
          <Link className="nav-link text-white mx-4" aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white mx-4" aria-current="page" to="/main/Event">Event</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white mx-4" aria-current="page" to="/main/scheme">Scheme</Link>
        </li>
       
       
       
      </ul>
    
    </div>
  </div>
</nav>
    
  )
}
