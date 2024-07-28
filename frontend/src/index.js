import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Login from './components/login/Login'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Registration from './components/login/Registration';
import Index from './components/main/Index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div className='bg-gradient-to-r from-blue-800  to-purple-800'>
    <Router>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/registration' element={<Registration/>}></Route>
      <Route path='/main/*' element={<Index/>}></Route>
    </Routes>
    </Router>
    </div>
   
  </>
  
);
reportWebVitals();
