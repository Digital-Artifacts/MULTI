'use client'

import Footer from "@/components/Footer"
import NavBar from "../components/NavBar"

export default function Home() {
  
  return(
    <main>
    <NavBar />
    <div className="">
    <div className="flex px-10 py-8 mt-20 justify-between ">

<div><div className="border  w-auto glass rounded-xl flex">
           <img
             src="https://media4.giphy.com/media/BKv6EPd7ZCgmMg0iQK/giphy.gif?cid=ecf05e47dwh9vdr5bezeb3lbg1bqy8y3kfe61f2oopjxa2jw&rid=giphy.gif&ct=g"
             alt="music"
             width="150"
             height="150"
             className="rounded-2xl p-2"
           />
         </div>
 </div>



<div><div className="border  w-auto glass rounded-xl flex">
           <img
             src="https://media4.giphy.com/media/BKv6EPd7ZCgmMg0iQK/giphy.gif?cid=ecf05e47dwh9vdr5bezeb3lbg1bqy8y3kfe61f2oopjxa2jw&rid=giphy.gif&ct=g"
             alt="music"
             width="150"
             height="150"
             className="rounded-2xl p-2"
           />
         </div>
 </div>

</div>

<div className="flex flex-row  justify-center items-center">
<div className="relative block group  ">
          <span className="absolute inset-0 border-2 border-white border-dashed rounded-lg"></span>
          <div className="transition bg-black border-2 border-white rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="p-6 ">
              <p className="mt-4 text-lg font-medium">Create New Live</p>
              
            </div>
          </div>
        </div>

</div>
{/* Second section starts */}
<div className="flex px-10 py-28 mt-2 justify-between ">

<div><div className="border  w-auto glass rounded-xl flex">
           <img
             src="https://media4.giphy.com/media/BKv6EPd7ZCgmMg0iQK/giphy.gif?cid=ecf05e47dwh9vdr5bezeb3lbg1bqy8y3kfe61f2oopjxa2jw&rid=giphy.gif&ct=g"
             alt="music"
             width="150"
             height="150"
             className="rounded-2xl p-2"
           />
         </div>
 </div>



<div><div className="border  w-auto glass rounded-xl flex">
           <img
             src="https://media4.giphy.com/media/BKv6EPd7ZCgmMg0iQK/giphy.gif?cid=ecf05e47dwh9vdr5bezeb3lbg1bqy8y3kfe61f2oopjxa2jw&rid=giphy.gif&ct=g"
             alt="music"
             width="150"
             height="150"
             className="rounded-2xl p-2"
           />
         </div>
 </div>

</div>
    </div>
    <Footer />
   
    </main>
  )
}

