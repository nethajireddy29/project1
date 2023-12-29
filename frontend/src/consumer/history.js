import React from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import ConsumerNavbar from "./navbar.js";
// import { Link } from "react";

export default function ConsumerHistory(){
    async function send(id){
        try {
          // ... (your existing code for sending data to the server)
          const response = await fetch('http://localhost:3001/api4', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "id":id }),
          });
    
          const responseData = await response.text(); // Await the response text
          console.log('Server response:',responseData);
        }
          catch (error) {
            console.error('Error sending data to the server:', error);
            // Handle errors, e.g., show an error message to the user
          }
        }
    send("0426ELUZ7164");
          return (
            <div>
              <p>hi</p>
            </div>
          );
        
}