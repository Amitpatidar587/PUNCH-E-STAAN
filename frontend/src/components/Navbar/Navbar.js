import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-transparent border-b-2 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              PUNCH
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/event" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Event</Link>
              <Link to="/scheme" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Scheme</Link>
              <Link to="/expenditure" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Expenditure</Link>
              <Link to="/problem" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Problem</Link>
              <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Contact</Link>
      
            </div>
          </div>
            <div className='lg:block'>
            <div className="ml-10 flex items-baseline space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md border-1 text-sm font-medium hover:bg-gray-700">login</Link>
              <Link to="/registration" className="px-3 py-2 rounded-md text-sm border-1 font-medium hover:bg-gray-700">register</Link>
      
            </div>
            </div>
          <div className="lg:hidden">
            <button 
              onClick={toggleMenu} 
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" 
              aria-expanded={isOpen}
            >
              {isOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/event" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Event</Link>
            <Link to="/scheme" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Scheme</Link>
            <Link to="/expenditure" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Expenditure</Link>
            <Link to="/problem" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Problem</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}