// // CustomCursor.jsx

// import React, { useState, useEffect } from "react";
// import "./Cursor.css"; // Import your CSS file for styling
// import pointerYellow from "./pointer-yellow.png";
// import cursorYellow from "./cursor-yellow.png";
// import clickAnimation from "./onclick_animation.gif";

// const Cursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isHovered, setIsHovered] = useState(false);
//   const [isClicked, setIsClicked] = useState(false);

//   useEffect(() => {
//     const updateCursorPosition = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     document.addEventListener("mousemove", updateCursorPosition);

//     return () => {
//       document.removeEventListener("mousemove", updateCursorPosition);
//     };
//   }, []);

//   const handleCursorHover = () => {
//     setIsHovered(true);
//   };

//   const handleCursorLeave = () => {
//     setIsHovered(false);
//   };

//   const handleCursorClick = () => {
//     setIsClicked(!isClicked);
//   };

//   return (
//     <div
//       className={`custom-cursor ${isHovered ? "hovered" : ""} ${
//         isClicked ? "clicked" : ""
//       }`}
//       style={{
//         left: `${position.x}px`,
//         top: `${position.y}px`,
//         transform: `translate(-50%, -50%) scale(${
//           isHovered || isClicked ? 2 : 1
//         })`,
//       }}
//       onMouseDown={handleCursorClick}
//       onMouseUp={handleCursorClick}
//     >
//       <img src={clickAnimation} />
//     </div>
//   );
// };

// export default Cursor;

import React, { useState, useEffect } from "react";
import "./Cursor.css"; // Assuming you have a CSS file for styling
import first from "../../imgs/quill.png";

const Cursor = () => {
  const [cursorVisible, setCursorVisible] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setCursorVisible(true);
    };

    const handleMouseLeave = () => {
      setCursorVisible(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${cursorVisible ? "visible" : ""}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      {/* Replace "your-gif-path.gif" with the path to your GIF */}
      <img src={first} alt="custom-cursor" />
    </div>
  );
};

export default Cursor;
