import React from "react";
import fireIMAGE from "../assets/fire.webp";

function Img2() {
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100vh",
  };

  const imageStyle = {
    width: "100%",
    height: "100vh",
    objectFit: "cover",
  };

  const textStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "white", // Set the text color
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Optional text shadow
  };

  return (
    <div style={containerStyle}>
      <img src={fireIMAGE} alt="Fire 2" style={imageStyle} />
      <div style={textStyle}>
        <h1 style={{ fontSize: "50px", fontWeight: "30px" }}>About Me!</h1>
        <p style={{ fontSize: "40px", fontWeight: "20px" }}>
          I am a friendly Front End Developer
        </p>
      </div>
    </div>
  );
}

export default Img2;
