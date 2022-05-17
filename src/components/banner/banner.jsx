import "./banner.css";
import Button from "@mui/material/Button";
import learning from "../../assets/coding.svg";

export const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="left-text">
          <div className="text-group">
            <p>Learn coding from best resources available on the internet.</p>
            <p className="left-text-p2">
              Start from the basics and master HTML, CSS, JavaScript and
              ReactJS.
            </p>
            <Button variant="contained" color="success" sx={{ mt: 1, mb: 1 }}>
              EXPLORE NOW &#62;
            </Button>
          </div>
        </div>
        <div className="right-image">
          <img src={learning} alt="learning student" />
        </div>
      </div>
    </>
  );
};
