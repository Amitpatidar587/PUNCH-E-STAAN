import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Flash from "../flash/Flash";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("user");
  const [password, setPassword] = useState("");
  const [invalidContact, setInvalidContact] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const { setFlashMessage } = useContext(UserContext);
  const navigate = useNavigate();

  //test regax from
  /////////test case
  function phoneTest(contact) {
    return /^\d{10}$/.test(contact);
  }

  function passTest(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    if (phoneTest(contact) && passTest(password)) {
      setInvalidContact(false);
      setInvalidPassword(false);
      console.log(
        "first=>",
        username,
        name,
        "category=>",
        category,
        password,
        contact
      );
      await axios
        .post("http://localhost:8080/register", {
          username,
          category,
          contact,
          name,
          password,
        })
        .then((res) => {
          if (res.data.message === "error") {
            setFlashMessage(res.data.message);
            console.log("error occur");
          } else {
            console.log(res.data.message);
            navigate("/");
          }
        })
        .catch((err) => console.log("err=>", err));
    } else {
      if (!phoneTest(contact)) {
        setInvalidPassword(true);
        setInvalidContact(false);
      } else {
        console.log(
          "password and phone -------=>",
          phoneTest(contact),
          passTest(password)
        );
        setInvalidPassword(true);
        setInvalidContact(false);
      }
    }
  };
  const handleLogin = (e) => {
    navigate("/");
  };

  return (
    <div className="flex justify-center bg-transparent items-center h-screen bg-cover bg-center bg-no-repeat">
      <div className="w-2/5 px-10 py-4 shadow-2xl shadow-black rounded-2xl bg-orange-400 bg-opacity-0 backdrop-filter backdrop-blur-lg text-center">
        <h1 className="mb-3 text-gray-800 text-2xl">Register</h1>
        <form onSubmit={handleRegister}>
          <div className="mb-4 text-left">
            <label className="block mb-1 text-white" htmlFor="name">
              Name
            </label>
            <input
              type="name"
              id="name"
              value={name}
              placeholder="Enter your Name"
              onChange={(e) => setName(e.target.value)}
              className={`w-full p-2 border rounded-md bg-gray-100 transition ease-in-out duration-300 focus:border-orange-500 }`}
              required
            />
          </div>
          <div className="mb-4 text-left">
            <label className="block mb-1 text-white" htmlFor="Name">
              User Id / email Id
            </label>
            <input
              type="text"
              id="Name"
              value={username}
              placeholder="Enter your name"
              onChange={(e) => setUsername(e.target.value)}
              className={`w-full p-2 border rounded-md bg-gray-100 transition ease-in-out duration-300 focus:border-orange-500 `}
              required
            />
          </div>
          <div className="mb-4 text-left">
            <label className="block mb-1 text-white" htmlFor="contactNumber">
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
            {invalidContact ? (
              <h6 className="text-red-600">invalid contact number</h6>
            ) : null}
          </div>

          <div className="mb-6 text-left">
            <label className="block mb-1 text-white" htmlFor="password">
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
            {invalidPassword ? (
              <h6 className="text-red-600">
                invalid password ! make strong password{" "}
              </h6>
            ) : null}
          </div>

          <div className="mb-4 text-left ">
            <div className="flex">
              <label htmlFor="address" className="block mb-1 mt-1 text-white">
                Status : &nbsp;
              </label>
              <select
                name="category"
                className="`w-full p-1 border rounded-md bg-gray-100 transition ease-in-out duration-300 focus:border-orange-500"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="user"> user</option>
                <option value="sarpunch"> Sarpunch</option>
              </select>
            </div>
            {invalidPassword ? (
              <h6 className="text-red-600">invalid category </h6>
            ) : null}
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
