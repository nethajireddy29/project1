/*import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';

function ShowImage({ webRef,aadharnumber,history}) {
  const [imageInBase64, setImageInBase64] = useState("");
  const [faceMatched, setFaceMatched] = useState("wait");
  const [showWebcam, setShowWebcam] = useState(true);

  const captureImage = () => {
    const base64Data = webRef.current.getScreenshot();
    setImageInBase64(base64Data);
    setShowWebcam(false); // Hide webcam after capturing image
  };

  const sendDataToServer = async () => {
    try {
      // ... (your existing code for sending data to the server)
      const response = await fetch('/api/aadharDatabase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "imagedata": imageInBase64,"aadharnumber":aadharnumber }),
      });
  
      if (!response.ok) {
        throw new Error('Netawork response was not ok');
      }
  
      const responseData = await response.text(); // Await the response text
      console.log('Server response:', responseData);

      // Assuming there's a variable in the server response indicating face match status
      const isFaceMatched = responseData === "True";
      setFaceMatched(isFaceMatched ? "True" : "False");
    } catch (error) {
      console.error('Error sending data to server:', error);
      // Handle errors, e.g., show an error message to the user
    }
  };

  return (
    <div>
      <p>{aadharnumber}</p>
      {showWebcam ? (
        <>
          <Webcam ref={webRef} />
          <button onClick={captureImage}>Capture Photo</button>
        </>
      ) : (
        <>
          {imageInBase64 === "" ? (
            <p>No image captured</p>
          ) : (
            <>
              <img src={imageInBase64} alt="Captured" />
              <button className="button" onClick={sendDataToServer}>
                Compare
              </button>
            </>
          )}
        </>
      )}
      <br />
      {faceMatched === "True" ? (<button onClick={() => history('/consumer/otp')}>GET OTP</button> ): (
        <p>Invalid</p>
      )}
    </div>
  );
}

function Compare({aadhar}) {
  const webRef = useRef(null);
  const history = useNavigate();
  return (
    <div className="App">
      <ShowImage webRef={webRef} aadharnumber={aadhar} history={history} />
    </div>
  );
}


export default Compare;*/

import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';

let button = {
  backgroundColor : '#545454',
  border: 'none',
  color: 'white',
  fontFamily: 'Roboto',
  fontSize: '30px',
  padding: '10px 40px 10px 40px',
  margin: '30px 32.25% 0 32.25%'
}

let margin = {
  margin: '30px 36.75% 0 36.75%'
}

let authdiv2 = {
  height: '70vh',
  width: '50vw',
  backgroundColor: '#9bbec8'
}

let p={
  textAlign: 'center',
  height: '50px',
  backgroundColor: '#9bbec8',
  padding: '0 40px 0 40px',
  fontSize: '25px',
  fontFamily: 'Roboto'
}

function ShowImage({ webRef,aadharnumber,navigate}) {
  const [imageInBase64, setImageInBase64] = useState("");
  const [faceMatched, setFaceMatched] = useState("wait");
  const [showWebcam, setShowWebcam] = useState(true);

  const captureImage = () => {
    const base64Data = webRef.current.getScreenshot();
    setImageInBase64(base64Data);
    setShowWebcam(false); // Hide webcam after capturing image
  };

  const sendDataToServer = async () => {
    try {
      // ... (your existing code for sending data to the server)
      const response = await fetch('/api/aadharDatabase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "imagedata": imageInBase64,"aadharnumber":aadharnumber }),
      });
  
      if (!response.ok) {
        throw new Error('Netawork response was not ok');
      }
  
      const responseData = await response.text(); // Await the response text
      console.log('Server response:', responseData);

      // Assuming there's a variable in the server response indicating face match status
      const isFaceMatched = responseData === "True";
      setFaceMatched(isFaceMatched ? "True" : "False");
    } catch (error) {
      console.error('Error sending data to server:', error);
      // Handle errors, e.g., show an error message to the user
    }
  };

  return (
    <div>

      {showWebcam ? (
        <>
          <div>
            <Webcam style={{float: 'left',...authdiv2}} ref={webRef} />
            <button style={button} onClick={captureImage}>Capture Photo</button>
            
          </div>
        </>
      ) : (
        <>
          {imageInBase64 === "" ? (
            <p>No image captured</p>
          ) : (
            <>
              <img style={{float: 'left',...authdiv2}} src={imageInBase64} alt="Captured" />
              <button style={{...button,...margin}} className="button" onClick={sendDataToServer}>
                Compare
              </button>
            </>
          )}
        </>
      )}
      <br />
       {faceMatched === "True" ? (<button onClick={() => navigate('/consumer/otp')}>GET OTP</button> ): (
        <p>Invalid</p>
      )} 
    </div>
  );
}

function Compare({aadhar}) {
  const webRef = useRef(null);
  const navigate = useNavigate();
  return (
    <div className="App">
      <ShowImage webRef={webRef} aadharnumber={aadhar} navigate={navigate} />
    </div>
  );
}


export default Compare;


