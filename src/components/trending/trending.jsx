import "./trending.css";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { videoContext } from "../../context/videoContext";

export const Trending = () => {
  const [trend, setTrend] = useState([]);
  const { setVideoList } = useContext(videoContext);

  useEffect(() => {
    let trendCall = async () => {
      try {
        let response = await axios.get("/api/videos");
        if (response.status === 200) {
          setTrend(response.data.videos);
          setVideoList(response.data.videos);
        } else {
        }
      } catch (error) {
        console.log(error);
      }
    };
    trendCall();
  });
  // console.log(videoList);
  return (
    <>
      <div className="heading">Trending Videos</div>
      <hr></hr>
      {trend.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="trending-container">
          {trend.map((item) => {
            return (
              <li key={item._id}>
                <Link to={`/playvideo/${item._id}`}>
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
                </Link>
              </li>
            );
          })}
        </div>
      )}
    </>
  );
};
