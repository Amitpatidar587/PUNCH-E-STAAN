import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UserContextProvider from './context/UserContextProvider';
import Login from './components/login/Login'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Registration from './components/login/Registration';
import Home from './components/main/Home'
import Event from './components/main/Event';
import Scheme from './components/main/Scheme';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/main/Contact';
import Problem from './components/main/Problem';
import Expenditure from './components/main/Expenditure';
import Flash from './components/flash/Flash';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
    <div className='bg-gradient-to-r from-blue-600  to-blue-900'
    >
    <Router>
      <div>
        <Navbar/>
        <Flash/>
    <Routes>

      <Route path='/' element={<Login/>}></Route>
      <Route path='/registration' element={<Registration/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
    <Route path='/event' element={<Event/>}></Route>
    <Route path='/scheme' element={<Scheme/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/problem' element={<Problem/>}></Route>
    <Route path='/expenditure' element={<Expenditure/>}></Route>
    </Routes>
      </div>
    </Router>
    </div>  
  </UserContextProvider>
  
);
reportWebVitals();
