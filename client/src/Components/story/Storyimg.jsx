import React, { useState } from "react";
import "./Story.css";
import Stories from "react-insta-stories";
import Story from "./Story";

const st1 =
  "https://res.cloudinary.com/dbdf3pjsp/image/upload/v1707417199/avinyawebp_ipmnqa.webp";
const st2 =
  "https://res.cloudinary.com/dbdf3pjsp/image/upload/v1707424827/first-sp-65c53b50a8a46_tulc6d.webp";
const st3 =
  "https://res.cloudinary.com/dbdf3pjsp/image/upload/v1707424827/akshy-65c53b5080a26_x4oyqx.webp";
const st4 =
  "https://res.cloudinary.com/dbdf3pjsp/image/upload/v1707424826/akash-65c53b4bdb9ef_njtry8.webp";
const st5 =
  "https://res.cloudinary.com/dbdf3pjsp/image/upload/v1707424826/ajaykumar-65c53b4bd9436_jkspil.webp";

const Storyimg = () => {
  const [showStories, setShowStories] = useState(false);

  const stories2 = [
    {
      content: ({ action, isPaused }) => {
        return (
          <div style={contentStyle}>
            <img style={image} src={st1} alt="Story 1" />
          </div>
        );
      },
    },
    {
      content: ({ action, isPaused }) => {
        return (
          <div style={contentStyle}>
            <img style={image} src={st2} alt="Story 1" />
          </div>
        );
      },
    },
    {
      content: ({ action, isPaused }) => {
        return (
          <div style={contentStyle}>
            <img style={image} src={st3} alt="Story 1" />
          </div>
        );
      },
    },
    {
      content: ({ action, isPaused }) => {
        return (
          <div style={contentStyle}>
            <img style={image} src={st4} alt="Story 1" />
          </div>
        );
      },
    },
    {
      content: ({ action, isPaused }) => {
        return (
          <div style={contentStyle}>
            <img style={image} src={st5} alt="Story 1" />
          </div>
        );
      },
    },
  ];

  const toggleStories = () => {
    setShowStories(!showStories);
  };

  return (
    <>
      {/* <Story /> */}
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
            width={"80vw"}
            isPaused={!showStories}
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

export default Storyimg;
