import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom
import { Buffer } from "buffer";
import CryptoJS from "crypto-js";

const encryptionKey = "00112233445566778899AABBCCDDEEFF00112233445566778899AABBCCDDEEFF";

// Ensure the key is 32 bytes long
if (Buffer.from(encryptionKey, "hex").length !== 32) {
  console.error("Invalid key length. Please use a 32-byte key for AES-256.");
  process.exit(1); // Exit the program due to an error
}

function encryptAES(text) {
  const encrypted = CryptoJS.AES.encrypt(text, encryptionKey).toString();
  return encrypted;
}

function decryptAES(encryptedText) {
  const decrypted = CryptoJS.AES.decrypt(encryptedText, encryptionKey).toString(
    CryptoJS.enc.Utf8
  );
  return decrypted;
}


function Microid() {
  const navigate = useNavigate(); // Get the history object

  const message = Math.floor(Math.random() * 9000).toString();
  const micrometerid = `0426ELUZ${message}`;
  const encryptedId = encryptAES(micrometerid);

  const sendDataToServer = async () => {
    console.log(micrometerid)
    console.log(encryptedId);
    try {
      // ... (your existing code for sending data to the server)
      const response = await fetch('/api/createConsumer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "microid": encryptedId }),
      });

      const responseData = await response.text(); // Await the response text
      console.log('Server response:', responseData);

      // Redirect to "/login" after successful data submission
      navigate('/consumer/form');
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
