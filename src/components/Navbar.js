import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js"; // Add this line
import { useNavigate } from "react-router";
function Navbar() {
  const nav = useNavigate();
  const handleSubmit1 = (e) => {
    e.preventDefault();
    nav("/");
  };
  const handleSubmit2 = (e) => {
    e.preventDefault();
    nav("/project");
  };
  const handleSubmit3 = (e) => {
    e.preventDefault();
    nav("/about");
  };
  const handleSubmit4 = (e) => {
    e.preventDefault();
    nav("/contact");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <button
        className="navbar-brand"
        style={{
          fontSize: "40px",
          marginLeft: "20px",
          background: "none",
          border: "none",
        }}
        onClick={handleSubmit1}
      >
        Portfolio
      </button>

      <div className="collapse navbar-collapse" id="navbarText"></div>

      <form className="form-inline ">
        <button
          type="submit"
          onClick={handleSubmit1}
          style={{
            background: "none",
            border: "none",
            padding: "0",
            cursor: "pointer",
            color: "white", // or your preferred text color
            marginLeft: "15px",
            fontSize: "20px",
          }}
          className="nav-link-button"
        >
          Home
        </button>
        <button
          type="submit"
          onClick={handleSubmit2}
          style={{
            background: "none",
            border: "none",
            padding: "0",
            cursor: "pointer",
            color: "white", // or your preferred text color
            marginLeft: "15px",
            fontSize: "20px",
          }}
          className="nav-link-button"
        >
          Project
        </button>
        <button
          type="submit"
          onClick={handleSubmit3}
          style={{
            background: "none",
            border: "none",
            padding: "0",
            cursor: "pointer",
            color: "white", // or your preferred text color
            marginLeft: "15px",
            fontSize: "20px",
          }}
          className="nav-link-button"
        >
          About
        </button>
        <button
          type="submit"
          onClick={handleSubmit4}
          style={{
            background: "none",
            border: "none",
            padding: "0",
            cursor: "pointer",
            color: "white", // or your preferred text color
            marginLeft: "15px",
            fontSize: "20px",
            marginRight: "20px",
          }}
          className="nav-link-button"
        >
          Contact
        </button>
      </form>
    </nav>
  );
}

export default Navbar;
