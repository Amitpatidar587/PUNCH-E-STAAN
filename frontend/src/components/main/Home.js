import React from 'react'

export default function Home() {
  return (
    <div className=" pt-4 pb-3 px-0 mt-1 flex flex-col ">

<div>
  <section class="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 md:py-24">
    <div>
      <img
        src="/placeholder.svg"
        width="600"
        height="400"
        alt="Hero Image"
        class="rounded-lg shadow-lg"
       
      />
    </div>
    <div class="flex flex-col justify-center">
      <h2 class="text-3xl font-bold mb-4 animate-fade-in-up">Welcome to Our Project</h2>
      <p class="text-lg text-gray-500 mb-6 animate-fade-in-up">
        This is a description of our project. We are working to improve the lives of people in the village through
        various initiatives.
      </p>
      <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 animate-fade-in-up">
        Learn More
      </button>
    </div>
  </section>
  <section class="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 md:py-24 bg-gray-100">
    <div class="flex flex-col justify-center">
      <h2 class="text-3xl font-bold mb-4 animate-fade-in-up">Events in the Village</h2>
      <p class="text-lg text-gray-500 mb-6 animate-fade-in-up">
        We organize various events in the village to bring the community together and celebrate our culture.
      </p>
      <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 animate-fade-in-up">
        View Events
      </button>
    </div>
    <div>
      <img
        src="/placeholder.svg"
        width="600"
        height="400"
        alt="Events Image"
        class="rounded-lg shadow-lg"
      
      />
    </div>
  </section>
  <section class="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 md:py-24">
    <div>
      <img
        src="/placeholder.svg"
        width="600"
        height="400"
        alt="Schemes Image"
        class="rounded-lg shadow-lg"
 
      />
    </div>
    <div>
      <h2 class="text-3xl font-bold mb-4 animate-fade-in-up">Government Schemes</h2>
      <p class="text-lg text-gray-500 mb-6 animate-fade-in-up">
        The government has introduced various schemes to support the people in the village. We can help you access
        these schemes.
      </p>
      <div class="grid grid-cols-2 gap-4 animate-fade-in-up">
        <div class="bg-gray-100 p-4 rounded-lg shadow-lg">
          <h3 class="text-xl font-bold mb-2">Men's Schemes</h3>
          <p class="text-gray-500">Learn about the schemes available for men in the village.</p>
          <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-4">
            Explore
          </button>
        </div>
        <div class="bg-gray-100 p-4 rounded-lg shadow-lg">
          <h3 class="text-xl font-bold mb-2">Women's Schemes</h3>
          <p class="text-gray-500">Learn about the schemes available for women in the village.</p>
          <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-4">
            Explore
          </button>
        </div>
      </div>
    </div>
  </section>
  <section class="py-12 md:py-24">
    <h2 class="text-3xl font-bold mb-4 animate-fade-in-up text-center">Raise a Problem</h2>
    <p class="text-lg text-gray-500 mb-8 animate-fade-in-up text-center">
      If you have any issues or problems in the village, you can raise them here.
    </p>
    <div class="max-w-md mx-auto animate-fade-in-up">
      <input
        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4"
        placeholder="Enter your problem"
        type="text"
      />
      <textarea
        class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4"
        rows="4"
        placeholder="Describe the problem in detail"
      ></textarea>
      <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
        Submit
      </button>
    </div>
  </section>
  <section class="bg-gray-100 py-12 md:py-24">
    <div class="container mx-auto px-4 md:px-8">
      <h2 class="text-3xl font-bold mb-4 animate-fade-in-up">Government Expenditure Details</h2>
      <p class="text-lg text-gray-500 mb-8 animate-fade-in-up">
        The government has invested funds in various areas to improve the village. Here are the details:
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 animate-fade-in-up">
        <div class="bg-white p-4 rounded-lg shadow-lg">
          <h3 class="text-xl font-bold mb-2">Road</h3>
          <p class="text-gray-500">
            The government has invested $50,000 in improving the roads, with $20,000 remaining.
          </p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-lg">
          <h3 class="text-xl font-bold mb-2">Water Supply</h3>
          <p class="text-gray-500">
            The government has invested $30,000 in upgrading the water supply system, with $10,000 remaining.
          </p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-lg">
          <h3 class="text-xl font-bold mb-2">Electricity</h3>
          <p class="text-gray-500">
            The government has invested $40,000 in improving the electricity infrastructure, with $15,000 remaining.
          </p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-lg">
          <h3 class="text-xl font-bold mb-2">Healthcare</h3>
          <p class="text-gray-500">
            The government has invested $25,000 in upgrading the healthcare facilities, with $5,000 remaining.
          </p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-lg">
          <h3 class="text-xl font-bold mb-2">Education</h3>
          <p class="text-white">
            The government has invested $35,000 in improving the education system, with $12,000 remaining.
          </p>
        </div>
      </div>
      <div class="mt-6 flex justify-between items-center animate-fade-in-up">
        <div>
          <p class="font-bold">Total Funds Provided: $180,000</p>
          <p class="font-bold">Total Remaining Funds: $62,000</p>
        </div>
      </div>
    </div>
  </section>
  <section class="py-12 md:py-24">
    <div class="container mx-auto px-4 md:px-8">
      <h2 class="text-3xl font-bold mb-4 animate-fade-in-up">Government Employees</h2>
      <p class="text-lg text-gray-500 mb-8 animate-fade-in-up">
        Meet the government employees working in our village.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 animate-fade-in-up">
        <div class="bg-gray-100 p-4 rounded-lg shadow-lg">
          <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <img class="aspect-square h-full w-full" alt="Employee 1" src="/placeholder-user.jpg" />
          </span>
          <h3 class="text-xl font-bold mb-2">John Doe</h3>
          <p class="text-gray-500">Village Administrator</p>
        </div>
        <div class="bg-gray-100 p-4 rounded-lg shadow-lg">
          <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <img class="aspect-square h-full w-full" alt="Employee 2" src="/placeholder-user.jpg" />
          </span>
          <h3 class="text-xl font-bold mb-2">Jane Smith</h3>
          <p class="text-gray-500">Healthcare Worker</p>
        </div>
        <div class="bg-gray-100 p-4 rounded-lg shadow-lg">
          <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <img class="aspect-square h-full w-full" alt="Employee 3" src="/placeholder-user.jpg" />
          </span>
          <h3 class="text-xl font-bold mb-2">Michael Johnson</h3>
          <p class="text-gray-500">Education Officer</p>
        </div>
        <div class="bg-gray-100 p-4 rounded-lg shadow-lg">
          <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <img class="aspect-square h-full w-full" alt="Employee 4" src="/placeholder-user.jpg" />
          </span>
          <h3 class="text-xl font-bold mb-2">Emily Davis</h3>
        </div>
      </div>
    </div>
  </section>
</div>
    </div>
  )
}
