'use client'

import React, { useState } from 'react';
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';
import { Broadcast } from '@livepeer/react';
import StreamSessionInput from '@/app/settings/StreamSessionInput';

import NavBar from "@/components/NavBar";
import LivepeerClient from '@/client';
import LivePreview from '../settings/preview';
import Footer from '@/components/Footer';
import Streamform from './streamForm';
import StreamTitle from './streamTitle';
import { useStream } from '@/context/StreamContext';


type StreamPlatform = {
  streamApp: string;
  streamUrl: string;
  streamKey: string;
  channelID: string;
};

interface SettingsProps {
  streamName?: string;
}

const Settings: React.FC<SettingsProps> = (props) => {
  const [streamTargets, setStreamTargets] = useState<StreamPlatform[]>([]); // Define and initialize streamTargets
  const [streamName, setStreamName] = useState<string>(); 

  const handleGoLive = () => {
    console.log("Going Live");
  };

  const handleSubmitStreamName = (name: string) => {
    setStreamName(name); // Update streamName when submitted
  };

  return (
    

    
    <main>
      <NavBar /> 
      <LivepeerConfig client={LivepeerClient}>  
      
      <div className="mt-20">
      <StreamSessionInput onSubmit={handleSubmitStreamName} /> {/* Pass the submit handler */}
          <h2>Stream Session Name: {streamName}</h2> 
 
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-18">
        <div className='w-full'>
        {streamName && <Streamform streamTargets={streamTargets} setStreamTargets={setStreamTargets} />} 
        </div>
        <div>
        <StreamTitle streamTargets={streamTargets} />
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
