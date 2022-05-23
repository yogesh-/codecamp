import Button from "@mui/material/Button";
import "./navbar.css";
import { MaterialUISwitch } from "../darkmode/darkmode";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">&#60; CodeTube &frasl; &#62;</div>
        <Button
          component={Link}
          to="/login"
          variant="contained"
          color="success"
          sx={{ mt: 1, mb: 1 }}
        >
          LOGIN
        </Button>
        <div className="theme-toggle">
          <MaterialUISwitch />
        </div>
      </div>
    </>
  );
};

export default Navbar;
