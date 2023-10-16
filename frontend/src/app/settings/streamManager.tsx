import React, { useState } from 'react';
import Streamform from './streamForm';
import StreamTitle from './streamTitle';

type StreamPlatform = {
    streamApp: string;
    streamUrl: string;
    streamKey: string;
    channelID: string;
  };


const StreamAppManager = () => {
    const [streamTargets, setStreamTargets] = useState<StreamPlatform[]>([]);

  return (
    <div>
      <Streamform streamTargets={streamTargets} setStreamTargets={setStreamTargets} />
      <StreamTitle streamTargets={streamTargets} />
    </div>
  );
};

export default StreamAppManager;
