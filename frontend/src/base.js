import React from "react";
import { Link } from "react-router-dom";
import myImage from "./consumer/3.jpg";

let div = {
  height: '100vh',
  width: '100vw',
  background: `url(${myImage})`,
  backgroundSize: "cover",
}

let flexcolumn={
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

let flexrow={
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
}

export default function  Base(){
  return (
    <div style={{...div, ...flexcolumn}}>
      {/* <h2>Navigate Using Buttons</h2>
      <p>Click a button to navigate to different pages:</p> */}
      <div className="button-container" style={{...flexrow, gap:'2rem'}}>
        <Link to="/producer"><button>Producer</button></Link>
        <Link to="/consumer"><button>Consumer</button></Link>
        <Link to="/prosumer"><button>Prosumer</button></Link>
      </div>
    </div>
  );
}
