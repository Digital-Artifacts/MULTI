'use client'

import React, { useState } from 'react';
import { Broadcast } from '@livepeer/react';

const LivePreview = () => {
  const [previewStarted, setPreviewStarted] = useState(false);

  const startPreview = () => {
    // Start the preview by setting the state to true
    setPreviewStarted(true);
  };

  return (
    <div className="p-1 mr-10 shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
        <div className="flex justify-center items-center bg-black sm:p-64 py-28 rounded-xl min-w-4 min-h-20 ">
      {!previewStarted ? (
        
        <button onClick={startPreview} className="relative block group items-center" >
        <span className="absolute inset-0 bg-indigo-500 rounded-lg"></span>
        <div className="transition bg-black relative border-2 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div className="p-2  ">
            <p className="text-xl font-outerSans font-medium text-white">Start Preview</p>
          </div>
        </div>
      </button>
       
        
        
      ) : (
        <Broadcast
          title="You, Live (Preview)"
          streamKey="0544-ghxt-e2n6-f4y3"
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
      )}
    </div>
    </div>
      
  );
};

export default LivePreview;
