import React, { useState } from "react";
import axios from "axios";
//import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
const qs = require("qs");
const Otm = ({ phone_number }) => {
  //const navigate = useNavigate();
  //const [phoneNumber, setPhoneNumber] = useState('+919346512861');
  const message = `https://y7tg7h-3000.csb.app/SetPassword`;
  console.log(message);
  //   const [message, setMessage] = useState(otp);

  const [path, setPath] = useState("/consumer/otp");
  const [text, setText] = useState("");
  const handleSendSMS = async () => {
    try {
      // Replace with your Twilio Account SID, Auth Token, and Twilio phone number
      const accountSid = "AC08cfe458768b236e7cd0639698669edd";
      const authToken = "fcfdb2bf0f09401ae298b598672ca273";

      const response = await axios.post(
        `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
        qs.stringify({ To: phone_number, From: "+12029525061", Body: message }),
        {
          headers: {
            Authorization: `Basic ${btoa(`${accountSid}:${authToken}`)}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error sending SMS:", error);
    }
  };
  const handleOnSubmit = () => {
    let inputValue = document.getElementById("otpNumber").value;
    if (message === inputValue) {
      console.log("Yes, It's correct");
      setPath("/consumer/microid");
    } else {
      console.log("Wrong otp");
      setPath("/consumer/otp");
      setText("Incorrect password. Please Try Again");
      setTimeout(() => {
        setText("");
      }, 3000);
    }
  };

  let mystyle = {
    backgroundColor: "#DAFFFB",
    textAlign: "center",
    height: "100vh",
    padding: 100,
  };
  return (
    <div className="conatiner" style={mystyle}>
      <h1>Enter OTP</h1>
      <div>
        <label htmlFor="otpNumber"></label>
        <input type="text" id="otpNumber" className="m-3" />
        <div style={{ paddingLeft: 70 }}></div>
        <div style={{ paddingRight: 80 }}>
          <button onClick={handleSendSMS} className="m-3 btn btn-primary">
            Resend OTP
          </button>
        </div>
        <Link className="btn btn-success" onClick={handleOnSubmit} to={path}>
          {" "}
          Submit{" "}
        </Link>
        <p> {text}</p>
      </div>
    </div>
  );
};

export default Otm;