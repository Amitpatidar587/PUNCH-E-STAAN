import React, { useState } from "react";

function Problem() {
  const [view, setView] = useState("raise"); // '' for none, 'raise' for raise form, 'status' for status view

  const handleRaiseClick = () => setView("raise");
  const handleStatusClick = () => setView("status");
  const handleBackClick = () => setView("");

  return (
    <div className=" pt-4 pb-3 px-2 mt-1 flex flex-col ">
         <h1 className="text-5xl pt-4  text-center inline-block  mx-auto   font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
        {" "}
        Upcoming Village Events{" "}
      </h1>
{view=='raise'?<>
<div class="w-full max-w-md  mx-auto mt-10 py-12 px-4 sm:px-6 lg:px-8 bg-none rounded-lg shadow-lg">
  <form class="space-y-6">
    <div>
      <label for="problem-type" class="block text-sm text-white font-medium text-primary-foreground">
        Problem Type
      </label>
      <div class="mt-1">
        <input
          id="problem-type"
          required=""
          class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm text-primary-foreground bg-transparent border-1 border-white px-4 py-2"
          type="text"
          name="problem-type"
          placeholder="Enter problem type"
        />
      </div>
    </div>
    <div>
      <label for="description" class="block text-white text-sm font-medium text-primary-foreground">
        Description
      </label>
      <div class="mt-1">
        <textarea
          id="description"
          name="description"
          rows="3"
          required=""
          class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm text-primary-foreground bg-transparent border-1 border-white px-4 py-2"
          placeholder="Describe the problem"
        ></textarea>
      </div>
    </div>
    <div>
      <label for="address" class="block text-white text-sm font-medium text-primary-foreground">
        Address
      </label>
      <div class="mt-1">
        <input
          id="address"
          required=""
          type="text"
          name="address"
          class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm text-primary-foreground bg-transparent border-1 border-white px-4 py-2"
          placeholder="Enter address"
        />
      </div>
    </div>
    <div class="flex justify-between">
      <button
        type="submit"
        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm text-white font-medium rounded-md text-primary-foreground bg-blue-800  hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        Submit
      </button>
      <button
        type="button"
        onClick={handleStatusClick}
        class="inline-flex bg-blue-800 justify-center py-2 text-white px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-primary-foreground  hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
      >
        Status
      </button>
    </div>
  </form>
  
</div>
</>:null}
{view==='status'?<>
<div>here raise problem</div>
<div class="mt-6 bg-white rounded-md shadow-md p-4">
    <h3 class="text-lg font-medium text-gray-900">Raised Problem</h3>
    <div class="mt-2 space-y-2">
      <div class="flex items-center justify-between">
        <p class="text-gray-500">Name:</p>
        <p class="font-medium">Project Gram Puuch</p>
      </div>
      <div class="flex items-center justify-between">
        <p class="text-gray-500">Contact:</p>
        <p class="font-medium">123-456-7890</p>
      </div>
      <div class="flex items-center justify-between">
        <p class="text-gray-500">Problem Type:</p>
        <p class="font-medium">Pothole</p>
      </div>
      <div class="flex items-center justify-between">
        <p class="text-gray-500">Description:</p>
        <p class="font-medium">Large pothole on Main Street</p>
      </div>
      <div class="flex items-center justify-between">
        <p class="text-gray-500">Address:</p>
        <p class="font-medium">123 Main Street, Anytown USA</p>
      </div>
    </div>
    <div class="mt-4 flex justify-end">
      <button
        type="button"
        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-primary-foreground bg-secondary hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
      ></button>
    </div>
    </div>

</>:null}
</div>
  )
}
  


export default Problem;
