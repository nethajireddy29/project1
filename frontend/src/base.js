import React from "react";
import { Link } from "react-router-dom";

export default function  Base(){
  return (
    <div>
      <h2>Navigate Using Buttons</h2>
      <p>Click a button to navigate to different pages:</p>
      <div className="button-container">
        <Link to="/producer"><button>Producer</button></Link>
        <Link to="/consumer"><button>Consumer</button></Link>
        <Link to="/prosumer"><button>Prosumer</button></Link>
      </div>
    </div>
  );
}
