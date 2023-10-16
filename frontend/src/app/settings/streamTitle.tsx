import React, { useState, ChangeEvent } from 'react';
import Axios from 'axios';
import Streamform from './streamForm';

type StreamPlatform = {
    streamApp: string;
    streamUrl: string;
    streamKey: string;
    channelID: string;
  };

type StreamTitleProps = {
    streamTargets: StreamPlatform[];
  };


  const streamTitle: React.FC<StreamTitleProps> = ({ streamTargets }) => {

  const STREAM_CREATION_ENDPOINT = 'https://multi-backend-mmlx.onrender.com/core/stream';
  const [streamError, setStreamError] = useState<string | null>(null);

    const createMultistream = async () => {
  

        try {
            const data = {
                "stream_name": "BNB",
                "type": "public",
                "record": false,
                "multistream": {
                    targets: streamTargets.map((target) => ({
                        name: target.streamApp,
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
        <button onClick={createMultistream}>Create Multistream</button>
        {streamError && <p>{streamError}</p>}
      </div>
    );
}

export default streamTitle;
