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
    <div>
      {!previewStarted ? (
        <button onClick={startPreview}>Start Preview</button>
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
  );
};

export default LivePreview;
