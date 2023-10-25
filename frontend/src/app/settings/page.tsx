'use client'

import React, { useState, useEffect } from 'react';
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
  streamName?: string;
  setStreamKey: (streamKey: string) => void;
}


const Settings: React.FC<SettingsProps> = (props) => {
  
  const [streamTargets, setStreamTargets] = useState<StreamPlatform[]>([]); // Define and initialize streamTargets
  
  const [streamName, setStreamName] = useState<string>("");

  const [streamKey, setStreamKey] = useState<string>("");


  

  const handleGoLive = () => {
    console.log("Going Live");
  };

  const handleSubmitStreamName = (name: string) => {
    setStreamName(name); // Update streamName when submitted
  };

  useEffect(() => {
    console.log(streamName);
  }, [streamName]);

  console.log(setStreamKey);


  return (
    <main className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-300 to-purple-400">

      <NavBar />

      <LivepeerConfig client={LivepeerClient}>

        <div className="ml-56 mt-20">
          <StreamSessionInput onSubmit={handleSubmitStreamName} /> {/* Pass the submit handler */}
          <h2>{streamName} Session </h2>
        </div>



        <div className='w-1/2'>
          {streamName && <Streamform streamTargets={streamTargets} setStreamTargets={setStreamTargets} />}
        </div>

        
          <div className="ml-80 mt-20 ">
         
            <div
            className = "px-3 py-1 w-36 border-2  flex items-center  sm:text-lg font-bold rounded-2xl glass transition-colors duration-500 text-white"
            >
            <CreateStream streamTargets={streamTargets} streamName={streamName} setStreamKey={setStreamKey} />
            </div>
           

      </div>
     

      <div className='mt-20 w-full'>
        <LivePreview />
      </div>

    </LivepeerConfig><Footer />

    </main>
   
  );
};

export default Settings;
