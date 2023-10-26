'use client'

import React from 'react'
import { useState } from 'react';
import LivepeerClient from '@/client';
import LivePage from './livepage';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Multistreams from './multistreams';
import CreateStream from '../settings/CreateStream';

import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';




const Live = () => {



  return (
    <main className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-300 to-purple-400">
    
    <NavBar />
      
<div className="mt-5 grid grid-cols-2 grid-rows-2 gap-6">

    <div className=" ml-20 row-span-2 h-full   rounded-md   border border-gray-100">
      <LivepeerConfig client={LivepeerClient}>
    <div>
    <LivePage />

    </div>       
    </LivepeerConfig>
    </div>

    <div className=" ml-20 row-span-2 " >
      
      <Multistreams /> 
      
    </div>
    {/* <div className="ml-5 w-2/3 h-2/3 row-span-2 rounded-md border border-gray-100 col-start-2">TWITCH</div> */}
</div>
    

    
   
    
    <Footer />
    
    </main>
  )
}

export default Live
