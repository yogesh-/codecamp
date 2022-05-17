import "./trending.css";
import axios from "axios";
import { useEffect, useState } from "react";

export const Trending = () => {
  const [trend, setTrend] = useState([]);

  useEffect(() => {
    let trendCall = async () => {
      try {
        let response = await axios.get("/api/videos");
        console.log("response", response);
        if (response.status === 200) {
          setTrend(response.data.videos);
        } else {
        }
      } catch (error) {
        console.log(error);
      }
    };
    trendCall();
  }, []);

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
    </>
  );
};
