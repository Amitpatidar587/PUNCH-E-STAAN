import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Scheme() {
  const [schemes, setSchemes] = useState([]);

  useEffect(() => {
    async function call() {
      try {
        await axios
          .get("http://localhost:8080/schemes")
          .then((res) => {
            console.log('res data in scheme',res.data);
            setSchemes(res.data);
          })
          .catch((err) => console.log("err is scheme =>", err));
      } catch (error) {
        console.log(error);
      }
    }
    call();
  }, []);

  return (
    <div className=" pt-4 pb-3 px-2 mt-1 flex flex-col">
      <h1 className="text-5xl   text-center   font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
        {" "}
        Upcoming Village Events{" "}
      </h1>
  <button class='w-16 ml-5 p-1 rounded-md -mt-10 text-white bg-gradient-to-r from-blue-800  to-purple-800 border-1 hover:scale-110'> add</button>

     
   

      <div className="flex my-4 pt-5  flex-wrap gap-2 justify-evenly items-center">
        {schemes.map((scheme) => (
           <div key={scheme._id} class="w-80 p-4 m-5 h-3/5 bg-[#3730a3] rounded-lg border-3  text-neutral-300  flex flex-col items-start justify-center gap-3 hover:scale-105  hover:shadow-md hover:shadow-slate-800 transition-shadow">
           <span className="text-2xl w-full justify-center my-auto item-center text-center h-16 overflow-auto font-bold">{scheme.title}</span>
           <div class="pb-3">
               <p class="px-3 py-3 text-center text-green-400 font-extrabold"><span className="text-xl text-green-400">Applicable : {scheme.applicableType}</span> </p>
               <hr></hr>
               <p class="px-3 py-2 fixed-h overflow-auto text-center ">{scheme.details}</p>
               <hr></hr>
               <br></br>
               
               <a href={scheme.registerLink} className="text-xl text-blue-600 text-center p-1 block w-full bg-white font-bold border-2 ">register </a>
            
               
           </div>
          </div>
        ))}
      </div>
    </div>
  );
}
