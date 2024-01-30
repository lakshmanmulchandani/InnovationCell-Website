import React, { useState, useEffect } from "react";
import goldenSnitchGif from "./snitch_gif.gif"; // Replace with the actual path to your Golden Snitch gif
import "./Snitch.css"; // Create a CSS file for styling

const Snitch = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateSnitchPosition = () => {
      const newX = Math.random() * window.innerWidth;
      const newY = Math.random() * window.innerHeight;

      setPosition({ x: newX, y: newY });

      // const moveDuration = Math.random() * 5000 + 2000;
      const pauseDuration = Math.random() * 3000 + 1000;

      setTimeout(() => {
        requestAnimationFrame(updateSnitchPosition);
      }, pauseDuration);
    };

    updateSnitchPosition();

    return () => {
      // Cleanup
    };
  }, []);

  return (
    <div className="snitch" style={{ left: position.x, top: position.y }}>
      <img src={goldenSnitchGif} alt="Golden Snitch" height={200} />
    </div>
  );
};

export default Snitch;
