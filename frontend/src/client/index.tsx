'use client';

import {
    createReactClient,
    studioProvider,
  } from '@livepeer/react';
  
  const apiKey = process.env.API_KEY!; // Non-null assertion operator
  
  const LivepeerClient = createReactClient({
    provider: studioProvider({ apiKey }),
  });
  
  export default LivepeerClient;