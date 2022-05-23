import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { VideoListing } from "./pages/videolisting/videolisting";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/signup";
import { LogOut } from "./pages/logout/logout";
import { Likes } from "./pages/likes/likes";

export const Routing = () => {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<VideoListing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/likes" element={<Likes />} />
        </Route>
      </Routes>
    </div>
  );
};
