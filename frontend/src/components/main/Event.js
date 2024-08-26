import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import UserContext from "../../context/UserContext";

export default function Event() {
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState({});
  const [form, setForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [render,setRender]=useState(false)
  const {setFlashMessage}=useContext(UserContext);
  let user=JSON.parse(localStorage.getItem('user'))
  console.log(user);



  //edit event
  const handleEdit = (e, event) => {
    openForm()
    setIsEditing(true);
    setEvent(event); //set UpdateEvent into eventState
  };

  // onChange on form's inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prev) => ({ ...prev, [name]: value }));
  };

  //form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(event);
    try {
      if (isEditing) {
        await axios
          .put(`http://localhost:8080/events/${event._id}`, { event })
          .then((res) =>{
            console.log(res.data)
            closeForm();
      })
          .catch((err) => console.log(err));
      } else {
        await axios
          .post("http://localhost:8080/events", { event })
          .then((res) =>{
            console.log(res.data)
            console.log(res.data?.error)
            closeForm()
          })
          .catch((err) => console.log(err));
      }
      

    } catch (error) {}
  };

  // delete event
  const handleDelete = async (e, id) => {
    if(user.category==='sarpunch'){
      try {
        await axios
          .delete(`http://localhost:8080/events/${id}`)
          .then((res) =>{
             console.log("event deleted =>", res.data)
             setRender(true);
          })
          .catch((err) => console.log("error occur in delete event=>", err)); 
      } catch (error) {
        console.log(error);
      }
    }else{
      setFlashMessage(`sorry you don't have permission to delete Event`)
    }
   
  };

  // useEffect
  useEffect(() => {
    const call = async () => {
      await axios
        .get("http://localhost:8080/events")
        .then((res) => {
          setEvents(res.data);
          setRender(false);
        })
        .catch((err) => console.log("data fetch error in event", err));
    };
    call();
  }, [render]);


  // form handle
  const openForm = () =>{
    if(user.category==='sarpunch'){
      setForm(true);
    }else{
      setFlashMessage(`sorry ${user.name} you don't have permission to edit and add `)
    }
  } 
  const closeForm = () =>{
     setForm(false);
     setIsEditing(false);
     setEvent({});
     setRender(true)
    }


  return (
    <div className="pt-4 pb-3 px-2 mt-1 flex flex-col">
      <h1 className="text-5xl pt-4 text-center inline-block mx-auto font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
        Upcoming Village Events
      </h1>
      <button
        className="w-16 ml-5 p-1 rounded-md -mt-10 text-white bg-gradient-to-r from-blue-800 to-purple-800 border-1 hover:scale-110"
        onClick={openForm}
      >
        Add
      </button>

      <div className="flex my-4 pt-5 flex-wrap gap-2 justify-evenly items-center">
        {events.map((event) => (
          <div
            key={event._id}
            className="w-96 p-2 my-4 h-3/5 bg-[#3730a3] rounded-md border-3 text-neutral-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]  justify-center gap-3 shadow-lg shadow-black transition-shadow"
          >
            <div className="w-full h-1/2 bg-sky-300 rounded-t-md">
              <img
                className="object-cover rounded-t-md"
                src={event.image}
                width="100%"
                height="100%"
                alt={event.image}
              />
            </div>
            <div className="pb-3">
              <p className="px-3 py-1 text-xl text-center font-extrabold">
                {event.title}
              </p>
              <p className="px-3 py-1 text-green-400 text-center">
                {event.date}
              </p>
              <hr />
              <p className="px-3 py-2 overflow-auto h-36">{event.info}</p>
            </div>
            <div className="flex  flex-wrap justify-evenly  pb-3 text-right ">
              <button
                className="py-1 px-3 w-1/3  rounded-md border-1 hover:bg-blue-800 hover:scale-105  bg-transparent  text-white"
                onClick={(e) => handleDelete(e, event._id)}
              >
                delete
              </button>
              <button
                className="py-1 px-3 w-1/3  rounded-md border-1 hover:bg-blue-800 hover:scale-105 hover:text-red-600  bg-transparent  text-white"
                onClick={(e) => handleEdit(e, event)}
              >
                Edit
              </button>
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
              <form className="space-y-4 mt-6" onSubmit={handleSubmit} >
                <div>
                  <label htmlFor="image-url" className="text-sm font-medium">
                    Image URL
                  </label>
                  <input
                    id="image-url"
                    type="text"
                    name="image"
                    value={event.image}
                    onChange={handleChange}
                    className="mt-1 px-2 py-1 border-1 border-white w-full rounded-md bg-blue-800 text-white placeholder:text-blue-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="title" className="text-sm font-medium">
                    Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    name="title"
                    value={event.title}
                    onChange={handleChange}
                    className="mt-1 w-full px-2 py-1 border-1 border-white rounded-md bg-blue-800 text-white placeholder:text-blue-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="date" className="text-sm font-medium">
                    Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    name="date"
                    value={event.date}
                    onChange={handleChange}
                    className="mt-1 w-full px-2 py-1 border-1 border-white rounded-md bg-blue-800 text-white placeholder:text-blue-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                  
                  />
                </div>
                <div>
                  <label htmlFor="information" className="text-sm font-medium">
                    Information
                  </label>
                  <textarea
                    id="information"
                    name="info"
                    value={event.info}
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
