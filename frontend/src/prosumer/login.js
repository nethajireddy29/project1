// prosumer login 

// import React from 'react'
// import ProsumerNavbar from "./navbar.js";
// export default function ProsumerHistory() {
//   return (
//     <>
//     <ProsumerNavbar/>
//     <div>login</div></>
//   )
// }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import myImage from "../images/3.jpg";

let input = {
  width: "50vw",
  height: "70px",
  borderColor: "#02ffff",
  borderWidth: "2px",
  backgroundColor: "rgb(0, 28, 32)",
  padding: "0 50px 0 50px",
  borderRadius: "5px",
  fontSize: "20px",
  color: "#02ffff",
};

let div = {
  height: "100vh",
  width: "100vw",
  background: `url(${myImage})`,
  backgroundSize: "cover",
};

let flexrow = {
  display: "flex",
  flexDirection: "row",
  gap: "12rem",
  justifyContent: "center",
  alignItems: "center",
};

let flexcolumn = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
};

let label = {
  color: "white",
  fontWeight: "500",
  fontSize: "1.2rem",
  marginLeft: "15px",
};

let h1 = {
  fontFamily: "Poppins",
  textAlign: "center",
  fontSize: "3.5rem",
  marginBottom: "2rem",
  color: "white",
  /*paddingLeft: '2.5vw',
  paddingRight: '2.5vw'*/
};

const BeautifulButton = (text) => {
  const [isHovered, setHovered] = useState(false);

  const buttonStyle = {
    position: "relative",
    display: "inline-block",
    width: "12rem",
    height: "4rem",
    background: isHovered
      ? "linear-gradient(to bottom, #003939, #005353)"
      : "linear-gradient(to bottom, #003939, #02ffff)",
    color: "white",
    fontFamily: '"Segoe UI", sans-serif',
    letterSpacing: "0.1ch",
    fontWeight: "600",
    fontSize: "1.6rem",
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
      type="submit"
      style={buttonStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {text}
    </button>
  );
};

export default function ProsumerLogin() {
  const [credentials, setcredentials] = useState({
    gst_number: "",
    password: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    // Synthetic Event
    e.preventDefault();
    const response = await fetch("api/ProsumerLogIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gst_number: credentials.gst_number,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert(
        "Registrant should have atleast 5 characters, GST Number should have atleast 14 characters and Password should have atleast 8 characters",
      );
    }
    if (json.success) {
      localStorage.setItem("prosumerAuthToken", json.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/Prosumer/home");
    }
  };
  const onChange = (event) => {
    if (event.target) {
      setcredentials({
        ...credentials,
        [event.target.name]: event.target.value,
      });
    }
  };
  return (
    <div style={{ ...div, ...flexcolumn, alignItems: "center" }}>
      <h1 style={{ ...h1 }}>Login to your account!</h1>
      <form onSubmit={handleSubmit} style={{ ...flexcolumn, gap: "2rem" }}>
        <div className="mb-3">
          <label
            htmlFor="gst_number"
            className="form-label"
            style={{ ...label }}
          >
            GST Number
          </label>
          <input
            style={{ ...input }}
            type="text"
            className="form-control"
            name="gst_number"
            value={credentials.gst_number}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label"
            style={{ ...label }}
          >
            Password
          </label>
          <input
            style={{ ...input }}
            type="password"
            className="form-control"
            name="password"
            value={credentials.password}
            onChange={onChange}
          />
        </div>
        <div style={{ ...flexrow, marginTop: "30px" }}>
          {/* <button type="submit" className="btn btn-primary" style={{...button}}>
              Submit
            </button> */}
          {BeautifulButton("Submit")}
        </div>
      </form>
    </div>
  );
}
