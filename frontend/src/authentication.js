import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Authentication(){
    return(
        <div>
            <a href="/registration"> <button> REGISTRATION</button> </a>
            <a href="/login"> <button > LOGIN </button> </a>
        </div>
    )
}
function Login(){
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
            history('/login');
          }
          // Redirect to "/login" after successful data submission
          else{
            history("/login");
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

export {Authentication,Login}