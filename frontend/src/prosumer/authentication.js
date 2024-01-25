// prosumer authentication

import React, { useState } from "react";
import { Link } from "react-router-dom";
import myImage from "../images/3.jpg";

let div = {
  height: "100vh",
  width: "100vw",
  background: `url(${myImage})`,
  backgroundSize: "cover",
};

let flexrow = {
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
  justifyContent: "center",
};

let flexcolumn = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
};

let h1 = {
  fontFamily: "Poppins",
  textAlign: "center",
  fontSize: "5rem",
  color: "white",
  margin: "0",
  /*paddingLeft: '2.5vw',
  paddingRight: '2.5vw'*/
};

let p = {
  fontFamily: "Poppins",
  color: "#02ffff",
  paddingLeft: "30px",
  fontSize: "1.5rem",
  marginBottom: "2.5rem",
  textAlign: "center",
};

const BeautifulButton = (text) => {
  const [isHovered, setHovered] = useState(false);

  const buttonStyle = {
    position: "relative",
    display: "inline-block",
    width: "15rem",
    height: "4rem",
    background: isHovered
      ? "linear-gradient(to bottom, #003939, #005353)"
      : "linear-gradient(to bottom, #003939, #02ffff)",
    color: "white",
    fontFamily: '"Segoe UI", sans-serif',
    letterSpacing: "0.1ch",
    fontWeight: "600",
    fontSize: "1.3rem",
    border: "none",
    borderRadius: "30px",
    padding: "14px 28px",
    cursor: "pointer",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
    animation: "button-shimmer 2s infinite",
    transition: "all 0.3s ease-in-out",
    transform: isHovered ? "translateY(-2px)" : "translateY(0)",
  };

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {text}
    </button>
  );
};

export { BeautifulButton };

export default function ProducerAuthentication() {
  return (
    <div
      className="auth-container"
      style={{ ...div, ...flexcolumn, alignItems: "center" }}
    >
      <h1 style={{ ...h1 }}>Welcome to Netha!</h1>
      <p style={{ ...p }}>Ready to join or log in?</p>
      <div className="button-group" style={{ ...flexrow, gap: "2rem" }}>
        <Link to="/prosumer/login">{BeautifulButton("Log In")}</Link>
        <Link to="/prosumer/signup">{BeautifulButton("Sign Up")}</Link>
      </div>
    </div>
  );
}