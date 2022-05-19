import MenuIcon from "@mui/icons-material/Menu";
import { Search } from "../../components/searchBox/searchbox";
import "./videolisting.css";
import "../../components/trending/trending.css";
import Button from "@mui/material/Button";
import { Sidebar } from "../../components/sidebar/sidebar";
import { useEffect, useState } from "react";
import { Topbar } from "../../components/topBar/topbar";
import axios from "axios";

export const VideoListing = () => {
  const [sidebar, setSidebar] = useState(false);
  const [video, setVideo] = useState([]);

  useEffect(() => {
    let videofetch = async () => {
      try {
        let response = await axios.get("/api/videos");
        console.log("response", response);
        if (response.status === 200) {
          setVideo(response.data.videos);
        } else {
        }
      } catch (error) {
        console.log(error);
      }
    };
    videofetch();
  }, []);
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
          <div className="logo">&#60; CodeTube &frasl; &#62;</div>
        </div>
        <div className="search-box">
          <Search />
        </div>
        <div className="nav-btn">
          <Button variant="contained" color="success" sx={{ mt: 1, mb: 1 }}>
            LOGIN
          </Button>
        </div>
      </div>
      {/* Video Listing */}
      <div className="video-list">
        <div className={`${sidebar ? "hide" : ""}`}>
          <Sidebar />
        </div>
        <div className="below-nav">
          <Topbar />
          {video.length === 0 ? (
            <div>Loading...</div>
          ) : (
            <div className="trending-container">
              {video.map((item) => {
                return (
                  <li key={item._id}>
                    <div className="video-container">
                      <img
                        className="thumbnail"
                        src={item.thumbnail}
                        alt="thumbnail"
                      ></img>
                      <p className="duration">{item.duration}</p>
                      <div className="video-text">
                        <img src={item.creator_icon} alt="icon"></img>
                        <div className="channel-details">
                          <p>{item.title}</p>

                          <div className="channel-stats">
                            <p>{item.creator}</p>
                            <div className="date-views">
                              <p>
                                {item.views} • {item.posted_at}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
