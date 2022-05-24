import MenuIcon from "@mui/icons-material/Menu";
import { Search } from "../../components/searchBox/searchbox";
import "./videolisting.css";
import "../../components/trending/trending.css";
import Button from "@mui/material/Button";
import { Sidebar } from "../../components/sidebar/sidebar";
import { useEffect, useState, useContext } from "react";
import { Topbar } from "../../components/topBar/topbar";
import axios from "axios";
import { LongMenu } from "../../components/longmenu/longmenu";
import { Link } from "react-router-dom";
import { videoContext } from "../../context/videoContext";

export const VideoListing = () => {
  const { videoList, setVideoList } = useContext(videoContext);
  const [sidebar, setSidebar] = useState(false);

  let tokenDb = localStorage.getItem("token");

  useEffect(() => {
    let videofetch = async () => {
      try {
        let response = await axios.get("/api/videos");

        if (response.status === 200) {
          setVideoList(response.data.videos);
        } else {
        }
      } catch (error) {
        console.log(error);
      }
    };
    videofetch();
  });
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
          {tokenDb ? (
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
        <div className="below-nav">
          <Topbar />
          {videoList.length === 0 ? (
            <div>Loading...</div>
          ) : (
            <div className="trending-container">
              {videoList.map((item) => {
                return (
                  <li key={item._id}>
                    <div className="video-container">
                      <Link to={`/playvideo/${item._id}`}>
                        <img
                          className="thumbnail"
                          src={item.thumbnail}
                          alt="thumbnail"
                        ></img>
                      </Link>
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
                        <div className="longmenu">
                          <LongMenu video={item} />
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
