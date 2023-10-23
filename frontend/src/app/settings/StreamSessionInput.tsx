import React, { useState } from "react";

type ModalProps = {
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
    <div className="modal">
      <div className="modal-content">
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
