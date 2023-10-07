'use client'

import React, { useState } from 'react';
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';
import { Broadcast } from '@livepeer/react';

import NavBar from "@/components/NavBar";
import LivepeerClient from '@/client';
import LivePreview from '../settings/preview';
import Footer from '@/components/Footer';
import Streamform from './streamform';

const Settings = () => {
  const handleGoLive = () => {
    console.log("Going Live");
  };

  return (
    <main>
      <NavBar />
      <LivepeerConfig client={LivepeerClient}>  
      
      <div className="mt-20">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-18">
        <div className='w-full'>
          <Streamform />
        </div>
        <div className='w-full'>
          <LivePreview />
        </div>
      </div>
      </div>
        
      
      </LivepeerConfig>
      <Footer />
    </main>

  );
};

export default Settings;
