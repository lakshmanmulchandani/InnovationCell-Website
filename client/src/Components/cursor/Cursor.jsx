import React, { useState, useEffect } from "react";
import customCursorImage1 from "../../imgs/wandPng.png"; // Replace with the actual path to your first image
import customCursorImage2 from "../../imgs/magicWandPng.gif"; // Replace with the actual path to your second image
import "./Cursor.css"; // Create a CSS file for styling

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    const updateCursorPosition = () => {
      if (!isClicked) {
        setPosition({ x: mouseX, y: mouseY });
      }
      requestAnimationFrame(updateCursorPosition);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleClick = () => {
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 1000);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);
    updateCursorPosition();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
    };
  }, [isClicked]);

  const cursorImage = isClicked ? customCursorImage2 : customCursorImage1;

  return (
    <div
      className="custom-cursor"
      style={{ left: position.x, top: position.y }}
    >
      <img src={cursorImage} alt="Custom Cursor" />
    </div>
  );
};

export default Cursor;
