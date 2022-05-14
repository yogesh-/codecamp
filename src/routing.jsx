import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";

export const Routing = () => {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
