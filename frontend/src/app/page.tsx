'use client'

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import StreamSessionInput from "@/app/settings/StreamSessionInput";
import Settings from "./settings/page";
import { useState } from "react";

import { motion } from "framer-motion"
import { fadeIn, staggerContainer, zoomIn, navVariants,  slideIn, textContainer, footerVariants   } from '../utils/motion';

export default function Home() {
 




  return (
   
    <main className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-300 to-purple-400">
    
      <NavBar />
    
      <div className="min-h-screen sm:my-20 ">
      <div className="flex  w-full flex-wrap xl:flex-nowrap container mx-auto  justify-between  py-[2rem] z-50 ">
      <div className="flex ml-12 sm:mt-10 flex-col    text-left px-2   ">
        
        <h1 className="text-[40px] sm:text-[70px] font-bold leading-none ">
          Welcome to MULTI.
        </h1>
          
        <h1 className="text-4xl font-semibold flex flex-col my-4 ">
            A Streaming Platform for Everyone.
        </h1>

        <p className="max-w-lg ">
          Multi allows you to reach a broader audience and engage with
          viewers on multiple streaming platforms simultaneously. Whether you're
          a gamer, content creator, or business professional, Multi is
          the key to expanding your online presence.{" "}
        </p>

        <div className="flex  items-center sm:justify-center mt-18 sm:m-0 lg:justify-start ">
          <>
          <button className=" flex flex-col justify-start mt-5 ml-5  text-lg font-bold rounded  text-white ">
              Powered By
          <img src="256_Wordmark_White.png"
            width="100"
            height="100"
          />
          </button>
          </>

          <Link href='/settings'>
          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >  
            <button className="px-6 py-3  border-2 mt-5 ml-10 flex items-center  sm:text-lg font-bold rounded-3xl glass transition-colors duration-500 text-white ">
              Create Your First Multistream <img src="Vector.png" className="pl-2" />
            </button>
          </motion.div>
          </Link>
        </div>
      </div>
    
      <div className=" mr-20 -mt-16 flex-end">
      <img
        src="3.png"
        alt=""
        width="700"
        height="700"
        // width="550"
        // height="550"
        className=""
      />
      </div>
      </div>
      
      <section className="mt-40 grid lg:grid-cols-2 2xl:grid-cols-4 grid-cols-1 gap-8">
      <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className=" mx-auto flex flex-col"
      >
            <article className="mx-auto max-w-sm pb-8 bg-white/25 backdrop-blur-xl  bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
                <img className="mx-auto mb-20 mt-10 w-40" src="Multiple.png" alt="" />
                <h2 className="text-center text-2xl mt-5 font-bold min-h-18 px-12">
                Broadcast to Multiple Platforms
                </h2>
                <p className="m-4 text-lg p-4 leading-relaxed text-center ">
                Expand your audience reach by streaming to multiple platforms simultaneously.
                </p>
            </article>
            </motion.div>
            

            <motion.div
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className=" mx-auto flex flex-col"
      >
            <article className="mx-auto max-w-sm pb-8 bg-white/25 backdrop-blur-xl  bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
                <img className="mx-auto mb-20 mt-10 w-40" src="Wider-Audience.png" alt="" />
                <h2 className="text-center text-3xl mt-5 font-bold min-h-18 px-12">
                Engage with a Wider Audience
                </h2>
                <p className="m-4 text-lg p-4 leading-relaxed text-center">
                Connect and interact with viewers across various streaming <br/>  platforms
                </p>
            </article>

            </motion.div>

            <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className=" mx-auto flex flex-col"
      >
            <article className="mx-auto max-w-sm pb-8 bg-white/25 backdrop-blur-xl   bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
                <img className="mx-auto mb-20 mt-10 w-40" src="Stream.png" alt="" />
                <h2 className="text-center text-3xl mt-5 font-bold min-h-18 px-12">
                Stream on Your Terms
                </h2>
                <p className="m-4 text-lg p-4 leading-relaxed text-center ">
                Customize your streaming experience and go live on your own schedule.
                </p>
            </article>

            </motion.div>

            <motion.div
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className=" mx-auto flex flex-col"
      >
            <article className="mx-auto max-w-sm pb-8 bg-white/25 backdrop-blur-xl  bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
                <img className="mx-auto mb-20 mt-10 w-40" src="ConnectAudience.png" alt="" />
                <h2 className="text-center text-3xl mt-5 font-bold min-h-18 px-12">
                Connect with Your Audience
                </h2>
                <p className="m-4 text-lg p-4 leading-relaxed text-center ">
                Build a strong connection with your viewers and foster a loyal community. add some text.
                </p>
            </article>
            </motion.div>
        </section>
      

   
      {/* <div className="flex justify-center mt-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="border w-auto glass rounded-xl flex mx-auto">
                <img
                  src={feature.imageSrc}
                  alt={feature.title}
                  width="150"
                  height="150"
                  className="rounded-2xl p-2"
                />
              </div>
              <h2 className="mt-4 text-2xl font-semibold">{feature.title}</h2>
              <p className="mt-2 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div> */}

                </div>
                <div className="relative   top-[10vh] max-w-full sm:top-0 ">
                  <div className="absolute w-full object-contain">
                    <img src="circle.png" alt="" className="relative  object-fill" />
                    
                  </div>
                </div>

      <div className="flex justify-center items-center mt-8">
     
      </div>

      
    
     

      <Footer />
    </main>
   
    
  );
}