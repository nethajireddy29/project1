/*import React, { useState } from 'react';
import Compare from "./webcam.js"
function FaceAuthentication() {
  const [aadharNumber, setAadharNumber] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic for handling the submitted Aadhar Number here
    console.log('Aadhar Number submitted:', aadharNumber);
    // Redirect to /camera or perform other actions as needed
  };

  const handleInputChange = (event) => {
    setAadharNumber(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Aadhar Number
          <input type="text" value={aadharNumber} onChange={handleInputChange} />
        </label>
        <Compare aadhar={aadharNumber}/>
        <button className="button" type="submit">ENTER</button>
      </form>
    </div>
  );
}

export default FaceAuthentication;*/
import React, { useState } from 'react';
import Compare from "./webcam.js"

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

let button = {
  backgroundColor : '#164863',
  border: 'none',
  color: 'white',
  fontFamily: 'Roboto',
  fontSize: '30px',
  padding: '10px 40px 10px 40px',
  borderRadius: '25px'
}

let authdiv2 = {
  height: '100vh',
  width: '50vw',
  backgroundColor: '#9bbec8'
}

let authdiv3 ={
  height:'100vh',
  width: '47.85vw',
  backgroundColor: '#DDF2FD'
}

let box={
  height: '300px',
  padding: '0 3rem 0 3rem'
}

let h1={
  fontFamily: 'Poppins',
  textAlign: 'center',
  fontSize: '2rem',
  width: '45vw',
  /*paddingLeft: '2.5vw',
  paddingRight: '2.5vw'*/
}

let input = {
  height: '50px',
  backgroundColor: '#9bbec8',
  padding: '0 40px 0 40px',
  fontSize: '25px'
}

let item1= {
  padding: '15px 15px 15px 15px'
}

function FaceAuthentication() {
  const [aadharNumber, setAadharNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic for handling the submitted Aadhar Number here
    console.log('Aadhar Number submitted:', aadharNumber);
    // Redirect to /camera or perform other actions as needed
  };

  const handleInputChange = (event) => {
    setAadharNumber(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{float: 'left',...authdiv2, ...flexcolumn}} className='abcd'>
          <Compare aadhar={aadharNumber}/>
        </div>
        <div style={{float:'right',...authdiv3, ...flexcolumn}}>
          <div style={{...flexcolumn, ...box}}>
            <label style={flexcolumn}>
              <h1 style={h1}>Enter your Aadhar Number</h1>
              <input style={input} type="text" value={aadharNumber} onChange={handleInputChange} />
            </label>
            <div style={{...flexrow, ...item1}}>
              <button style={button} className="button" type="submit">Submit</button>
            </div>
            
          </div>
          
        </div>
      </form>
    </div>
  );
}

export default FaceAuthentication;
