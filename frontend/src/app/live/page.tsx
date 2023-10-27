'use client'

import React from 'react'
import { useState, useEffect, useRef } from 'react';
import LivepeerClient from '@/client';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Multistreams from './multistreams';
import BroadcastLive from './BroadcastLive';
import Settings from '../settings/page';
import CreateStream from '../settings/CreateStream';

import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';

type StreamPlatform = {
  streamTitle: string;
  streamUrl: string;
  streamKey: string;
  channelID: string;
};


interface LivePageProps {
  streamName: string;
  streamingKey: string;
}



const LivePage: React.FC<LivePageProps> = (props) => {

  const [streamTargets, setStreamTargets] = useState<StreamPlatform[]>([]); // Define and initialize streamTargets

  const [streamName, setStreamName] = useState('');

  const [streamingKey, setStreamingKey] = useState('');

  const handleStreamName = (name: string) => {
    setStreamName(name); 

  };

  const handleStreamKey = (key: string) => {
    (streamingKey)
  }

  // const renderSettings = false; 

  // useEffect(() => {
  //   // Update streamName and streamingKey when they change
  //   setStreamName(props.streamName);
  //   setStreamingKey(props.streamingKey);
  // }, [props.streamName, props.streamingKey]);

  useEffect(() => {
    // This useEffect will run whenever streamingKey is updated
    console.log('Streaming Key has been updated:', streamingKey);
    // streamerKey(streamingKey)
  }, [streamingKey]);

  console.log(streamName)
  console.log(streamingKey)

  return (
  
    <main className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-300 to-purple-400">
    
    <NavBar />

    <div className="mt-5 grid grid-cols-2 grid-rows-2 gap-6">

    <div className=" ml-20 row-span-2 h-full   rounded-md   border border-gray-100">
    <LivepeerConfig client={LivepeerClient}>

   


    <div>
    <BroadcastLive />
   
    </div>   




    </LivepeerConfig>
    </div>
    <div className=" mr-20 row-span-2 " >
    <Multistreams /> 
    </div>
    </div>


    
    
    <Footer />
    
    </main>

  )
}

export default LivePage
