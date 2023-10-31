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
    bg-no-repeat  rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border border-gray-100">

      <div className="flex flex-col place-content-center py-3 px-3 pb-10">

        <h2>Enter Stream Session Name</h2>
        <input
          type="text"
          placeholder="Stream Session Name"
          value={streamName}
          onChange={handleInputChange}
        />
      </div>

      <button onClick={handleSubmit}>Submit</button>
     

      
    </div>
    
  );
};

export default StreamSessionInput;
