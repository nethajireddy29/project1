import React, { useState } from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react";

export default function ConsumerHistory(){
  const [Dictionary,setDictionary]=useState([]);
    async function send(id){
        try {
          // ... (your existing code for sending data to the server)
          const response = await fetch('/api/getAllTransaction', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "microid":id }),
          });     
    
          const responseData = await response.json(); // Await the response text
          console.log('Server response:',responseData);
          setDictionary(responseData)
        }
          catch (error) {
            console.error('Error sending data to the server:', error);
            // Handle errors, e.g., show an error message to the user
          }
        }
    send(localStorage.getItem("micrometerid"));
    return (
      <>
      <div>
        <h1>Consumers List!</h1>
        {Dictionary.map((item, outerIndex) => (
          <div key={outerIndex}>
            <div className="shadow" style={{ backgroundColor: "#DDF2FD", height: "30vh", width: "18vw", margin: "3%", marginRight: 0, padding: "2%", borderRadius: "10px" }}>
               
              <p> Name : {item["name"]} </p>
              <p> Micro Meter ID : {item["microid"]} </p>
              <p> Balance : {item["units"]} </p>
              <p> Energy Balance : {item["amount"]} </p>
            </div>
          </div>
        ))}
      </div>
      </>
            );
}