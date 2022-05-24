import React, { useState, createContext } from "react";

const videoContext = createContext();

const VideoContextProvider = ({ children }) => {
  const [videoList, setVideoList] = useState([]);

  return (
    <div>
      <videoContext.Provider value={{ videoList, setVideoList }}>
        {children}
      </videoContext.Provider>
    </div>
  );
};

export { VideoContextProvider, videoContext };
