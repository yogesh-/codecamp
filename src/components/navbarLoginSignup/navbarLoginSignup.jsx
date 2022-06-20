import "../navbar/navbar.css";
// import { MaterialUISwitch } from "../darkmode/darkmode";
import { Link } from "react-router-dom";

const NavbarLoginSignup = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <div className="logo">&#60; CodeTube &frasl; &#62;</div>
        </Link>
        {/* <div className="theme-toggle">
          <MaterialUISwitch />
        </div> */}
      </div>
    </>
  );
};

export default NavbarLoginSignup;
