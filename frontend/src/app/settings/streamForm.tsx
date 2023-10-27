'use client'

import React, { useState, ChangeEvent } from 'react';
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

  const clearForm = () => {
    setStreamPlatform({
      streamTitle: '',
      streamUrl: '',
      streamKey: '',
      channelID: '',
    });
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
      <div className="ml-12 px-3 mt-11">
      <div key="0" className="mb-8">
      <div className="h-22 rounded-lg">     
      <div className=" bg-[url(https://imgur.com/kVx9fUa)]  bg-no-repeat rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-50 border border-gray-100 ">
        <div className="p-12 max-w-1.5">
          
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

          <label className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
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

          <label className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
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

            <label className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
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
          <div className="flex flex-row justify-center items-center">
            <button className="relative block group items-center" onClick={CreateStreamTarget}>
              <span className="absolute inset-0 bg-indigo-500 rounded-lg"></span>
              <div className="transition bg-black relative border-2 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="p-2">
                <p className="text-xl font-outerSans font-medium text-white">Submit</p>
              </div>
              </div>
            </button>

            <button className="relative block group items-center" onClick={clearForm}>
                <span className="absolute inset-0 bg-red-500 rounded-lg"></span>
                <div className="transition bg-black relative border-2 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="p-2">
                    <p className="text-xl font-outerSans font-medium text-white">Clear</p>
                  </div>
                </div>
            </button>
          </div>

          {streamCreationError && (
          <div className="mt-4 text-red-500">{streamCreationError}</div>
          )}


          
          </div>
          
         
          </div>
          
          </div>
          
          </div>
          
          </div>

          <div className="mb4 mt-28 ml-30">
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

          
    </>
  );
};

export default Streamform;