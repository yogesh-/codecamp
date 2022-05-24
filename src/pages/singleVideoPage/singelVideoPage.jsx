import MenuIcon from "@mui/icons-material/Menu";
import { Search } from "../../components/searchBox/searchbox";
import Button from "@mui/material/Button";
import { Sidebar } from "../../components/sidebar/sidebar";
import { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { videoContext } from "../../context/videoContext";
import "./singleVideoPage.css";

export const SingleVideoPage = () => {
  const [sidebar, setSidebar] = useState(false);
  let encodedToken = localStorage.getItem("token");
  const { videoList } = useContext(videoContext);
  const videoId = useParams();

  const playVideo = videoList.find((video) => video._id === videoId.videoId);
  const { title, creator, views, subscribers, url } = playVideo;

  return (
    // Navigation
    <div className="main-container">
      <div className="video-list-nav">
        <div className="left-items">
          <MenuIcon
            onClick={() => {
              setSidebar(!sidebar);
            }}
          />

          <div className="logo">
            <Link to="/">&#60; CodeTube &frasl; &#62;</Link>
          </div>
        </div>
        <div className="search-box">
          <Search />
        </div>
        <div className="nav-btn">
          {encodedToken ? (
            <Button
              component={Link}
              to="/logout"
              variant="contained"
              color="success"
              sx={{ mt: 1, mb: 1 }}
            >
              LOGOUT
            </Button>
          ) : (
            <Button
              component={Link}
              to="/login"
              variant="contained"
              color="success"
              sx={{ mt: 1, mb: 1 }}
            >
              LOGIN
            </Button>
          )}
        </div>
      </div>
      {/* Video Listing */}
      <div className="video-list">
        <div className={`menu ${sidebar ? "hide" : ""}`}>
          <Sidebar />
        </div>
        <div className="video-play-main">
          <div className="video">
            <iframe src={url} title="title" allowFullScreen></iframe>
          </div>
          <div className="main-title">
            <h3>{title}</h3>
          </div>
          <div className="creator">
            <h4>{creator} &#8729;</h4>
            <h3>{views} Views &#8729; </h3>
            <h3>{subscribers} Subscribers</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
