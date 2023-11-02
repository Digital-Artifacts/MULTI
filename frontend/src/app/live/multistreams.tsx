'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';



const Multistreams= () => {

  const [youtubeID, setYoutubeID] = useState('');
  const [twitchID, setTwitchID] = useState('');

  const [youtubeSrc, setYoutubeSrc] = useState('');
  const [twitchSrc, setTwitchSrc] = useState('');

  const handleYoutube = (e: ChangeEvent<HTMLInputElement>) => {
    setYoutubeID(e.target.value);
  };

  const handleTwitch = (e: ChangeEvent<HTMLInputElement>) => {
    setTwitchID(e.target.value);
  };

  const youtubeSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Construct the iframe URL with the entered channelID
    const newYoutubeSrc = `https://www.youtube.com/embed/live_stream?channel=${youtubeID}`;
    setYoutubeSrc(newYoutubeSrc);
  };


  const twitchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Construct the iframe URL with the entered channelID
    const newTwitchSrc = `https://player.twitch.tv/?channel=${twitchID}&parent=https://multi-blue.vercel.app/`;
    setTwitchSrc(newTwitchSrc);
  };



  
  return (
    <div>
      
      <div>   
      <form onSubmit={youtubeSubmit}>
        <label>Embed Youtube:
          <input type="text" placeholder="Enter Channel ID" value={youtubeID} onChange={handleYoutube} />
        </label>
        <button type="submit">Submit</button>
      </form>
      </div>
      
      <div className="rounded-md border border-gray-100 w-2/3">
      <iframe 
        width="560" 
        height="315" 
        src={youtubeSrc}
        //frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        >
        </iframe>
       
      </div>
      
      
      <div>   
      <form onSubmit={twitchSubmit}>
        <label>Embed Twitch:
          <input type="text" placeholder="Enter Channel ID" value={twitchID} onChange={handleTwitch} />
        </label>
        <button type="submit">Submit</button>
      </form>
      </div>
      
      <div className="rounded-md border border-gray-100 w-2/3">
      <iframe 
        width="560" 
        height="315" 
        src={twitchSrc}
        //frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        >
        </iframe>
       
      </div>
      
    </div>

      
  );
};



export default Multistreams;
