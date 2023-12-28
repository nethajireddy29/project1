import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom

function Microid() {
  const history = useNavigate(); // Get the history object

  const message = Math.floor(Math.random() * 9000).toString();
  const micrometerid = `0426ELUZ${message}`;

  const sendDataToServer = async () => {
    console.log(micrometerid)
    try {
      // ... (your existing code for sending data to the server)
      const response = await fetch('http://localhost:3001/api1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "id": micrometerid }),
      });

      const responseData = await response.text(); // Await the response text
      console.log('Server response:', responseData);

      // Redirect to "/login" after successful data submission
      history('consumer/login');
    } catch (error) {
      console.error('Error sending data to the server:', error);
      // Handle errors, e.g., show an error message to the user
    }
  };

  return (
    <div>
      <div>Registration successful</div>
      <p>{micrometerid}</p>
      <button onClick={sendDataToServer}>Confirm</button>
    </div>
  );
}

export default Microid;
