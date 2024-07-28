import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Event() {

    const[events,setEvents]=useState([]);

    useEffect(()=>{
        const call=async()=>{
        await axios
        .get('http://localhost:8080/events')
        .then((res)=>{
            console.log(res.data);
            setEvents(res.data);
            console.log('success');
             })
        .catch(err=>console.log(err));
    }
    call();
    },[])
  return (
    
  <div className=' pt-4 pb-3 px-2 mt-1 flex flex-col '>
   <h1 className="text-5xl   text-center inline-block  mx-auto   font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"> Upcoming Village Events </h1>
  <button class='w-16 ml-5 p-1 -mt-10 text-white bg-gradient-to-r from-blue-800  to-purple-800 border-1 hover:scale-110'> add</button>
   

    <div className='flex my-4 pt-5   flex-wrap gap-2 justify-evenly items-center'>
    {events.map((event)=>(
 
    <div key={event._id} class="w-80 p-2 m-2 h-3/5 bg-blue-800 rounded-md border-3  text-neutral-300  flex flex-col items-start justify-center gap-3 hover:scale-105  hover:shadow-md hover:shadow-slate-800 transition-shadow">
  <div class="w-full h-1/2 bg-sky-300 rounded-t-md">
    <img className='object-cover rounded-t-md' src={event.image} width='100%' height="100%" />
  </div>
  <div class="pb-3">
      <p class="px-3 py-1 text-center font-extrabold">{event.title}</p>
      <p class="px-3 py-1 text-center ">{event.date}</p>
      <hr></hr>
      <p class=" px-3 py-2  overflow-auto h-36">{event.info}</p>
      
  </div>
 </div>
    ))}  
    </div>
      
  </div>
  )
}
