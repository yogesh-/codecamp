import htmlIcon from "../../assets/html5-brands.svg";
import cssIcon from "../../assets/css3-alt-brands.svg";
import jsIcon from "../../assets/js-brands.svg";
import reactIcon from "../../assets/react-brands.svg";
import Button from "@mui/material/Button";
import "./categories.css";
import { Link } from "react-router-dom";

export const Categories = () => {
  return (
    <>
      <div className="heading">Categories</div>
      <hr></hr>
      <div className="categories-container">
        {/* HTML card */}
        <div className="card">
          <div className="img-container">
            <img src={htmlIcon} alt="html" />
          </div>

          <p>
            The HyperText Markup Language or HTML is the standard markup
            language for documents designed to be displayed in a web browser.
          </p>
          <div className="card-button">
            <Button component={Link} to="/videos" variant="contained">
              START LEARNING
            </Button>
          </div>
        </div>
        {/* CSS card */}
        <div className="card">
          <div className="img-container">
            <img src={cssIcon} alt="html" />
          </div>

          <p>
            Cascading Style Sheets is a style sheet language used for describing
            the presentation of a document written in a markup language such as
            HTML
          </p>
          <div className="card-button">
            <Button component={Link} to="/videos" variant="contained">
              START LEARNING
            </Button>
          </div>
        </div>
        {/* Js card */}
        <div className="card">
          <div className="img-container">
            <img src={jsIcon} alt="html" />
          </div>

          <p>
            JavaScript, often abbreviated JS, is a programming language that is
            one of the core technologies of the World Wide Web.
          </p>
          <div className="card-button">
            <Button component={Link} to="/videos" variant="contained">
              START LEARNING
            </Button>
          </div>
        </div>
        {/* ReactJs card */}
        <div className="card">
          <div className="img-container">
            <img src={reactIcon} alt="html" />
          </div>

          <p>
            React is a free and open-source front-end JavaScript library for
            building user interfaces based on UI components. It is most popular
            frontend framework.
          </p>
          <div className="card-button">
            <Button component={Link} to="/videos" variant="contained">
              START LEARNING
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
