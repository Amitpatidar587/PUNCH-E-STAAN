import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Contact() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function Call() {
      try {
        await axios
          .get("http://localhost:8080/contacts")
          .then((res) => {
            setContacts(res.data);
            console.log(res.data);
          })
          .catch((err) => console.log("error in contact components", err));
      } catch (error) {
        console.log("contact components error", error);
      }
    }
    Call();
  }, []);

  return (
    <div className="pt-4 pb-3 px-2 mt-1 flex flex-col">
      <h1 className="text-5xl pt-4 text-center inline-block mx-auto font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
        Upcoming Village Events
      </h1>
      <button className="w-16 ml-5 p-1 rounded-md -mt-10 text-white bg-gradient-to-r from-blue-800 to-purple-800 border-1 hover:scale-110">
        add
      </button>

      <div className="row flex my-4 pt-5 flex-wrap gap-2 justify-evenly items-center">
        {contacts.map((employee) => (
          <div key={employee.id} className="bg-white p-0 shadow-lg rounded-lg col-5 m-3 flex">
            <div className="w-1/2 h-auto">
              <img
                src={employee.image}
                alt="Image"
                className="w-full h-full bg-no-repeat bg-center rounded-l-lg object-cover"
              />
            </div>
            <div className="py-4 px-3  flex flex-col justify-center">
              <h2 className="text-xl font-bold">{employee.name}</h2>
              <p>Contact: {employee.phone}</p>
              <p>Email: {employee.email}</p>
              <p>Profession: {employee.profession}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
