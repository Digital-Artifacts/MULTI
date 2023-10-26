'use client'

import React, { useState, ChangeEvent } from 'react';
import { motion } from "framer-motion"
import Axios from 'axios';  


type StreamPlatform = {
  streamTitle: string;
  streamUrl: string;
  streamKey: string;
  channelID: string;
};

type StreamformProps = {
  streamTargets: StreamPlatform[];
  setStreamTargets: React.Dispatch<React.SetStateAction<StreamPlatform[]>>;
};

const STREAM_CREATION_ENDPOINT = 'https://multi-backend-mmlx.onrender.com/core/stream-target';

const userID = process.env.USER_ID;
// console.log(userID)

const Streamform: React.FC<StreamformProps> = ({ streamTargets, setStreamTargets }) => {
  const [streamPlatform, setStreamPlatform] = useState<StreamPlatform>({
    streamTitle: '',
    streamUrl: '',
    streamKey: '',
    channelID: '',
  });

  const [streamCreationError, setStreamCreationError] = useState<string | null>(null);

  const handleStreamPlatformChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setStreamPlatform({ ...streamPlatform, [name]: value });
  };

  const CreateStreamTarget = async () => {
    try {
      const streamData = {
        url: `${streamPlatform.streamUrl}/${streamPlatform.streamKey}`,
        name: streamPlatform.streamTitle,
        userId: userID, // Replace with the actual user ID
      };

      // Send a POST request to your backend API for stream creation
      const response = await Axios.post(
        STREAM_CREATION_ENDPOINT,
        streamData
      );
      console.log('Server Response:', response);

      if (response.status === 200 || response.status === 201) {
        const { id } = response.data;
        console.log('Stream created successfully with ID:', id);
        setStreamCreationError(null); // Clear any previous error message
        setStreamTargets([...streamTargets, streamPlatform])
      } else {
        console.error('Error creating stream. Server response:', response.data.status, response.data.message);
        setStreamCreationError('An error occurred while creating the stream. Please try again later.');
      }

    } catch (error) {
      // Handle errors here
      console.error('Error creating stream:', error);
    }
  };

  return (
    <>
    
<div className="grid grid-cols-1 grid-rows-1 gap-4 ">
      <div className="ml-12 px-3 mt-20  ">
      <div key="0" className="mb-8">
      <div className="h-32 rounded-lg">
      
      <div className=" bg-[url(https://imgur.com/kVx9fUa)] 
        bg-no-repeat rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-50 border border-gray-100 ">
        <div className="mt-10 p-12 max-w-1.5">
          
          <label className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
          <input
            type="text"
            name="streamTitle"
            placeholder="Stream Title"
            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-white"
            value={streamPlatform.streamTitle}
            onChange={(event) => handleStreamPlatformChange(event)}
          />
          <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
            Stream Title
          </span>
          </label>

          <label className="mt-4 relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
          <input
            type="text"
            name="streamUrl"
            placeholder="Stream URL"
            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-white"
            value={streamPlatform.streamUrl}
            onChange={(event) => handleStreamPlatformChange(event)}
          />
          <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
            Stream URL
          </span>
          </label>

          <label className="mt-4 relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
            <input
              type="text"
              name="streamKey"
              placeholder="Stream Key"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-white"
              value={streamPlatform.streamKey}
              onChange={(event) => handleStreamPlatformChange(event)}
            />
            <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
              Stream Key
            </span>
            </label>

            <label className="mt-4 relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
              <input
                type="text"
                name="channelID"
                placeholder="Channel ID"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-white"
                value={streamPlatform.channelID}
                onChange={(event) => handleStreamPlatformChange(event)}
              />
              <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                Channel ID
              </span>
            </label>
            
          </div>
          <div className="flex flex-row mb-10  justify-center items-center">
          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >  
            <button className="px-3 py-1  border-2  flex items-center  sm:text-lg font-bold rounded-2xl glass transition-colors duration-500 text-white " onClick={CreateStreamTarget}> 
                Submit
            </button>
            </motion.div>
          </div>

          {streamCreationError && (
          <div className="mt-4 text-red-500">{streamCreationError}</div>
          )}
          
         
          </div>
          </div>
          </div>
          </div>
          
           <div className="row-start-2">
          <div className="mt-96">
          <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Stream Title</th>
              <th className="px-4 py-2">Stream URL</th>
              <th className="px-4 py-2">Stream Key</th>
              <th className="px-4 py-2">Channel ID</th>
            </tr>
          </thead>
          <tbody>
            {streamTargets.map((target, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{target.streamTitle}</td>
              <td className="border px-4 py-2">{target.streamUrl}</td>
              <td className="border px-4 py-2">{target.streamKey}</td>
              <td className="border px-4 py-2">{target.channelID}</td>
            </tr>
            ))}
          </tbody> 
          </table>
          </div>
          </div> 
          </div>


          
    </>
  );
};

export default Streamform;