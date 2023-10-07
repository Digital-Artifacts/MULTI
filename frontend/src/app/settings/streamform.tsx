'use client'

import React, { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import Axios from 'axios'; 
import { useRouter, usePathname, useSearchParams } from 'next/navigation'; 

type StreamPlatform = {
  streamPlatform: string;
  streamUrl: string;
  streamKey: string;
  channelID: string;
};


const STREAM_CREATION_ENDPOINT = 'https://multi-backend-mmlx.onrender.com/core/stream-target';

const Streamform = () => {
  const [streamPlatforms, setStreamPlatforms] = useState<StreamPlatform[]>([
    {
      streamPlatform: '',
      streamUrl: '',
      streamKey: '',
      channelID: '',
    },
  ]);

  const [streamDetailsTable, setStreamDetailsTable] = useState<StreamPlatform[]>([]);
  const router = useRouter();

  const handleStreamPlatformChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const newStreamPlatforms = [...streamPlatforms];
    const { name, value } = event.target;

    if (name === 'streamUrl' || name === 'streamPlatform' || name === 'streamKey' || name === 'channelID') {
      // Update the corresponding field of the platform being edited
      newStreamPlatforms[index][name] = value;
      setStreamPlatforms(newStreamPlatforms);
    }
  };

  const handleSubmit = async () => {
    // Create a new table row for each stream platform
    const newStreamDetailsTable = streamPlatforms.map((platform, index) => ({
      streamPlatform: platform.streamPlatform,
      streamUrl: platform.streamUrl,
      streamKey: platform.streamKey,
      channelID: platform.channelID,
    }));

    // Set the stream details table state
    setStreamDetailsTable((prevStreamDetails) => [...prevStreamDetails, ...newStreamDetailsTable]);

    setStreamPlatforms([{ streamPlatform: '', streamUrl: '', streamKey: '', channelID: '' }]);

    // ...
  };

  const GoLive = async () => {
    try {
      const streamData = streamPlatforms.map((platform) => ({
        name: platform.streamPlatform,
        url: `${platform.streamUrl}/${platform.streamKey}`,
        userId: 'process.env.USER_ID', // Replace with the actual user ID
      }));

      // Send a POST request to your backend API for stream creation
      const response = await Axios.post(
        STREAM_CREATION_ENDPOINT,
        streamData
      ); // Replace with your actual API endpoint

      // Assuming the backend responds with the created stream ID or other relevant data
      const { streamId } = response.data;

      // Redirect to the live page with the stream ID as a query parameter
      router.push(`/live?streamId=${streamId}`);
    } catch (error) {
      // Handle errors here
      console.error('Error creating stream:', error);
    }
  };



return (
    <>
      <div className="px-60 mt-10">

        {streamPlatforms.map((platform, index) => (
        <div key={index} className="mb-8">
        <div className="h-32 rounded-lg">
        <div className="p-1 shadow-xl text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
        <div className="bg-black sm:p-8 p-6 rounded-xl">
          <div className="p-12 max-w-1.5">
            <label className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
            <input
              type="text"
              name="streamPlatform"
              placeholder="Stream Platform"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-white"
              value={platform.streamPlatform}
              onChange={(event) => handleStreamPlatformChange(index, event)}
            />
            <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
              Stream Platform
            </span>
            </label>
  
            <label className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
            <input
              type="text"
              name="streamUrl"
              placeholder="Stream URL"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-white"
              value={platform.streamUrl}
              onChange={(event) => handleStreamPlatformChange(index, event)}
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
              value={platform.streamKey}
              onChange={(event) => handleStreamPlatformChange(index, event)}
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
              value={platform.channelID}
              onChange={(event) => handleStreamPlatformChange(index, event)}
            />
            <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
              Channel ID
            </span>
            </label>

          </div>

          

          <div className="flex flex-row justify-center items-center">
          <button
            className="relative block group items-center"
            onClick={handleSubmit}
          >
          <span className="absolute inset-0 bg-indigo-500 rounded-lg"></span>
          <div className="transition bg-black relative border-2 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div className="p-2">
            <p className="text-xl font-outerSans font-medium text-white">
              Submit
            </p>
          </div>
          </div>
          </button>
        </div>

        {streamDetailsTable.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-bold text-white">Stream Details</h2>
            <div className="overflow-x-auto">
              <table className="table-auto min-w-full mt-2">
                <thead>
                  <tr>
                    <th className="px-4 py-2 bg-gray-200">Platform</th>
                    <th className="px-4 py-2 bg-gray-200">URL</th>
                    <th className="px-4 py-2 bg-gray-200">Key</th>
                    <th className="px-4 py-2 bg-gray-200">Channel ID</th>
                  </tr>
                </thead>
                <tbody>
                  {streamDetailsTable.map((platform, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2 text-white">{platform.streamPlatform}</td>
                      <td className="border px-4 py-2 text-white">{platform.streamUrl}</td>
                      <td className="border px-4 py-2 text-white">{platform.streamKey}</td>
                      <td className="border px-4 py-2 text-white">{platform.channelID}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

          <div className="mt-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
              onClick={GoLive}
            >
            GO-LIVE
            </button>
          </div>


        </div>
        </div>
        </div>
        </div>
        ))}
  
        
      
      </div>
    </>
  );
  
};

export default Streamform;