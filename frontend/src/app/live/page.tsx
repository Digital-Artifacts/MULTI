'use client'

import React, { useState } from 'react';
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';
import { Broadcast } from '@livepeer/react';

import NavBar from "@/components/NavBar";
import Multistreams from './multistreams';
import LivepeerClient from '@/client';
import LivePreview from './preview';
import Footer from '@/components/Footer';

// const client = createReactClient({
//   provider: studioProvider({ apiKey: '36d8-xo3m-k4rk-0ieh' }),
// });

const Live = () => {
  const handleGoLive = () => {
    console.log("Going Live");
  };

  return (
    <main>
      <NavBar />
      <LivepeerConfig client={LivepeerClient}>
        <div>
          <LivePreview onGoLive={handleGoLive} />
          <Multistreams />
        </div>
        
        {/* <Footer /> */}
      </LivepeerConfig>
      <Footer />
    </main>

  );
};

export default Live;
