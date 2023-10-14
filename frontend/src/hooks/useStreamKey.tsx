'use client'

import { useState, useEffect, useMemo } from 'react';

const useStreamKey = () => {
    const [streamKey, setStreamKey] = useState<string | undefined>();

 
   useEffect(() => {
     const streamKey = process.env.STREAM_KEY;
     setStreamKey(streamKey);
   }, []);
 
   return useMemo(() => streamKey, [streamKey]);
 };

export default useStreamKey;