import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[invalidContact,setInvalidContact]=useState(false);
  const[invalidPassword,setInvalidPassword]=useState(false);
 
  const navigate = useNavigate();

  //test regax from 
   /////////test case
   function phoneTest(contact) {
    return /^\d{10}$/.test(contact);
  }

  function passTest(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  }


  const handleRegister =async(e) => {
    e.preventDefault();
    if (phoneTest(contact) && passTest(password)) {
      setInvalidContact(false)
      setInvalidPassword(false)
      console.log('first=>',name,email,password,contact)
      await axios.post('http://localhost:8080/register',{name,contact,email,password})
      .then(res=>{
       alert(res.data.message);
      })
      .catch(err=>console.log('err=>',err));
    } else {
      if(!phoneTest(contact)){
        setInvalidPassword(true);
        setInvalidContact(false);
      }else{
        console.log('password and phone -------=>',phoneTest(contact),passTest(password))
        setInvalidPassword(true);
        setInvalidContact(false);    
      }
    }
  };
  const handleLogin = (e) => {
    navigate("/");
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1523760957528-55d1d540360d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="w-2/5 p-10 shadow-2xl shadow-black rounded-2xl bg-orange-400 bg-opacity-0 backdrop-filter backdrop-blur-lg text-center">
        <h1 className="mb-5 text-gray-800 text-2xl">Register</h1>
        <form onSubmit={handleRegister}>
          <div className="mb-4 text-left">
            <label className="block mb-2 text-gray-700" htmlFor="Name">
               Name
            </label>
            <input
              type="text"
              id="Name"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              className={`w-full p-2 border rounded-md bg-gray-100 transition ease-in-out duration-300 focus:border-orange-500 `}
              required
            />
          </div>
          <div className="mb-4 text-left">
            <label className="block mb-2 text-gray-700" htmlFor="contactNumber">
              Contact Number
            </label>
            <input
              type="number"
              id="contactNumber"
              value={contact}
              placeholder="Enter your contact number"
              onChange={(e) => setContact(e.target.value)}
              className={`w-full p-2 border rounded-md bg-gray-100 transition ease-in-out duration-300 focus:border-orange-500 `}
              required
            />
            {invalidContact?<h6 className="text-red-600">invalid contact number</h6>:null}

          </div>
          <div className="mb-4 text-left">
            <label className="block mb-2 text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-2 border rounded-md bg-gray-100 transition ease-in-out duration-300 focus:border-orange-500 }`}
              required
            />
          </div>
          <div className="mb-6 text-left">
            <label className="block mb-2 text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-2 border rounded-md bg-gray-100 transition ease-in-out duration-300 focus:border-orange-500 `}
              required
            />
             {invalidPassword?<h6 className="text-red-600">invalid password ! make strong password </h6>:null}
          </div>
          <button
            type="submit"
            className="w-full p-2 mt-4 bg-red-500 text-white rounded-md transition ease-in-out duration-300 hover:bg-red-700 transform hover:scale-105"
          >
            Register
          </button>
        </form>

        <button
          type="submit"
          onClick={(e) => handleLogin()}
          className="w-full p-2 mt-4 bg-blue-500 text-white rounded-md transition ease-in-out duration-300 hover:bg-blue-700 transform hover:scale-105"
        >
          go back
        </button>
      </div>
    </div>
  );
};

export default Registration;
