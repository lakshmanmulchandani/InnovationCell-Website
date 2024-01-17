import React, { useState } from "react";
import { Howl, Howler } from "howler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import second from "./harry_potter_audio.mp3";
import pic from "./pointer-yellow.png";

const sound = new Howl({
  src: [second],
  loop: true,
  autoplay: true,
});

Howler.volume(0.5);

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
    setIsPlaying(!isPlaying);
    Howler.volume(isPlaying ? 0 : 0.5);
  };

  const toggleMute = () => {
    const currentVolume = sound.volume();
    sound.volume(currentVolume === 0 ? 0.5 : 0);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "50px",
        right: "50px",
        display: "flex",
        alignItems: "center",
        zIndex: "9999",
      }}
    >
      <button
        onClick={togglePlay}
        style={{
          background: "none",
          border: "none",
          fontSize: "24px",
          color: "#fff",
        }}
      >
        {isPlaying ? (
          <FontAwesomeIcon color="#d19f3d" icon={faVolumeUp} />
        ) : (
          <FontAwesomeIcon color="#d19f3d" icon={faVolumeMute} />
        )}
      </button>
    </div>
  );
};

export default AudioPlayer;
