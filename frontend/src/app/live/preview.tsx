'use client'

import React, { useState } from 'react';
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';
import { Broadcast } from '@livepeer/react';
import Multistreams from './multistreams';




interface LivePreviewProps {
    onGoLive: () => void;
  }
  
const LivePreview: React.FC<LivePreviewProps> = ({ onGoLive }) => {
    const [previewMode, setPreviewMode] = useState(true);
  
    const handleGoLiveClick = () => {
      setPreviewMode(false);
      onGoLive();
    };
  
    return (
      <>
        
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-18">
          <div className="mt-10 ml-10 max-w-3xl max-h-2xl">
            <div className="p-1 shadow-xl  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
              <div className=" bg-black sm:p-10 p-6 rounded-xl">
                {previewMode ? (
                  <Broadcast
                    title="You, Live (Preview)"
                    streamKey=""
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
                ) : (
                  <Broadcast
                    title="You are Live"
                    streamKey= 'process.env.STREAM_KEY'
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
                {previewMode && (
                  <button onClick={handleGoLiveClick} className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                    Go Live
                  </button>
                )}
              </div>
            </div>
          </div>
          <Multistreams />
        </div>
      </>
    );
  };

export default LivePreview;