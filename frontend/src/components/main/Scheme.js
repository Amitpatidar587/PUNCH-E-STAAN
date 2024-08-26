import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContext from "../../context/UserContext";

export default function Scheme() {
  const [schemes, setSchemes] = useState([]);
  const [render, setRender] = useState(false);
  const [scheme, setScheme] = useState({});
  const [form, setForm] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const {setFlashMessage}=useContext(UserContext);
  let user=JSON.parse(localStorage.getItem('user'))

  const handleEdit = (e, scheme) => {
    setScheme(scheme);
    setIsEdit(true);
    openForm();
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setScheme((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    console.log(scheme);
    console.log(isEdit);
    e.preventDefault();
    try {
      if (isEdit) {
        console.log("put occur");
        await axios
          .put(`http://localhost:8080/schemes/${scheme._id}`, { scheme })
          .then((res) => {
            setFlashMessage(res.data.message);
            closeForm();
          })
          .catch((err) => console.log(err));
      } else {
        console.log("post occur");
        await axios
          .post("http://localhost:8080/schemes", {scheme})
          .then((res) => {
            setFlashMessage(res.data.message);
            closeForm();
          })
          .catch((err) => console.log(err));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (e) => {
    if(user.category==='sarpunch'){
    let id = e.target.id;
    try {
      await axios
      .delete(`http://localhost:8080/schemes/${id}`)
      .then((res) => {
        setFlashMessage(res.data.message);
        setRender(true);
      })
      .catch((err) => console.log(err));
    } catch (error) {
      console.log(error)
    }
  }else{
    setFlashMessage(`soory ${user.name} you don't have permission to delete scheme`)
  }
  };

  useEffect(() => {
    async function call() {
      try {
        await axios
          .get("http://localhost:8080/schemes")
          .then((res) => {
             setSchemes(res.data);
            console.log("respone data=>",res.data)
            
         
            setRender(false);
          })
          .catch((err) => console.log("err is scheme =>", err));
      } catch (error) {
        console.log(error);
      }
    }
    call();
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
    setScheme({});
    setRender(true);
    setIsEdit(false);
  };

  return (
    <div className="pt-4 pb-3 px-2 mt-1 flex flex-col">
      <h1 className="text-5xl pt-4 text-center inline-block mx-auto font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
        Goverment Schemes
      </h1>
      <button
        className="w-16 ml-5 p-1 rounded-md -mt-10 text-white bg-gradient-to-r from-blue-800 to-purple-800 text-re0 border-1 hover:scale-110"
        onClick={openForm}
      >
        Add
      </button>

      <div className="flex my-4 pt-5 flex-wrap gap-2 justify-evenly items-center">
        {schemes.map((scheme) => (
          <div
            key={scheme._id}
            className="w-80 p-3 m-3 h-3/5 bg-[#3730a3] items-center rounded-lg border-3 text-neutral-300 flex flex-col i justify-center gap-3 hover:scale-105 hover:shadow-md hover:shadow-slate-800 transition-shadow"
          >
            <span className="text-2xl w-full justify-center my-auto item-center text-center h-16 overflow-auto font-bold">
              {scheme.title}
            </span>
            <div className="pb-3 w-full text-center ">
              <p className="px-3 py-3 text-center text-xl text-green-400 font-extrabold">
                Applicable : {scheme.applicableType}
              </p>
              <hr></hr>
              <p className="px-3 py-2 h-28  overflow-auto text-center">
                {scheme.details}
              </p>
              <hr></hr>
              <a
                href={scheme.registerLink}
                target="blank"
                className="text-xl mt-3 text-blue-600 text-center p-1 block w-full bg-white font-bold border-2"
              >
                Register
              </a>
              <div className="flex flex-wrap justify-evenly mt-4 items-center text-right">
                <button
                  id={scheme._id}
                  className="py-1 px-3 w-1/3 rounded-md border-1 hover:bg-blue-800 hover:scale-105 bg-transparent text-white"
                  onClick={handleDelete}
                >
                  Delete
                </button>
                <button
                  className="py-1 px-3 w-1/3 rounded-md border-1 hover:bg-blue-800 hover:scale-105 hover:text-red-600 bg-transparent text-white"
                  onClick={(e) => handleEdit(e, scheme)}
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
          <div className="bg-gradient-to-br from-blue-600 to-blue-900 text-white rounded-lg shadow-lg max-w-md w-full mx-auto">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Edit Event</h2>
                <button
                  className="text-white focus:outline-none"
                  onClick={closeForm}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="title" className="text-sm font-medium">
                    Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    name="title"
                    value={scheme.title}
                    onChange={handleChange}
                    className="mt-1 px-2 py-1 border-1 border-white w-full rounded-md bg-blue-800 text-white placeholder:text-blue-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="applicableType"
                    className="text-sm font-medium"
                  >
                    Applicable Type
                  </label>
                  <input
                    id="applicableType"
                    type="text"
                    name="applicableType"
                    value={scheme.applicableType}
                    onChange={handleChange}
                    className="mt-1 w-full px-2 py-1 border-1 border-white rounded-md bg-blue-800 text-white placeholder:text-blue-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="details" className="text-sm font-medium">
                    Details
                  </label>
                  <input
                    id="details"
                    type="text"
                    name="details"
                    value={scheme.details}
                    onChange={handleChange}
                    className="mt-1 w-full px-2 py-1 border-1 border-white rounded-md bg-blue-800 text-white placeholder:text-blue-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="registerLink" className="text-sm font-medium">
                    Register Link
                  </label>
                  <textarea
                    id="registerLink"
                    name="registerLink"
                    value={scheme.registerLink}
                    onChange={handleChange}
                    className="mt-1 w-full px-2 py-1 border-1 border-white rounded-md bg-blue-800 text-white placeholder:text-blue-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full my-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
