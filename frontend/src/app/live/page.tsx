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
    <main>
    
    <NavBar />

    <Multistreams />
    
    <LivepeerConfig client={LivepeerClient}>
    <div>
    <LivePage />

    </div>       
    </LivepeerConfig>
    
    <Footer />
    
    </main>
  )
}

export default Live
