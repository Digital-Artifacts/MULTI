import React, { createContext, useContext, useState } from 'react';

// Define the type for the context value
type StreamContextValue = {
  streamName: string;
  updateStreamName: (newStreamName: string) => void;
};

// Create the context
const StreamContext = createContext<StreamContextValue | undefined>(undefined);

// Create the hook for using the context
export function useStream() {
  const context = useContext(StreamContext);
  if (!context) {
    throw new Error("useStream must be used within a StreamProvider");
  }
  return context;
}

// Create the provider component
export function StreamProvider({ children }: { children: React.ReactNode }) {
  const [streamName, setStreamName] = useState<string>('');

  const updateStreamName = (newStreamName: string) => {
    setStreamName(newStreamName);
  };

  const contextValue: StreamContextValue = {
    streamName,
    updateStreamName,
  };

  return (
    <StreamContext.Provider value={contextValue}>
      {children}
    </StreamContext.Provider>
  );
}

export default StreamProvider; // Export StreamProvider as the default export
