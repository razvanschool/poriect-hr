import React from "react";
import home from "./../../assets/home.png";

const Homepage = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to HR Application</h1>
      <img
        src={home}
        alt="HR App Logo"
        style={{ height: "200px", margin: "20px 0", borderRadius: "10px" }}
      />
      <p style={{ fontSize: "18px", color: "#333" }}>
        This is a simple HR management tool designed to help you manage
        employees efficiently.
        <br />
        Discover the features, manage your workforce, and improve productivity.
      </p>
    </div>
  );
};

export default Homepage;
