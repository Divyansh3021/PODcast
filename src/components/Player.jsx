import React, { useState, useRef } from "react";
import "./styles/player.css";
import useVideoPlayer from "./UseVideoplayer";

function Player(props) {
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [progress, setProgress] = useState(0);
  // const videoRef = useRef(null);

  // const togglePlay = () => {
  //   if (isPlaying) {
  //     videoRef.current.pause();
  //   } else {
  //     videoRef.current.play();
  //   }
  //   setIsPlaying(!isPlaying);
  // };

  // const handleProgress = () => {
  //   const duration = videoRef.current.duration;
  //   const currentTime = videoRef.current.currentTime;
  //   const progress = (currentTime / duration) * 100;
  //   setProgress(progress);
  // };

    const videoElement = useRef(null);
    const {
      playerState,
      togglePlay,
      handleOnTimeUpdate,
      handleVideoProgress,
      handleVideoSpeed,
      toggleMute,
    } = useVideoPlayer(videoElement);

  return (
    <div>
      {/* <video
        controls
        className="video-player"
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      >
        <source type="video/mp4" />
      </video> */}
        {/* <div>
          <button onClick={togglePlay}>
            {isPlaying ? (
              <img
                src={require("./assets/play-btn.png")}
                alt=""
                className="video-control"
              />
            ) : (
              <img
                src={require("./assets/play-btn.png")}
                alt=""
                className="video-control"
              />
            )}
          </button>
          <progress value={progress} max="100" />
        </div> */}

<div className="video-player-container">
      <div className="video-wrapper">
        <video
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
        />
        <div className="controls">
          <div className="actions">
            <button onClick={togglePlay}>
              {!playerState.isPlaying ? (
                <img className="video-control" src={require("./assets/play-btn.png")}/>
              ) : (
                <img className="video-control" src={require("./assets/pause-btn.png")}/>
              )}
            </button>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={playerState.progress}
            onChange={(e) => handleVideoProgress(e)}
          />
          <select
            className="velocity"
            value={playerState.speed}
            onChange={(e) => handleVideoSpeed(e)}
          >
            <option className="video-speed-control" value="0.50">0.50x</option>
            <option className="video-speed-control" value="1">1x</option>
            <option className="video-speed-control" value="1.25">1.25x</option>
            <option className="video-speed-control" value="1.50">1.50x</option>
            <option className="video-speed-control" value="1.75">1.75x</option>
            <option className="video-speed-control" value="2">2x</option>
          </select>
          <button className="mute-btn" onClick={toggleMute}>
            {!playerState.isMuted ? (
              <img className="video-control" src={require("./assets/volume.png")}/>
            ) : (
              <img className="video-control" src={require("./assets/volume-off.png")}/>
            )}
          </button>
        </div>
      </div>
    </div>

        <div className="video-info">
          <h2 className="video-title">{props.title}POdcast</h2>
              <div className="video-actions">
                <img src={require("../components/assets/bookmark.png")} alt="Bookmark" />
                <img src={require("../components/assets/share.png")} alt="Share" />
              </div>
        </div>

        <div className="video-queue">

        </div>
    </div>
  );
}

export default Player;
