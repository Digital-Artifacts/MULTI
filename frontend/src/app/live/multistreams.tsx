// import React from 'react'

// const Multistreams = () => {
//   return (
//     <div className=" mt-24 mr-10 grid grid-cols-2 gap-12 ">
//   <div className="p-1 shadow-xl h-3/4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
//   <div className=" mb-1 bg-black h-1/2  p-32 rounded-xl">STREAM 1</div>
//   </div>
//   <div className="p-1 shadow-xl h-3/4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
//   <div className="  bg-black h-1/2 text-center p-32 rounded-xl">STREAM 2</div>
//   </div>
//   <div className="p-1 shadow-xl h-3/4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
//   <div className=" mt-1 bg-black h-1/2 text-center  py-28 rounded-xl">STREAM 3</div>
//   </div>
//   <div className="p-1 shadow-xl h-3/4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
//   <div className="mt-1 bg-black h-1/2  py-28 rounded-xl">STREAM 4</div>
//   </div>
  
// </div>
//   )
// }

// export default Multistreams


import React from 'react';

const Multistreams= () => {
  return (
    // <h2>Live Stream</h2>
    <div className="rounded-md border border-gray-100 w-2/3">

      <iframe
        width="623"
        height="315"
        src="https://www.youtube.com/embed/live_stream?channel=UC2kTW6bV5Nl9sonFrAaCQ3Q"
        //frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      >
      </iframe>
    </div>
  );
};



export default Multistreams;




