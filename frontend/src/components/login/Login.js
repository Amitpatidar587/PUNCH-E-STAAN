import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import Flash from "../flash/Flash";


const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const {setFlashMessage}=useContext(UserContext);

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      await axios
        .post("http://localhost:8080/login", { username, password })
        .then((res) => {
          if(res.data?.error && res.data.error.length){
            setFlashMessage('invalid user')
          }else{
            console.log(res.data);
            localStorage.setItem('user', JSON.stringify(res.data));
            navigate("/event");
          }
        }
        )
        .catch((err) =>{
           console.log("login axios err=>", err);
           alert('username or password in incorrect')
          })
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat" 
    >
      <div className="w-1/3 p-10 mt-0 pt-6 shadow-2xl shadow-black rounded-2xl bg-orange-400 bg-opacity-0 backdrop-filter backdrop-blur-lg text-center">
        <h1 className="mb-5 text-gray-800 text-white text-2xl">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4 text-left">
            <label className="block mb-2 text-white " htmlFor="username">
              User ID /email ID
            </label>
            <input
              type="email"
              id="username"
              value={username}
              placeholder="enter user Id"
              onChange={(e) => setUsername(e.target.value)}
              className={`w-full p-2  bg-transparent border-1 border-white rounded-md bg-gray-100 transition ease-in-out duration-300 focus:border-orange-500`}
              required
            />
          </div>
          <div className="mb-6 text-left">
            <label className="block mb-2 text-white " htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-2 border-1 border-white bg-transparent rounded-md bg-gray-100 transition ease-in-out duration-300 focus:border-orange-500`}
              required
            />
          </div>
          <button
            className="w-full p-2 mt-4 bg-transparent border-2 text-white rounded-md transition ease-in-out duration-300 hover:bg-red-700 transform hover:scale-105"
            type="submit" >

            Log in
          </button>
       

        </form>

                <p class="flex justify-center mt-6 text-white font-sans text-sm antialiased font-light leading-normal text-inherit">
          Don't have an account?
          <Link
            to='/registration'
            class="block ml-1 text-white font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
            Sign up
          </Link>
          </p>
    
      </div>
    </div>
  );
};

export default App;
