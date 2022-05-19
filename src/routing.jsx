import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { VideoListing } from "./pages/videolisting/videolisting";

export const Routing = () => {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<VideoListing />} />
        </Route>
      </Routes>
    </div>
  );
};
