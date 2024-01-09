import React from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import ConsumerNavbar from "./navbar.js";
// import { Link } from "react";

export default function ConsumerHistory(){
    async function send(id){
        try {
          // ... (your existing code for sending data to the server)
          const response = await fetch('/api/getAllTrasaction', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "microid":id }),
          });
    
          const responseData = await response.text(); // Await the response text
          console.log('Server response:',responseData);
        }
          catch (error) {
            console.error('Error sending data to the server:', error);
            // Handle errors, e.g., show an error message to the user
          }
        }
    send("0426ELUZ4984");
          return (
            <div>
              <p>hi</p>
            </div>
          );
        
}