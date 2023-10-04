'use client'

import React, { useState, useEffect, useMemo } from 'react';
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';
import { Broadcast } from '@livepeer/react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'; 
import Live from '../live/page';

import useStreamKey from '@/hooks/useStreamKey';



interface LivePreviewProps {
    onGoLive: () => void;
  }
  
// const LivePreview: React.FC<LivePreviewProps> = ({ onGoLive }) => {

 

//     const [previewMode, setPreviewMode] = useState(true);
  
//     const handleGoLiveClick = () => {
//       setPreviewMode(false);
//       onGoLive();
//     };

const LivePreview: React.FC<LivePreviewProps> = ({ onGoLive }) => {
  
  const [previewMode, setPreviewMode] = useState(true);
  const router = useRouter();
  const [goLiveClicked, setGoLiveClicked] = useState(false); 
 
  // const streamKey = useStreamKey();
    
  const handleGoLiveClick = () => {
    setPreviewMode(false);
    setGoLiveClicked(true);
    // Redirect to the live screen when Go Live is clicked
   
  };

  useEffect(() => {
    // Use useEffect to control the rendering of LivePage
    if (goLiveClicked) {
      router.push('/live'); // Redirect to the LivePage route when Go Live is clicked
    }
  }, [goLiveClicked, router]);
  
  return (
    <>
      {previewMode ? (
        // Display the preview screen
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-18">
          <div className="mt-10 ml-10 max-w-3xl max-h-2xl">
          <div className="p-1 shadow-xl  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
        <div className=" bg-black sm:p-10 p-6 rounded-xl"></div>
          <Broadcast
              title="You, Live (Preview)"
              streamKey='0544-ghxt-e2n6-f4y3'
              aspectRatio="1to1"
              objectFit="cover"
              showPipButton={true}
              onPlaybackStatusUpdate={(muted) => console.log(muted)}
              theme={{
                borderStyles: {
                containerBorderStyle: 'solid',
                },
                colors: {
                accent: '#00a55f',
                },
                space: {
                controlsBottomMarginX: '10px',
                controlsBottomMarginY: '5px',
                controlsTopMarginX: '15px',
                controlsTopMarginY: '10px',
                },
                radii: {
                containerBorderRadius: '0px',
                },
              }}
              displayMediaOptions={{
                video: {
                width: {
                ideal: 1280,
                },
                },
              }}
            /> 
            {previewMode && (
              <button onClick={handleGoLiveClick} className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                Go Live
              </button>
            )}
          </div>
        </div>
        </div>
        
      ) : goLiveClicked ? (
        // Render the LivePage only when Go Live is clicked
        <Live />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
  
};

export default LivePreview;