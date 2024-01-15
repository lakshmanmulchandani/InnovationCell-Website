// CustomCursor.jsx

import React, { useState, useEffect } from "react";
import "./Cursor.css"; // Import your CSS file for styling

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
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

  const handleCursorHover = () => {
    setIsHovered(true);
  };

  const handleCursorLeave = () => {
    setIsHovered(false);
  };

  const handleCursorClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={`custom-cursor ${isHovered ? "hovered" : ""} ${
        isClicked ? "clicked" : ""
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${
          isHovered || isClicked ? 2 : 1
        })`,
      }}
      onMouseDown={handleCursorClick}
      onMouseUp={handleCursorClick}
    ></div>
  );
};

export default Cursor;

// CustomCursor.js

// import React, { useState, useEffect } from 'react';
// import './CustomCursor.css';
// import Quill from '../../Assets/images/quill2.png'

// const CustomCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     document.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className="custom-cursor" style={{ left: `${position.x + 2}px`, top: `${position.y - 36}px` }}>
//       {/* <Quill/> */}
//       <img className="quill-tip" src="/static/media/quill2.237107346a6c2df00194.png" alt="Quill" />
//     </div>
//   );
// };

// export default CustomCursor;

