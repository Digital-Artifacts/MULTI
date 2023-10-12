'use client'

import React, { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import Axios from 'axios'; 
import { useRouter, usePathname, useSearchParams } from 'next/navigation'; 
import Multistreams from '../live/multistreams';

type StreamPlatform = {
  streamApp: string;
  streamUrl: string;
  streamKey: string;
  channelID: string;
};

const STREAM_CREATION_ENDPOINT = 'https://multi-backend-mmlx.onrender.com/core/stream-target';

const USER_ID = process.env.USER_ID;

const Streamform = () => {
  const [streamPlatform, setStreamPlatform] = useState<StreamPlatform>({
    streamApp: '',
    streamUrl: '',
    streamKey: '',
    channelID: '',
  });

  const [streamCreationError, setStreamCreationError] = useState<string | null>(null);

  const handleStreamPlatformChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setStreamPlatform({ ...streamPlatform, [name]: value });
  };

  const CreateStream = async () => {
    try {
      const streamData = {
        url: `${streamPlatform.streamUrl}/${streamPlatform.streamKey}`,
        name: streamPlatform.streamApp,
        userId: '577da0e0-7339-44b4-b0c4-788b7c10409a', // Replace with the actual user ID
      };

      // Send a POST request to your backend API for stream creation
      const response = await Axios.post(
        STREAM_CREATION_ENDPOINT,
        streamData
      );
      console.log('Server Response:', response);

      if (response.status === 200 || response.status === 201) {
        const { streamId } = response.data.id;
        console.log('Stream created successfully with ID:', streamId);
        setStreamCreationError(null); // Clear any previous error message
      } else {
        console.error('Error creating stream. Server response:', response.data.status, response.data.message);
        setStreamCreationError('An error occurred while creating the stream. Please try again later.');
      }

      // Assuming the backend responds with the created stream ID or other relevant data
      // const { streamId } = response.data;

      // console.log('Stream created successfully with ID:', streamId);
      // setStreamCreationError(null); // Clear any previous error message
    } catch (error) {
      // Handle errors here
      console.error('Error creating stream:', error);

      // setStreamCreationError('An error occurred while creating the stream. Please try again later.');
    }
  };

  return (
    <>
      <div className="px-60 mt-10">
        <div key="0" className="mb-8">
          <div className="h-32 rounded-lg">
            <div className="p-1 shadow-xl text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
              <div className="bg-black sm:p-8 p-6 rounded-xl">
                <div className="p-12 max-w-1.5">
                  <label className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                    <input
                      type="text"
                      name="streamApp"
                      placeholder="Stream App"
                      className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-white"
                      value={streamPlatform.streamApp}
                      onChange={(event) => handleStreamPlatformChange(event)}
                    />
                    <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                      Stream App
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
                  <button className="relative block group items-center" onClick={CreateStream}>
                    <span className="absolute inset-0 bg-indigo-500 rounded-lg"></span>
                    <div className="transition bg-black relative border-2 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
                      <div className="p-2">
                        <p className="text-xl font-outerSans font-medium text-white">Create Stream</p>
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
    </>
  );
};

export default Streamform;
