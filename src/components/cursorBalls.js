// components/CursorBalls.js
import React, { useState, useEffect } from "react";

function CursorBalls() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div
        className="ball ball-1"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      ></div>
      <div
        className="ball ball-2"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      ></div>
    </div>
  );
}

export default CursorBalls;
