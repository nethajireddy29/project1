import React, { useState } from 'react';
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

export default FaceAuthentication;
