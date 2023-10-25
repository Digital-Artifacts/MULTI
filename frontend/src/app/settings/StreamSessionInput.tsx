import React, { useState } from "react";
import {Input} from "@nextui-org/react";
import { motion } from "framer-motion"



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

    <><div className =" h-full w-1/4 bg-[url(https://ibb.co/TcBZN6C)] 
    bg-no-repeat  rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border border-gray-100">
      
      <div className="flex flex-col place-content-center py-3 px-3 pb-10">
      <div className="modal">
        <div className="mt-3 text-center font-bold modal-content">
          <h2>Enter Stream Session Name</h2>
          
            
        </div>
        <label  className="mt-4 relative block rounded-md border border-gray-200 shadow-sm focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600"
>
  <input
    type="text"
    id="Stream Session Name"
    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
    placeholder="Stream Session Name"
    value={streamName}
    onChange={handleInputChange}
  />

  
</label>
        <div className="flex justify-center mt-4  ">
        <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >  
        <button  className="px-3 py-1  border-2  flex items-center  sm:text-lg font-bold rounded-2xl glass transition-colors duration-500 text-white " onClick={handleSubmit}>Submit</button>
        </motion.div>
        </div>


      </div>
      </div>
    </div></>
    
  );
};

export default StreamSessionInput;


