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

      <div className="grid grid-cols-1 gap-64 lg:grid-cols-2 lg:gap-8">
  <div className="mt-20"> <Streamform /></div>
  <div className="mt-10"><LivePreview /></div>
</div>    
      </LivepeerConfig>
      {/* <Footer /> */}
    </main>

  );
};

export default Settings;
