
import{ React ,useState}from "react";
import myImage from "../images/5.jpg";
import CryptoJS from "crypto-js";
import ConsumerNavbar from "./navbar";

let div = {
  width: '100vw',
  backgroundColor: '#001518',
}
let shadow={
  width: '70vw',
  // backgroundImage: `url(${myImage})`,
  // backgroundSize: 'cover',
  backgroundImage: 'linear-gradient(45deg, #001e20, #003d46)',
  boxShadow: '0 4px 8px #005f6d',
  // backgroundColor: '#001e20',
  margin: "3% 3% 1% 3%",
  padding: "3%", 
  border: ' 2px solid #02ffff',
  borderRadius: "10px",
  color: 'white'
}
let flexcolumn = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center'
}
let flexrow = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
}

const encryptionKey = "00112233445566778899AABBCCDDEEFF00112233445566778899AABBCCDDEEFF";


export default function ConsumerHistory(){

  const [Dictionary,setDictionary]=useState([]);

  function decryptAES(encryptedText) {
    const decrypted = CryptoJS.AES.decrypt(encryptedText, encryptionKey).toString(
      CryptoJS.enc.Utf8
    );
    return decrypted;
  }
  
    async function send(id){
       const microid=localStorage.getItem("micrometerid")
        try {
          // ... (your existing code for sending data to the server)

          const response = await fetch('/api/getAllTransaction', {

            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "microid":microid }),

          });
    
          const responseData = await response.json(); // Await the response text
          console.log('Server response:',responseData);
          setDictionary([...responseData])
        }
          catch (error) {
            console.error('Error sending data to the server:', error);
            // Handle errors, e.g., show an error message to the user
          }
        }

    // send("0426ELUZ1358");
    send(decryptAES(localStorage.getItem("micrometerid")));
    return (
      <>
      <div style={{...div}}>
        <ConsumerNavbar/>
        {Dictionary.map((item, outerIndex) => (
          <div key={outerIndex} style={{...flexcolumn, alignItems:'center'}}>
            <div className="shadow" style={{...shadow, ...flexrow, justifyContent: "flex-start", gap: '15rem'}}>
               
               {/* {item.toString()} */}
               <div>
                <pre> Name           : {item["name"]} </pre> 
                <pre> Micro Meter ID : {item["microid"]} </pre>
                <pre> Balance        : {item["units"]} </pre>
                <pre> FromBattery    : {item["fromBattery"]} </pre>
               </div>

              <div>
                <pre> FromGreenEnergy : {item["fromGE"]} </pre>
                <pre> FromGrid        : {item["fromGrid"]} </pre>
              {/* <p> Energy Balance : {item["amount"]} </p> */}
                <pre> Amount          : {Number(item["amount"].hex)}  WEI</pre>
                <pre> Date Time       : </pre>
              </div>
              
            </div>
          </div>
        ))}
      </div>
      </>
            );
}