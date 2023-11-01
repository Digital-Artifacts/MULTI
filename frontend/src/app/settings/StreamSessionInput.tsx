import React, { useState } from "react";

export type ModalProps = {
  onSubmit: (streamName: string) => void; 
};


const StreamSessionInput = ({ onSubmit }: ModalProps) => {

  const [streamName, setStreamName] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    const inputValue = event.target.value;
    
    const capitalizedValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    setStreamName(capitalizedValue);

  };

  const handleSubmit = () => {
    onSubmit(streamName);
    setStreamName("")
  };


  return (
   <div className=" h-full  bg-[url(https://ibb.co/TcBZN6C)] 
    bg-no-repeat rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-120 border border-gray-100">

      <div className="flex flex-col place-content-center py-5 px-3 pb-7">

        <h2>Enter Stream Session Name</h2>
        <input
          className="mt-2"
          type="text"
          placeholder="Stream Session Name"
          value={streamName}
          onChange={handleInputChange}
        />
      </div>

      <div >
        <button className="px-3 ml-3 mb-5 bg-indigo-500 hover:bg-blue-700 text-white font-bold rounded"
        onClick={handleSubmit}>Submit</button>
      </div>
      
     

      
    </div>
    
  );
};

export default StreamSessionInput;
