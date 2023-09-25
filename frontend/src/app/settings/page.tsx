'use client'

import NavBar from "@/components/NavBar"
// import  Footer  from "@/components/Footer"

const settings = () => {
  return (
    <>
      <NavBar />
  <div className=" px-60 mt-10">
  <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-18">
  <div className="h-32 rounded-lg">

  <div className="p-1 shadow-xl text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
  <div className=" bg-black sm:p-8 p-6 rounded-xl">

  <div className="p-12 max-w-1.5">

<label
 
  className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-indigo-500  focus-within:ring-1 focus-within:ring-indigo-500 "
>
  <input
    type="title"
    id="UserTitle"
    placeholder="Title"
    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
  />

  <span
    className="absolute start-3 top-3 -translate-y-1/2 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
  >
    Title
  </span>
</label>

<label
 
  className="relative block overflow-hidden rounded-md border border-gray-200 mt-5 px-3 pt-3 shadow-sm focus-within:border-indigo-500  focus-within:ring-1 focus-within:ring-indigo-500 "
>
  <input
    type="tags"
    id="UserTags"
    placeholder="Tags"
    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
  />

  <span
    className="absolute start-3 top-3 -translate-y-1/2 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
  >
    Tags
  </span>
</label>

<label
 
  className="relative block overflow-hidden rounded-md border border-gray-200 mt-5 px-3 pt-3 shadow-sm focus-within:border-indigo-500  focus-within:ring-1 focus-within:ring-indigo-500 "
>
  <input
    type="description"
    id="UserDescription"
    placeholder="Description"
    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
  />

  <span
    className="absolute start-3 top-3 -translate-y-1/2 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
  >
    Description
  </span>
</label>

<label
 
  className="relative block overflow-hidden rounded-md border border-gray-200 mt-5 px-3 pt-3 shadow-sm focus-within:border-indigo-500  focus-within:ring-1 focus-within:ring-indigo-500 "
>
  <input
    type="streamkeys"
    id="UserKeys"
    placeholder="streamkeys"
    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
  />

  <span
    className="absolute start-3 top-3 -translate-y-1/2 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
  >
    Stream Keys
  </span>
</label>

<label
 
  className="relative block overflow-hidden rounded-md border border-gray-200 mt-5 px-3 pt-3 shadow-sm focus-within:border-indigo-500  focus-within:ring-1 focus-within:ring-indigo-500 "
>
  <input
    type="selecvtplatform"
    id="Platform"
    placeholder="Platform"
    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
  />

  <span
    className="absolute start-3 top-3 -translate-y-1/2 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
  >
    Select Platform
  </span>
</label>
              </div>
              <div className="flex flex-row justify-center items-center">
              <button className="relative block group items-center ">
          <span className="absolute inset-0  bg-indigo-500  rounded-lg"></span>
          <div className="transition bg-black relative border-2 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="p-2 ">
              <p className="text-xl font-outerSans font-medium">Submit</p>
            </div>
          </div>
        </button>
        </div>
            </div>
  </div>
    
  </div>
  {/* Live Preview section */}
  <div className="">
  <div className="p-1 shadow-xl  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
            <div className=" bg-black sm:p-10 p-6 rounded-xl">
              <div className="">
                <h5 className="p-36 text-xl text-center font-bold text-gray-200">Live Preview</h5>
      
                
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center">   
          <button className="mt-10 relative block group  ">
          <span className="absolute inset-0  bg-indigo-500  rounded-lg"></span>
          <div className="transition bg-black relative border-2 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="p-2 px-8 ">
              <p className="text-xl font-outerSans font-medium">Go Live 🎥</p>
            </div>
          </div>
        </button>
        </div> 

          </div>
          
          
</div>

      </div>
      
      {/* <Footer /> */}
    </>
    
  )
}

export default settings