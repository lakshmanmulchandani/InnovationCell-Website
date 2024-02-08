import React, { useState } from "react";
import "./Story.css";
import Stories from "react-insta-stories";

const st1 =
  "https://res.cloudinary.com/dbdf3pjsp/video/upload/v1707424649/speaker_last_nwnswu.mp4";
const st2 =
  "https://res.cloudinary.com/dbdf3pjsp/video/upload/v1707416954/dshaw_ix4pha.mp4";
const st3 =
  "https://res.cloudinary.com/dbdf3pjsp/video/upload/v1707416954/akas_axfsm1.mp4";
const st4 =
  "https://res.cloudinary.com/dbdf3pjsp/video/upload/v1707416955/deepak_vybs64.mp4";
const st5 =
  "https://res.cloudinary.com/dbdf3pjsp/video/upload/v1707416955/solar_bhdici.mp4";
const st6 =
  "https://res.cloudinary.com/dbdf3pjsp/video/upload/v1707424649/speaker_last_nwnswu.mp4";

const Story = () => {
  const [showStories, setShowStories] = useState(false);

  const stories2 = [
    {
      url: st1,
      type: "video",
    },
    {
      url: st2,
      type: "video",
    },
    {
      url: st3,
      type: "video",
    },
    {
      url: st4,
      type: "video",
    },
    {
      url: st5,
      type: "video",
    },
    {
      url: st6,
      type: "video",
    },
  ];

  return (
    <>
      <div className="story_app">
        <div className="stories">
          <Stories
            loop
            keyboardNavigation
            defaultInterval={3000}
            stories={stories2}
            onStoryEnd={(s, st) => console.log("story ended", s, st)}
            onAllStoriesEnd={(s, st) => console.log("all stories ended", s, st)}
            onStoryStart={(s, st) => console.log("story started", s, st)}
            height={"70vh"}
            width={"65vw"}
            isPaused={!showStories} // Pause when stories are not visible
          />
        </div>
      </div>
    </>
  );
};

const image = {
  display: "block",
  maxWidth: "100%",
  borderRadius: 4,
};

const contentStyle = {
  background: "salmon",
  width: "100%",
  padding: 20,
  color: "white",
};

export default Story;
