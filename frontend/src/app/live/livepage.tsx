'use client'

import React, { useState } from 'react';
import { Broadcast } from '@livepeer/react';

const LivePreview = () => {

  return (
    <div>
        <Broadcast
          title="You, Live (Preview)"
          streamKey="2790-8ljg-8mmv-1tx6"
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

export default LivePreview;
