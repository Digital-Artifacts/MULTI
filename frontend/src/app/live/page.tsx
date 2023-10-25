'use client'

import React from 'react'
import { useState } from 'react';
import LivepeerClient from '@/client';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Multistreams from './multistreams';
import CreateStream from '../settings/CreateStream';
import BroadcastLive from './BroadcastLive';

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
  streamKey: string;
}


const LivePage: React.FC<LivePageProps> = (props) => {
  const [streamTargets, setStreamTargets] = useState<StreamPlatform[]>([]); // Define and initialize streamTargets
  
  const [streamName, setStreamName] = useState<string>("");

  const [streamKey, setStreamKey] = useState<string>("");

  const renderCreateStream = false; 

  return (
    <main>
    
    <NavBar />

    <Multistreams />
    
    <LivepeerConfig client={LivepeerClient}>
    

    {renderCreateStream && (
            <div className='w-full'>
              <CreateStream
                streamTargets={streamTargets}
                streamName={streamName}
                streamKey={streamKey}
                setStreamKey={setStreamKey}
              />
            </div>
          )}


    <div>
         {
         streamKey ? <BroadcastLive streamKey={streamKey} streamName={streamName} /> : null}
    </div>       

    </LivepeerConfig>
    
    <Footer />
    
    </main>
  )
}

export default LivePage
