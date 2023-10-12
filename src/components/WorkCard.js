import React from "react";
import image1IMAGE from "../assets/image1.avif";
import taskIMAGE from "../assets/task.png";

const cardStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px",
  border: "1px solid #e0e0e0",
  borderRadius: "10px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  margin: "20px",
  backgroundColor: "#f9f9f9",
};

const contentStyle = {
  flex: 1,
  padding: "20px",
  textAlign: "left",
};

const titleStyle = {
  fontSize: "24px",
  margin: "0",
  color: "#333",
};

const imageStyle = {
  width: "50%",
  maxWidth: "300px",
  height: "auto",
  borderRadius: "10px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const textStyle = {
  fontSize: "16px",
  color: "#666",
};

function WorkCard() {
  const buttonStyle = {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  buttonStyle[":hover"] = {
    backgroundColor: "#0056b3",
  };

  return (
    <div>
      <div style={cardStyle}>
        <div style={contentStyle}>
          <h1 style={titleStyle}>ECOM Website</h1>
          <p style={textStyle}>
            Creating a simple e-commerce website with login and registration
            pages involving multiple components, including product listings,
            shopping cart functionality, and more. In the project listed below
            provides a basic structure of a React application with login and
            registration pages. Note that this is a simplified example and
            doesn't include advanced e-commerce features.
          </p>
          <button
            style={buttonStyle}
            onClick={() => (window.location.href = "https://github.com")}
          >
            View
          </button>
        </div>
        <img src={image1IMAGE} alt="ECOM Website" style={imageStyle} />
      </div>

      <div style={cardStyle}>
        <div style={contentStyle}>
          <h1 style={titleStyle}>Task Management App</h1>
          <p style={textStyle}>
            Creating a task management app involves building various components
            and implementing features for adding, updating, and tracking tasks.
            Below is a simplified example of a task management app using React.
            This example doesn't include user authentication or a database, but
            it provides a foundation for building a task management app.
          </p>
          <button
            style={buttonStyle}
            onClick={() => (window.location.href = "https://github.com")}
          >
            View
          </button>
        </div>

        <img src={taskIMAGE} alt="Task Management App" style={imageStyle} />
      </div>
    </div>
  );
}

export default WorkCard;
