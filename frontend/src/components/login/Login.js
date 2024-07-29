import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      await axios
        .post("http://localhost:8080/login", { email, password })
        .then((res) => {
          if (
            res.data.message === "invalid password please try again" ||
            res.data.message === "invalid user please try again"
          ) {
            console.log(res.data.message);
          } else {
            setUser(res.data);
            navigate("/main/event");
          }
        })
        .catch((err) => console.log("login axios err=>", err));
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = () => {
    navigate("/registration");
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1523760957528-55d1d540360d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="w-1/3 p-10 shadow-2xl shadow-black rounded-2xl bg-orange-400 bg-opacity-0 backdrop-filter backdrop-blur-lg text-center">
        <h1 className="mb-5 text-gray-800 text-2xl">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4 text-left">
            <label className="block mb-2 text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="enter user Id"
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-2 border rounded-md bg-gray-100 transition ease-in-out duration-300 focus:border-orange-500`}
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
              placeholder="enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-2 border rounded-md bg-gray-100 transition ease-in-out duration-300 focus:border-orange-500`}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 mt-4 bg-blue-500 text-white rounded-md transition ease-in-out duration-300 hover:bg-blue-700 transform hover:scale-105"
          >
            Login
          </button>
        </form>
        <button
          onClick={handleRegister}
          className="w-full p-2 mt-4 bg-red-500 text-white rounded-md transition ease-in-out duration-300 hover:bg-red-700 transform hover:scale-105"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default App;
