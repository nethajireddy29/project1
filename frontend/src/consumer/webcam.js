import React, { useRef, useState } from 'react';
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
      const response = await fetch('http://localhost:3001/api/aadharDatabase', {
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


export default Compare;
