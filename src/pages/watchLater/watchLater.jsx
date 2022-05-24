import MenuIcon from "@mui/icons-material/Menu";
import { Search } from "../../components/searchBox/searchbox";
import "./watchLater.css";
import Button from "@mui/material/Button";
import { Sidebar } from "../../components/sidebar/sidebar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LongMenu } from "../../components/longmenu/longmenu";

export const WatchLater = () => {
  const [sidebar, setSidebar] = useState(false);
  let encodedToken = localStorage.getItem("token");

  const watchLaterVideos = useSelector((state) => state.watchLater.watchLater);

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
        {encodedToken ? (
          <div className="video-container-main">
            {watchLaterVideos.map((item) => {
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
                      <div className="longmenu">
                        <LongMenu video={item} />
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </div>
        ) : (
          <div class="login-prompt">
            <h2>Please login first</h2>
            <Button
              component={Link}
              to="/login"
              variant="contained"
              color="success"
              sx={{ mt: 1, mb: 1 }}
            >
              LOGIN
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
