import React, { useState } from 'react';
function Microid(){
    const message = Math.floor(Math.random() * 9000).toString();
    const micrometerid=`0426ELUZ${message}`
const sendDataToServer = async () => {
    try {
      // ... (your existing code for sending data to the server)
      const response = await fetch('http://localhost:3001/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "imagedata": imageInBase64,"aadharnumber":aadharnumber }),
      });
    } catch (error) {
      console.error('Error sending data to server:', error);
      // Handle errors, e.g., show an error message to the user
    }
  };
return(
    <div>
        <div>registration succesfull</div>
        <p>{micrometerid}</p>
        <a href="/login"> <button onclick={sendDataToServer}> confirm</button> </a>
    </div>
)}