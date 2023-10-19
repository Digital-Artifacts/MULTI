// import React, { useState } from 'react';
// import Streamform from './streamForm';
// import StreamTitle from './streamTitle';
// import StreamSessionInput from './StreamSessionInput';

// type StreamPlatform = {
//   streamApp: string;
//   streamUrl: string;
//   streamKey: string;
//   channelID: string;
// };

// type ModalProps = {
//   onSubmit: (streamName: string) => void;
//   streamName: string; // Add the streamName prop to the ModalProps type
// };

// const StreamAppManager = () => {
//   const [streamTargets, setStreamTargets] = useState<StreamPlatform[]>([]);
//   const [streamName, setStreamName] = useState("");
//   console.log(streamName)

//   const handleSubmit = (newStreamName: string) => {
//     setStreamName(newStreamName); // Update the streamName prop
//   };
  

//   return (
//     <div>
//       <Streamform streamTargets={streamTargets} setStreamTargets={setStreamTargets} />
//       <StreamTitle streamTargets={streamTargets} streamName={streamName}  />
//       {/* Pass the streamName and onSubmit function as props to StreamSessionInput */}
//       <StreamSessionInput onSubmit={handleSubmit} />
//     </div>
//   );
// };

// export default StreamAppManager;
