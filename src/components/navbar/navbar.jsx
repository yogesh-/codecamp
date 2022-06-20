import Button from "@mui/material/Button";
import "./navbar.css";
// import { MaterialUISwitch } from "../darkmode/darkmode";
import { Link } from "react-router-dom";

const Navbar = () => {
  let tokenDb = localStorage.getItem("token");

  return (
    <>
      <div className="navbar">
        <div className="logo">&#60; CodeTube &frasl; &#62;</div>
        {tokenDb ? (
          <Button
            component={Link}
            to="/logout"
            variant="contained"
            color="success"
            sx={{ mr: 2, mt: 1, mb: 1 }}
          >
            LOGOUT
          </Button>
        ) : (
          <Button
            component={Link}
            to="/login"
            variant="contained"
            color="success"
            sx={{ mr: 2, mt: 1, mb: 1 }}
          >
            LOGIN
          </Button>
        )}
        {/* Add this later */}
        {/* <div className="theme-toggle">
          <MaterialUISwitch />
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
