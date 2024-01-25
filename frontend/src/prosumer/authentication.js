// import React from "react";
// import { Link } from "react-router-dom";

// export default function ProducerAuthentication(){
//     return(
//   <div className="auth-container">
//     <h1>Welcome to Netha!</h1>
//     <p>Ready to join or log in?</p>
//     <div className="button-group">
//       <Link to="/prosumer/login"><button>Log In</button></Link>
//       <Link to="/prosumer/signup"><button>Sign Up</button></Link>
//     </div>
//   </div>);
// }


import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';
import myImage from "../images/3.jpg";

const RegisterButton = ({text, Click}) => {
  const [buttonStyles, setButtonStyles] = useState({
    border: 'none',
    width: '200px',
    height: '65px',
    borderRadius: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
    background: '#005d63',
    cursor: 'pointer',
    transition: 'background 0.3s ease-in-out',
  });
  const [textStyles, setTextStyles] = useState({
    fontWeight: '600',
    color: 'white',
    fontSize: 'x-large',
  });
  const handleHover = () => {
    setButtonStyles((prevStyles) => ({
      ...prevStyles,
      background: 'linear-gradient(0deg, #02ffff, #005d63)',
      transform: 'translateY(-2px)',
    }));
    setTextStyles((prevStyles) => ({
      ...prevStyles,
      color: 'white',
    }));
  };
  const handleLeave = () => {
    setButtonStyles((prevStyles) => ({
      ...prevStyles,
      background: '#005d63',
      transform: 'translateY(0)',
    }));
    setTextStyles((prevStyles) => ({
      ...prevStyles,
      color: 'white', // Set the original color here
    }));
  };
  if (Click !== 0) {
    return (
      <button className="btn" style={buttonStyles} onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={Click}>
        <span className="text" style={textStyles}>{text}</span>
      </button>
    );
  } else {
    return (
      <button className="btn" style={buttonStyles} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
        <span className="text" style={textStyles}>{text}</span>
      </button>
    );
  }
}
export {RegisterButton};

let flexrow = {
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'center',
  justifyContent: 'center'
}

let flexcolumn = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center'
}

let div = {
  height: '100vh',
  width: '100vw',
  background:` url(${myImage})`,
  backgroundSize: "cover",
}

let h1={
  fontFamily: 'Poppins',
  textAlign: 'center',
  fontSize: '4rem',
  color: 'white'
 
}


let p={
  fontFamily: 'Poppins',
  color: '#02ffff',
  marginBottom: '0',
  paddingLeft:'30px',
}

let box= {
  backgroundColor: '#001719',
  opacity: '0.9',
  height: '350px',
  width: '45vw',
  borderRadius: '25px',
  padding: '20px'
}


function ProducerAuthentication() {
  return (
    <div style={{ ...flexrow, ...div }}>
      <div style={{ ...flexcolumn, gap: '3.5rem' }}>
        <h1 style={h1}>Welcome to Netha!</h1>
        <div style={{ ...flexrow }}>
          <div style={{ ...box, ...flexcolumn, gap: '3rem' }}>
            <div style={{ ...flexcolumn, gap: '1rem' }}>
              <p style={p}>ready to join or log in?</p>
              <Link to="/prosumer/login" style={{ ...flexrow, textDecoration: 'none' }}>
                <RegisterButton text="Log In" Click={0} />
              </Link>
            </div>
            <div style={{ ...flexcolumn, gap: '1rem' }}>
              {/* <p style={p}>already have an accout?</p> */}
              <Link to="/prosumer/signup" style={{ ...flexrow, textDecoration: 'none' }}>
                <RegisterButton text="Sign Up" Click={0} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProducerAuthentication ;