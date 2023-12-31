/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function ConsumerAuthentication(){
    return(
        <div>
            <a href="consumer/registration"> <button> REGISTRATION</button> </a>
            <a href="consumer/login"> <button > LOGIN </button> </a>
        </div>
    )
}
function ConsumerLogin(){
    const history = useNavigate();
    const [text, setText] = useState("");
    console.log("hi")
    const sendDataToServer = async () => {
        let inputValue = document.getElementById("microid").value;
        console.log(typeof(inputValue))
        try {
          // ... (your existing code for sending data to the server)
          const response = await fetch('http://localhost:3001/api2', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "id": inputValue }),
          });
    
          const responseData = await response.text(); // Await the response text
          console.log('Server response:',responseData,inputValue);
        
          if(responseData==="True"){
            
            history('/consumer/home');
          }
          // Redirect to "/login" after successful data submission
          else{
            history("/consumer/login");
            setText("INVALID")
        setTimeout(()=>{
            setText("");
         },3000);
          }
        } catch (error) {
          console.error('Error sending data to the server:', error);
          // Handle errors, e.g., show an error message to the user
        }
      };
    return(
        <div>
            <label htmlFor="microid"></label>
        <input type="text" id="microid" className="m-3"/>
            <button onClick={sendDataToServer}>Confirm</button>
            <p>{text}</p>
        </div>
    )
}

export {ConsumerAuthentication,ConsumerLogin}*/
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

let button = {
  backgroundColor : '#164863',
  border: 'none',
  color: 'white',
  fontFamily: 'Roboto',
  fontSize: '30px',
  padding: '10px 40px 10px 40px',
  borderRadius: '25px'
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
  paddingLeft: '5vw'
}

let buttonbg = {
  textDecoration: 'none',
  paddingTop: '67px'
}

let h1={
  fontFamily: 'Poppins',
  textAlign: 'center',
  fontSize: '3rem',
  width: '45vw',
  /*paddingLeft: '2.5vw',
  paddingRight: '2.5vw'*/
}

let h1login={
  fontFamily: 'Poppins',
  textAlign: 'center'
}

let p={
  fontFamily: 'Poppins',
  color: '#545454',
  marginBottom: '0'
}

let box= {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  backgroundColor: '#9bbec8',
  height: '300px',
  width: '45vw',
  borderRadius: '25px'
}

let input = {
  width: '55vh',
  height: '50px',
  border: '#545454',
  backgroundColor: '#9bbec8',
  padding: '0 40px 0 40px',
  fontSize: '25px'
}

let item1= {
  padding: '15px 15px 15px 15px'
}

function ConsumerAuthentication(){
    return(
        <div style={{float: 'left', ...flexrow}}>
            <div style={{...authdiv2, ...flexcolumn}}></div>
            <div style={{...authdiv3, ...flexcolumn}}>
              <h1 style={h1}>Welcome to our services!</h1>
              <div style={box}>
                <div style={{...buttonbg, ...flexcolumn, ...item1}}>
                  <p style={p}>do not have an accout?</p>
                  <a href="/consumer/registration" style={flexrow}> <button style={button}> Register here </button> </a>
                </div>
                <div style={{...buttonbg, ...flexcolumn, ...item1}}>
                <p style={p}>already have an accout?</p>
                  <a href="/consumer/login" style={flexrow}> <button style={button}> Login here </button> </a>
                </div>
              </div>
            </div>
        </div>
    )
}
function ConsumerLogin(){
    const history = useNavigate();
    const [text, setText] = useState("");
    console.log("hi")
    const sendDataToServer = async () => {
        let inputValue = document.getElementById("microid").value;
        console.log(typeof(inputValue))
        try {
          // ... (your existing code for sending data to the server)
          const response = await fetch('http://localhost:3001/api/loginConsumer', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "id": inputValue }),
          });
    
          const responseData = await response.text(); // Await the response text
          console.log('Server response:',responseData,inputValue);
        
          if(responseData.success===true){
            console.log("done");
            localStorage.setItem("consumerAuthToken", responseData.consumerAuthToken);
            history('/consumer/home');

          }
          // Redirect to "/login" after successful data submission
          else{
            history("/consumer/login");
            setText("INVALID")
        setTimeout(()=>{
            setText("");
         },3000);
          }
        } catch (error) {
          console.error('Error sending data to the server:', error);
          // Handle errors, e.g., show an error message to the user
        }
      };
    return(
        <div style={{float: 'left', ...flexrow}}>
          <div style={{...authdiv2, ...flexcolumn}}></div>
          <div style={{...authdiv3, ...flexcolumn}}>
            <h1 style={h1login}>Enter your micro ID</h1>
            <div>
              <label htmlFor="microid"></label>
              <div style={{...buttonbg, ...flexrow, ...item1}}><input style={input} type="text" id="microid" className="m-3"/></div>
              
              <div style={{...buttonbg, ...flexrow, ...item1}}>
                <button style={button} onClick={sendDataToServer}>Confirm</button>
                <p>{text}</p>
              </div>
            </div>
          </div>
            
        </div>
    )
}

export {ConsumerAuthentication,ConsumerLogin}