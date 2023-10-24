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
  streamKey: string;
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

  console.log(streamKey);


  return (
    <main>

      <NavBar /> 

      <LivepeerConfig client={LivepeerClient}>  
    
      <div className="mt-20">
        <StreamSessionInput onSubmit={handleSubmitStreamName} /> {/* Pass the submit handler */}
          <h2>{streamName} Session </h2> 
 
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-18">
          
          <div className='w-full'>
          {streamName && <Streamform streamTargets={streamTargets} setStreamTargets={setStreamTargets} />} 
          </div>
      
          <div>  
          <CreateStream streamTargets={streamTargets} streamName={streamName} streamKey={streamKey} setStreamKey={setStreamKey} />
          </div>
          
            
          
        </div>

      </div>

         
       {/* <div className='w-full'>
        <LivePreview />
      </div>  */}

      </LivepeerConfig>

      <Footer />

    </main>
   
  );
};

export default Settings;
