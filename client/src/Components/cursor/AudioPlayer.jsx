import React from "react";
import { Howl, Howler } from "howler";
import second from "./harry_potter_audio.mp3";

const sound = new Howl({
  src: [second],
  loop: true,
  autoplay: true,
});

// Handle Howler's global volume
Howler.volume(0.5);

const AudioPlayer = () => {
  return null;
};

export default AudioPlayer;
