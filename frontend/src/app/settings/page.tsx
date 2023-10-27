'use client'

import React, { useState, useEffect, useRef } from 'react';
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';
import LivepeerClient from '@/client';

import NavBar from "@/components/NavBar";
import Footer from '@/components/Footer';
import StreamSessionInput from '@/app/settings/StreamSessionInput';
import LivePreview from '../settings/preview';
import Streamform from './streamForm';
import CreateStream from './CreateStream';


type StreamPlatform = {
  streamTitle: string;
  streamUrl: string;
  streamKey: string;
  channelID: string;
};

interface SettingsProps {
  streamName: string;
  streamingKey: string;
}


const Settings: React.FC<SettingsProps> = (props) => {
  
  const [streamTargets, setStreamTargets] = useState<StreamPlatform[]>([]); // Define and initialize streamTargets
  
  const [streamName, setStreamName] = useState('');

  const [streamingKey, setStreamingKey] = useState('');

 

  const handleSubmitStreamName = (name: string) => {
    setStreamName(name); 

  };

  const handleStreamKey = (key: string) => {
    setStreamingKey(key);

 
  }

  console.log(streamName)
  console.log(streamingKey)

 

  return (
    
    <main className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-300 to-purple-400">

      <NavBar /> 

      <LivepeerConfig client={LivepeerClient}>  

      
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-18">
      <div className="ml-56 mt-20">
        <div className="">
          <StreamSessionInput onSubmit={handleSubmitStreamName} /> {/* Pass the submit handler */}
          <h1 className="text-2xl">{streamName} Session</h1>
        </div>

        <div className='ml-5 w-4/5'>
        {streamName && <Streamform streamTargets={streamTargets} setStreamTargets={setStreamTargets} />}
        </div>
                  
        <div className="ml-56 mt-20 ">
        <div
        className = "px-3 py-1 w-36 border-2  flex items-center  sm:text-lg font-bold rounded-2xl glass transition-colors duration-500 text-white">
          <CreateStream streamTargets={streamTargets} streamName={streamName} streamerKey={handleStreamKey} />
        </div> 
        </div>

        


      </div>
      <div className=""> 
        <div className='mt20 mt-20 '>
          <LivePreview />
        </div> 

       
        <h1>{streamingKey}</h1>
       
                
           
        </div>
          
      
      </div>

      </LivepeerConfig>  

      <div className="mt-20">
        <Footer />
      </div>

    </main>
   
  );
};

export default Settings;
