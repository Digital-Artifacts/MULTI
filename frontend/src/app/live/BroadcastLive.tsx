import React from 'react'
import { useState, ChangeEvent } from 'react';
import { Broadcast } from '@livepeer/react';
import Settings from '../settings/page';




const   BroadcastLive = () => {
  const [streamKey, setStreamKey] = useState('');

  const handleStreamKeyChange = (event: ChangeEvent<HTMLInputElement>) => { // Explicitly type the event parameter
    setStreamKey(event.target.value);
  };

  const handleSubmit = () => {
    // You can perform any actions here when the form is submitted.
    // For now, let's just log the streamKey.
    console.log('Stream Key:', streamKey);
  };


  
  return (
    <div>

     

        <Broadcast
          title= "Multistreaming Live"
          streamKey={streamKey}
          aspectRatio="16to9"
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

      <div>
        <input
          type="text"
          placeholder="Enter Stream Key"
          value={streamKey}
          onChange={handleStreamKeyChange}
        />
        <button className="px-2 ml-2 mb-2 mt-1 bg-indigo-500 hover:bg-blue-700 text-white font-bold rounded" onClick={handleSubmit}>Stream</button>
      
      </div>
    </div>
  );
}

export default BroadcastLive