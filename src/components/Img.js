import React from "react";
import fire2IMAGE from "../assets/fire2.jpg"; // Import the image
import { useNavigate } from "react-router-dom";
function Img() {
  const nav = useNavigate();
  const handleSubmit1 = (e) => {
    e.preventDefault();
    nav("/project");
  };
  const handleSubmit2 = (e) => {
    e.preventDefault();
    nav("/contact");
  };
  const textStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "white",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  };

  const buttonStyles = {
    background: "yellow",
    padding: "10px",
    minWidth: "160px",
    fontWeight: "bold",
    marginRight: "10px",
  };

  const contactButtonStyles = {
    background: "black",
    color: "white",
    padding: "10px",
    minWidth: "160px",
    fontWeight: "bold",
  };

  const responsiveTextStyles = {
    fontSize: "18px",
    lineHeight: "1.5",
  };

  const responsiveButtonStyles = {
    minWidth: "120px",
    padding: "8px",
    fontSize: "14px",
  };

  return (
    <div style={{ position: "relative" }}>
      <img
        src={fire2IMAGE}
        alt="Fire 2"
        style={{
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "cover",
        }}
      />
      <div style={textStyles}>
        <p style={{ fontWeight: "bold", ...responsiveTextStyles }}>
          HI, I'M A FRONT END DEVELOPER
        </p>
        <p
          style={{
            fontWeight: "800",
            fontSize: "20px",
            ...responsiveTextStyles,
          }}
        >
          REACTJS DEVELOPER
        </p>
        <br />
        <button
          onClick={handleSubmit1}
          style={{ ...buttonStyles, ...responsiveButtonStyles }}
        >
          PROJECTS
        </button>
        <button
          onClick={handleSubmit2}
          style={{ ...contactButtonStyles, ...responsiveButtonStyles }}
        >
          CONTACT
        </button>
      </div>
    </div>
  );
}

export default Img;
