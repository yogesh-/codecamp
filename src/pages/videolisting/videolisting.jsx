import MenuIcon from "@mui/icons-material/Menu";
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

import TextField from "@mui/material/TextField";

export const VideoListing = () => {
  const { videoList, setVideoList } = useContext(videoContext);
  const [list, setList] = useState();
  const [sidebar, setSidebar] = useState(false);
  const [search, setSearch] = useState("");
  const [flag, setFlag] = useState(false);

  let tokenDb = localStorage.getItem("token");
  let searchResult;

  var categoryResult;

  const categoryHandler = (arg) => {
    setFlag(true);
    if (arg === "all") {
      categoryResult = list;
      setVideoList(categoryResult);
      console.log(categoryResult, "from if block");
    } else {
      categoryResult = list.filter((item) => item.category === arg);
      console.log(categoryResult, "else block");
      setVideoList(categoryResult);
    }
  };

  const searchHandler = (e) => {
    var searchTerm = e.target.value.toLowerCase();
    console.log(searchTerm, "searc term changing");
    setSearch(searchTerm);

    if (searchTerm === "") {
      console.log("empty search");
      setVideoList(list);
    }

    if (flag) {
      searchResult = videoList.filter((item) =>
        item.title.toLowerCase().includes(searchTerm)
      );
      console.log(searchResult);
      setVideoList(searchResult);
    } else {
      searchResult = list.filter((item) =>
        item.title.toLowerCase().includes(searchTerm)
      );
      setVideoList(searchResult);
    }
  };

  if (search === "" && categoryResult === null) {
    setVideoList(list);
  }
  useEffect(() => {
    let videofetch = async () => {
      try {
        let response = await axios.get("/api/videos");

        if (response.status === 200) {
          var videoArr = response.data.videos;
          setList(videoArr);
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

          <div className="logo">
            <Link to="/">&#60; CodeTube &frasl; &#62;</Link>
          </div>
        </div>
        <div className="search-box">
          {/* <Search /> */}
          <TextField
            id="search-bar"
            className="text"
            variant="outlined"
            placeholder="Search..."
            size="small"
            onChange={searchHandler}
          />
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
          <Topbar func={categoryHandler} />
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
