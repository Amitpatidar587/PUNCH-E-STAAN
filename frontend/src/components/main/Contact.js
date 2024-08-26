import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContext from "../../context/UserContext";

export default function Contact() {
  const [contacts, setContacts] = useState([]);
  const [employee, setEmployee] = useState({});
  const [form, setForm] = useState(false);
  const [render, setRender] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const { setFlashMessage } = useContext(UserContext);
  let user = JSON.parse(localStorage.getItem("user"));

  const handleDelete = async (e) => {
    if (user.category === "sarpunch") {
      let id = e.target.id;
      try {
        await axios
          .delete(`http://localhost:8080/contacts/${e.target.id}`)
          .then((res) => {
            console.log(res.data);
            setRender(true);
          })
          .catch((err) => console.log(err));
      } catch (error) {}
    } else {
      setFlashMessage(
        `soory ${user.name} you don't have permission to delete scheme`
      );
    }
  };

  const handleEdit = (e, employee) => {
    setEmployee(employee);
    setIsEdit(true);
    openForm();
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("employee=>", employee);
    try {
      if (isEdit) {
        await axios
          .put(`http://localhost:8080/contacts/${employee._id}`, { employee })
          .then((res) => {
            console.log(res.data);
            closeForm();
          })
          .catch((err) => console.log(err));
      } else {
        await axios
          .post("http://localhost:8080/contacts", { employee })
          .then((res) => {
            console.log(res.data);
            closeForm();
          })
          .catch((err) => console.log(err));
      }
    } catch (error) {
      console.log("error submitting form", error);
    }
  };

  useEffect(() => {
    async function Call() {
      try {
        await axios
          .get("http://localhost:8080/contacts")
          .then((res) => {
            setContacts(res.data);
            console.log(res.data);
            setRender(false);
          })
          .catch((err) => console.log("error in contact components", err));
      } catch (error) {
        console.log("contact components error", error);
      }
    }
    Call();
  }, [render]);

  const openForm = () => {
    if(user.category==='sarpunch'){
      setForm(true);
    }else{
      setFlashMessage(`sorry ${user.name} you don't have permission to edit and add `)
    }
  };


  const closeForm = () => {
    setForm(false);
    setEmployee({});
    setIsEdit(false);
    setRender(true);
  };

  return (
    <div className="pt-4 pb-3 px-2 mt-1 flex flex-col">
      <h1 className="text-5xl pt-4 text-center inline-block mx-auto font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            Goverment Employees
      </h1>
      <button
        className="w-16 ml-5 p-1 rounded-md -mt-10 text-white bg-gradient-to-r from-blue-800 to-purple-800 border-1 hover:scale-110"
        onClick={openForm}
      >
        Add
      </button>

      <div className="flex w-full flex-wrap  justify-evenly gap-4  mt-5">
        {contacts.map((employee) => (
          <div
            key={employee.id}
            className="bg-white w-2/3 sm:w-2/5 md:h-2/5 w-2/5 shadow-lg rounded-lg overflow-hidden flex flex-col justify-evenly  lg:h-56 lg:w-5/12 lg:flex lg:flex-row "
          >
            <div className="w-full md:h-2/4 lg:h-full lg:w-1/2">
              <img
                src={employee.image}
                alt="Image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-3 pt-3 pb-2 h-2/3 flex flex-col lg:h-full lg:w-1/2 justify-between">
              <div className="overflow-auto h-32 ">
                <h2 className="text-xl font-bold">{employee.name}</h2>
                <p>
                  <span className="text-blue-700">Contact:</span>{" "}
                  {employee.phone}
                </p>
                <p>
                  <span className="text-blue-700">Email:</span> {employee.email}
                </p>
                <p>
                  <span className="text-blue-700">Profession:</span>{" "}
                  {employee.profession}
                </p>
              </div>
              <div className="flex justify-between gap-1 mt-1">
                <button
                  id={employee._id}
                  className="py-2 px-4 rounded-md bg-blue-600 text-white  hover:bg-blue-800 transition-colors"
                  onClick={handleDelete}
                >
                  Delete
                </button>
                <button
                  className="py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-800 transition-colors"
                  onClick={(e) => handleEdit(e, employee)}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {form && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gradient-to-br from-blue-600 to-blue-900 text-white rounded-lg shadow-lg max-w-lg w-full mx-auto p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Edit Event</h2>
              <button
                className="text-white focus:outline-none"
                onClick={closeForm}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Employee Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={employee.name}
                  onChange={handleChange}
                  className="mt-1 px-3 py-2 border rounded-md w-full bg-blue-800 text-white focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone
                </label>
                <input
                  id="phone"
                  type="number"
                  name="phone"
                  value={employee.phone}
                  onChange={handleChange}
                  className="mt-1 px-3 py-2 border rounded-md w-full bg-blue-800 text-white focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={employee.email}
                  onChange={handleChange}
                  className="mt-1 px-3 py-2 border rounded-md w-full bg-blue-800 text-white focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="image" className="text-sm font-medium">
                  Image URL
                </label>
                <input
                  id="image"
                  name="image"
                  value={employee.image}
                  onChange={handleChange}
                  className="mt-1 px-3 py-2 border rounded-md w-full bg-blue-800 text-white focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="profession" className="text-sm font-medium">
                  Profession
                </label>
                <input
                  id="profession"
                  name="profession"
                  value={employee.profession}
                  onChange={handleChange}
                  className="mt-1 px-3 py-2 border rounded-md w-full bg-blue-800 text-white focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
