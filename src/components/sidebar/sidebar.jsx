import "./sidebar.css";
import ExploreIcon from "@mui/icons-material/Explore";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";

export const Sidebar = () => {
  return (
    <>
      <div className="sidebar-menu">
        <ul>
          <li>
            <ExploreIcon sx={{ fontSize: 40 }} />
            <div className="icon-name">Explore</div>
          </li>
          <li>
            <WatchLaterIcon sx={{ fontSize: 40 }} />
            <div className="icon-name">Watch Later</div>
          </li>
          <li>
            <ThumbUpIcon sx={{ fontSize: 40 }} />
            <div className="icon-name">Liked</div>
          </li>
          <li>
            <PlaylistPlayIcon sx={{ fontSize: 40 }} />
            <div className="icon-name">Playlist</div>
          </li>
        </ul>
      </div>
    </>
  );
};
