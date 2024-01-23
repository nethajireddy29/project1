import React from "react";
import { Link } from "react-router-dom";

export default function ProducerAuthentication(){
    return(
  <div className="auth-container">
    <h1>Welcome to Netha!</h1>
    <p>Ready to join or log in?</p>
    <div className="button-group">
      <Link to="/prosumer/login"><button>Log In</button></Link>
      <Link to="/prosumer/signup"><button>Sign Up</button></Link>
    </div>
  </div>);
}
