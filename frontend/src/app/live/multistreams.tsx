import React from 'react'

const Multistreams = () => {
  return (
    <div className=" mt-24 mr-10 grid grid-cols-2 gap-12 ">
  <div className="p-1 shadow-xl h-3/4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
  <div className=" mb-1 bg-black h-1/2  p-32 rounded-xl">STREAM 1</div>
  </div>
  <div className="p-1 shadow-xl h-3/4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
  <div className="  bg-black h-1/2 text-center p-32 rounded-xl">STREAM 2</div>
  </div>
  <div className="p-1 shadow-xl h-3/4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
  <div className=" mt-1 bg-black h-1/2 text-center  py-28 rounded-xl">STREAM 3</div>
  </div>
  <div className="p-1 shadow-xl h-3/4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
  <div className="mt-1 bg-black h-1/2  py-28 rounded-xl">STREAM 4</div>
  </div>
  
</div>
  )
}

export default Multistreams