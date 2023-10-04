'use client';

import {
    createReactClient,
    studioProvider,
  } from '@livepeer/react';
  
  const apiKey = process.env.STREAM_KEY!; // Non-null assertion operator
  
  const LivepeerClient = createReactClient({
    provider: studioProvider({ apiKey }),
  });
  
export default LivepeerClient;