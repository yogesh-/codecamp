import Navbar from "../../components/navbar/navbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./logout.css";
import { useEffect } from "react";

export const LogOut = () => {
  useEffect(() => {
    localStorage.removeItem("token");
  });
  return (
    <>
      <Navbar />
      <div className="content">
        <h3>You have logged out of CodeTube</h3>
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="success"
          sx={{ mt: 1, mb: 1 }}
        >
          GO TO HOME
        </Button>
      </div>
    </>
  );
};
