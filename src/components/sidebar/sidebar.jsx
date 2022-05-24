import "./sidebar.css";
import ExploreIcon from "@mui/icons-material/Explore";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import { Link } from "react-router-dom";
import HistoryIcon from "@mui/icons-material/History";

export const Sidebar = () => {
  return (
    <>
      <div className="sidebar-menu">
        <ul>
          <Link to="/videos">
            <li>
              <ExploreIcon sx={{ fontSize: 40 }} />
              <div className="icon-name">Explore</div>
            </li>
          </Link>

          <Link to="/watchlater">
            <li>
              <WatchLaterIcon sx={{ fontSize: 40 }} />
              <div className="icon-name">Watch Later</div>
            </li>
          </Link>

          <Link to="/likes">
            <li>
              <ThumbUpIcon sx={{ fontSize: 40 }} />
              <div className="icon-name">Likes</div>
            </li>
          </Link>

          <Link to="/history">
            <li>
              <HistoryIcon sx={{ fontSize: 40 }} />
              <div className="icon-name">History</div>
            </li>
          </Link>

          <li>
            <PlaylistPlayIcon sx={{ fontSize: 40 }} />
            <div className="icon-name">Playlist</div>
          </li>
        </ul>
      </div>
    </>
  );
};
