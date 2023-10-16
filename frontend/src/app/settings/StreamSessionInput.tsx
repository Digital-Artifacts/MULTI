import React, { useState } from "react";

type ModalProps = {
  onClose?: () => void;
  onSubmit: (streamName: string) => void;
};

const StreamSessionInput = ({ onClose, onSubmit }: ModalProps) => {
  const [streamName, setStreamName] = useState("");
  const [submittedStreamName, setSubmittedStreamName] = useState(""); // Add this state to store the submitted stream name

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStreamName(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(streamName);
    setSubmittedStreamName(streamName); // Store the submitted stream name
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
        {submittedStreamName && ( // Display the submitted stream name if it's not empty
          <h2>Submitted Stream Name: {submittedStreamName}</h2>
        )}
      </div>

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default StreamSessionInput;
