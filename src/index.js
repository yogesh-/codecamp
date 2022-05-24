import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { makeServer } from "./server";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { VideoContextProvider } from "./context/videoContext.jsx";

// Call make Server
makeServer();

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideoContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </VideoContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
