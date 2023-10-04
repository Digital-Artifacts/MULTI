'use client'

import React from 'react'
import { useState } from 'react';
import LivepeerClient from '@/client';
import LivePage from './livepage';
import NavBar from '@/components/NavBar';
import Multistreams from './multistreams';
import LivePreview from '../settings/preview';

import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';

const Live = () => {
  const [isLive, setIsLive] = useState(false);

  const handleGoLiveClick = () => {
    setIsLive(true);
  };


  return (
    <main>
    <NavBar />
      <LivepeerConfig client={LivepeerClient}>
      <div>
        <LivePage />
    </div>

        <div>
          <Multistreams />
        </div>
        
      </LivepeerConfig>
    <NavBar />
    </main>
  )
}

export default Live
