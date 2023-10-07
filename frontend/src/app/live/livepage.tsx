'use client'

import React, { useEffect, useState } from 'react';
import { Broadcast } from '@livepeer/react';
import LivePreview from '../settings/preview';


const LivePage = () => {
  const [goLiveClicked, setGoLiveClicked] = useState(false);
  
  useEffect(() => {
    if (goLiveClicked) {

    }
  }, [goLiveClicked])

  return (
    <div>
      {/* The actual live stream screen */}
      <Broadcast
                    title="You are Live"
                    streamKey=''
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
    </div>
  );
};

export default LivePage;