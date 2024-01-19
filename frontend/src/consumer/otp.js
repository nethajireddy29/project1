/*import React, { useState } from 'react';
import axios from 'axios';
//import { useNavigate } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
const ConsumerOtp = () => {
  const navigate = useNavigate();
  //const [phoneNumber, setPhoneNumber] = useState('+919346512861');
  const message = Math.floor(Math.random() * 900000).toString();
  console.log(message)
//   const [message, setMessage] = useState(otp);

  const [path, setPath] = useState("/consumer/otp");
  const [text, setText] = useState("");
  const handleSendSMS = async () => {
    try {
      // Replace with your Twilio Account SID, Auth Token, and Twilio phone number
      const accountSid = 'AC1bccfed0756711b04099070150496740';
      const authToken = '1a81cd4481eb179f989ff94fb9992399';

      const response = await axios.post(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
        {
          To:'+916302618501',
          From:'+15674557713',
          Body: message,
        },
        {
            headers: {
                Authorization: `Basic ${btoa(`${accountSid}:${authToken}`)}`,
                'Content-Type': 'application/x-www-form-urlencoded',
              },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error('Error sending SMS:', error);
    }
  };
  const handleOnSubmit = () =>{
    let inputValue = document.getElementById("otpNumber").value;
    if (message === inputValue){
        console.log("Yes, It's correct");
        setPath("/consumer/microid");

    }
    else{
        console.log("Wrong otp");
        setPath("/consumer/otp");
        setText("Incorrect password. Please Try Again");
        setTimeout(()=>{
            setText("");
         },3000);
    }
  }

  let mystyle ={
    backgroundColor: "#DAFFFB",
    textAlign: "center",
    height: "100vh",
    padding: 100
  }
  return (
    <div className="conatiner" style={mystyle}>
      <h1>Enter OTP</h1>
      <div>
      <label htmlFor="otpNumber"></label>
        <input type="text" id="otpNumber" className="m-3"/>
      <div style={{ paddingLeft:70}}>
      </div>
      <div style={{paddingRight: 80}}>
      <button onClick={handleSendSMS} className='m-3 btn btn-primary'>Resend OTP</button>
      </div>
      <Link className="btn btn-success" onClick={handleOnSubmit} to={path}> Submit </Link>
      <p> {text}</p>
    </div>
    </div>
  );
};

export default ConsumerOtp;*/
import React, { useState } from 'react';
import axios from 'axios';
import { Link ,useNavigate} from "react-router-dom";

let button = {
  backgroundColor : '#164863',
  border: 'none',
  color: 'white',
  fontFamily: 'Roboto',
  fontSize: '25px',
  padding: '10px 40px 10px 40px',
  borderRadius: '25px',
  textDecoration: 'none',
  textAlign: 'center'
}
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
let authdiv2 = {
  height: '100vh',
  width: '45vw',
  backgroundColor: '#9bbec8'
}
let authdiv3 ={
  width: '48vw',
  backgroundColor: '#DDF2FD',
  padding: '0 2.5vw 0 2.5vw'
}
let input = {
  height: '70px',
  border: 'none',
  backgroundColor: '#9bbec8',
  padding: '0 40px 0 40px',
  fontSize: '25px',
  marginRight: '10vw',
  marginLeft: '10vw',
  borderRadius: '10px'
}
let item1= {
  margin: '10px 15px 10px 15px'
}
let resend = {
  borderColor: '#164863',
  borderRadius: '5px',
  backgroundColor: '#9bbec8',
  fontFamily: 'Roboto',
  color: '#164863',
  fontWeight: 'bold'
}


const Otp = () => {
  const navigate = useNavigate();
  //const [phoneNum, setPhoneNumber] = useState('12');
  const [buttonText, setButtonText] = useState("Send OTP");
  const message = Math.floor(Math.random() * 900000).toString();
  console.log(message)
//   const [message, setMessage] = useState(otp);
  const [text, setText] = useState("");
  const handleSendSMS = async () => {

    try {
      setButtonText("Resend OTP");
      // Replace with your Twilio Account SID, Auth Token, and Twilio phone number
      const accountSid = 'AC1bccfed0756711b04099070150496740';
      const authToken = '1a81cd4481eb179f989ff94fb9992399';
      //async ()=>{setPhoneNumber(await document.getElementById("mobileNumber"));}
      console.log(document.getElementById("mobileNumber").value)
      const response = await axios.post(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
        {
          To:document.getElementById("mobileNumber").value,
          From:'+15674557713',
          Body: message,
        },
        {
            headers: {
                Authorization: `Basic ${btoa(`${accountSid}:${authToken}`)}`,
                
                'Content-Type': 'application/x-www-form-urlencoded',
              },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error('Error sending SMS:', error);
    }
  };
  const handleOnSubmit = () =>{
    let inputValue = document.getElementById("otpNumber").value;
    if (message === inputValue){
        console.log("Yes, It's correct");
        navigate("consumer/sucess");

    }
    else{
        console.log("Wrong otp");
        navigate("consumer/otp");
        setText("Incorrect OTP. Please Try Again");
        setTimeout(()=>{
            setText("");
         },3000);
        
    }
  }

  return (
    <div className="conatiner" style={flexrow}>
      <div style={{float: 'left',...authdiv2, ...flexcolumn}}></div>
      <div style={{...flexcolumn, ...authdiv3, float:'right'}}>
        <div style={{...flexcolumn, height:'500px'}}>

          <label htmlFor="otpNumber"></label>
            <input style={{...item1, ...input}} type="text" id="mobileNumber" className="m-3" placeholder='Enter Mobile Number'/>

          <label htmlFor="otpNumber"></label>
            <input style={{...item1, ...input}} type="text" id="otpNumber" className="m-3" placeholder='Enter OTP'/>
          <div style={{...flexrow, justifyContent: 'flex-end', padding: '0 70px 20px 70px'}}>
            <button style={resend} onClick={handleSendSMS} className='m-3 btn btn-primary'>{buttonText}</button>
          </div>
          <div style={{...flexrow, ...item1}}><Link style={{...button}} className="btn btn-success" onClick={handleOnSubmit}> Submit </Link></div>
          <p> {text}</p>
      </div>
      </div>
      
    </div>
  );
};

export default Otp;