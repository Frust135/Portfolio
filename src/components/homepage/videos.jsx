import React from "react";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import Card from "../common/card";
import "./styles/videos.css";
import VIDEOS from "../../data/videos";

const Videos = () => {
  return (
    <div className="videos">
      <Card
        icon={faYoutube}
        title="Videos"
        body={
          <div className="videos-body">
            {VIDEOS.videos.map((video, index) => (
              <div className="video" key={index}>
                <div className="video-info">
                  <div className="video-title">{video.title}</div>
                  {/* <div className="video-description">{video.description}</div> */}
                </div>
                <div className="video-header">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    className="video-iframe"
                  />
                </div>                
              </div>
            ))}
          </div>
        }
      />
    </div>
  );
};

export default Videos;