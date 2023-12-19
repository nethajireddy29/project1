import React, { useState } from 'react';
import App from "./webcam.js"
function Credits() {
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
        <App aadhar={aadharNumber}/>
        <button className="button" type="submit">ENTER</button>
      </form>
    </div>
  );
}

export default Credits;
