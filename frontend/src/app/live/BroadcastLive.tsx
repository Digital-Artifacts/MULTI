import React from 'react'
import { Broadcast } from '@livepeer/react';

type BroadcastProps = {
  streamKey: string;
  streamName: string;
}


const BroadcastLive: React.FC<BroadcastProps> = ({ streamKey, streamName  }) => {
  console.log(streamKey)
  
  return (
    <div>
        <Broadcast
          title={streamName}
          streamKey= {streamKey}
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
}

export default BroadcastLive