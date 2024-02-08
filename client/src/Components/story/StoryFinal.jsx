import React, { useState } from "react";
import Story from "./Story";
import Storyimg from "./Storyimg";

const StoryFinal = () => {
  const [showStories, setShowStories] = useState(false);
  const toggleStories = () => {
    setShowStories(!showStories);
  };
  return (
    <>
      <div className="finalStory">
        <div className="teamHeading temhd">
          <h1>Our Speakers</h1>
        </div>
        {showStories == true ? <Story /> : <Storyimg />}
        <div className="left">
          <button className="show_story" onClick={toggleStories}>
            {showStories ? "Hide Speakers" : "Show Speakers"}
          </button>
        </div>
      </div>
    </>
  );
};

export default StoryFinal;
