import React, { useEffect, useRef } from "react";

export default function ImageCover() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Load the image
    const img = new Image();
    img.src = "textutils/public/logo512.png"; // Replace with your image URL

    img.onload = function () {
      // Draw the image on the canvas
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Cover a part of the image
      const coverX = 150; // Starting x-coordinate of the cover
      const coverY = 100; // Starting y-coordinate of the cover
      const coverWidth = 200; // Width of the cover
      const coverHeight = 150; // Height of the cover

      ctx.fillStyle = "rgba(0, 0, 0, 0.5)"; // Semi-transparent black
      ctx.fillRect(coverX, coverY, coverWidth, coverHeight); // Draw the rectangle
    };
  }, []); // Empty dependency array ensures this runs once after the component mounts

  return (
    <div>
      <h1>Cover Part of an Image</h1>
      <canvas
        ref={canvasRef}
        width="600"
        height="400"
        style={{ border: "1px solid #000" }}
      ></canvas>
    </div>
  );
}
