// CustomCursor.jsx

import React, { useState, useEffect } from "react";
import "./Cursor.css"; // Import your CSS file for styling
import Quill from "../../Assets/images/quill.png";

const Cursor = ({ isGlobalHovered }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  const handleCursorClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      {!isGlobalHovered && (
        <div
          className={`custom-cursor ${isClicked ? "clicked" : ""}`}
          style={{
            left: `${position.x + 16}px`,
            top: `${position.y - 72}px`,
          }}
          onMouseDown={handleCursorClick}
          onMouseUp={handleCursorClick}
        >
          <img className="quill" src={Quill} alt="quill" width={40} height={70} />
        </div>
      )}
    </div>
  );
};

export default Cursor;
