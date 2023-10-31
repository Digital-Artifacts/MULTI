import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Link from 'next/link';

export type StreamPlatform = {
    streamTitle: string;
    streamUrl: string;
    streamKey: string;
    channelID: string;
  };

export type CreateStreamProps = {
    streamTargets: StreamPlatform[];
    streamName: string;
    streamerKey: (streamingKey: string) => void;
  };


const CreateStream: React.FC<CreateStreamProps> = ({ streamTargets, streamName, streamerKey } ) => {

  const STREAM_CREATION_ENDPOINT = 'https://multi-backend-mmlx.onrender.com/core/stream';
  
  const [streamError, setStreamError] = useState<string | null>(null);
  
  const [streamingKey, setStreamingKey] = useState('');
  
  

  useEffect(() => {
    // This useEffect will run whenever streamingKey is updated
    console.log('Streaming Key has been updated:', streamingKey);
    streamerKey(streamingKey)
  }, [streamingKey]);

    const createMultistream = async () => {    
        
        try {
            
            const data = {
                "stream_name": streamName,
                "type": "public",
                "record": false,
                "multistream": {
                    targets: streamTargets.map((target) => ({
                        name: target.streamTitle,
                      })),
                }
            }
            
            const response = await Axios.post(
                STREAM_CREATION_ENDPOINT,
                data
            );

            console.log('Server Response:', response);
            if (response.status === 200 || response.status === 201) {
                const { id } = response.data;
                console.log('Stream created successfully with ID:', id);

                const {streamKey} = response.data;
                console.log('Stream created successfully with StreamKey:', streamKey);
                setStreamingKey(streamKey)
              

                setStreamError(null); // Clear any previous error message
            } else {
                console.error('Error creating stream. Server response:', response.data.status, response.data.message);
                setStreamError('An error occurred while creating the stream. Please try again later.');
            }
        
        } catch (error) {
            // Handle errors here
            console.error('Error creating stream:', error);
            
            setStreamError('An error occurred while creating the stream. Please try again later.');
        }
    }

    
    return (
      <div> 
      <div>
      
      
      <div>
      <button onClick={createMultistream}>Generate Stream Key</button>
        {streamError && <p>{streamError}</p>}
      </div>
       
      
      
      </div>
        
      
      </div>
    );
}

export default CreateStream;
