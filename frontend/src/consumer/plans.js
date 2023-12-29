import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import ConsumerNavbar from "./navbar.js";

export default function ConsumerPlans(props){
    let buyButton = {
        backgroundColor:"#A6A6A6",
        fontSize: "15px",
        height:"6vh",
        width:"20vw",
        bottom: 0,
        padding: "3%",
        borderWidth: 0,
        textAlign: "left"
    }
    let favIcon = {
        color: "#808080",
        marginLeft: "60%"
    }
    const handleOnCart = () =>{
        setColor("#B6D8EB");
    }
    const [color, setColor] = useState("#DDF2FD");
    async function sendDataToServer(name,microid,units){
        try {
          // ... (your existing code for sending data to the server)
          const response = await fetch('http://localhost:3001/api3', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({"name":name,"microid":microid,"units":units}),
          });
        const responseData = await response.text(); // Await the response text
        console.log('Server response:', responseData);
        } catch (error) {
          console.error('Error sending data to the server:', error);
          // Handle errors, e.g., show an error message to the user
        }
      };

    async function purchaseEnergy(value){
        console.log(props)
        const ans= await props.connect.purchaseEnergy(value);
        const view=await props.connect.address_Consumer("0xF1F03a707cbCE1fcD1F9A957171FD292c89ae6B8")
        console.log(ans)
        console.log(view[2].toNumber())
        sendDataToServer(view[0],view[1],view[2].toNumber());
        }
    return(
        <>
        <ConsumerNavbar/>
        <div style={{backgroundColor:"#9BBEC8", height:"100%", padding:"3%", paddingTop:"0.9%"}}>
            <div style={{padding:10}}>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search for electric plans..." style={{borderRadius:20, backgroundColor:"#DDF2FD"}} aria-label="Search"/>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#808080",paddingTop:"1%", marginRight:"1%"}} />
                <div onChange={handleOnCart} style={{backgroundColor:{color},height:"6vh",width:"3%", textAlign:"center", borderRadius:"100%", padding:"6px"}} >
                <Link to="/carts"><FontAwesomeIcon icon={faCartShopping} style={{color: "#808080",paddingTop:"1%"}} /></Link>
                </div>
            </form>
            </div>
            <div className="d-flex flex-row">
            <div style={{backgroundColor:"#DDF2FD",height:"20vh", width:"20vw", margin:"3%", marginRight:0}}>
                <img src="" alt=""/>
                <h1>100</h1>
                <button style={buyButton} onClick={()=>{purchaseEnergy(103)}}> Buy Now <FontAwesomeIcon icon={faCartShopping}  style={favIcon} /></button>
            </div>
            <div style={{backgroundColor:"#DDF2FD",height:"20vh", width:"20vw", margin:"3%", marginRight:0}}>
                <img src="" alt=""/>
                <h1>200</h1>
                <button style={buyButton} onClick={()=>{purchaseEnergy(200)}}> Buy Now <FontAwesomeIcon icon={faCartShopping}  style={favIcon} /></button>
            </div>
            <div style={{backgroundColor:"#DDF2FD",height:"20vh", width:"20vw", margin:"3%", marginRight:0}}>
                <img src="" alt=""/>
                <h1>400</h1>
                <button style={buyButton} onClick={()=>{purchaseEnergy(400)}}> Buy Now <FontAwesomeIcon icon={faCartShopping}  style={favIcon} /></button>
            </div>
            <div style={{backgroundColor:"#DDF2FD",height:"20vh", width:"20vw", margin:"3%", marginRight:0}}>
                <img src="" alt=""/>
                <h1>700</h1>
                <button style={buyButton} onClick={()=>{purchaseEnergy(700)}}> Buy Now <FontAwesomeIcon icon={faCartShopping}  style={favIcon} /></button>
            </div>
            </div>
            <div className="d-flex flex-row">
            <div style={{backgroundColor:"#DDF2FD",height:"20vh", width:"20vw", margin:"3%", marginRight:0}}>
                <img src="" alt=""/>
                <h1>103</h1>
                <button style={buyButton} onClick={()=>{purchaseEnergy(103)}}> Buy Now <FontAwesomeIcon icon={faCartShopping}  style={favIcon} /></button>
            </div>
            <div style={{backgroundColor:"#DDF2FD",height:"20vh", width:"20vw", margin:"3%", marginRight:0}}>
                <img src="" alt=""/>
                <h1>270</h1>
                <button style={buyButton} onClick={()=>{purchaseEnergy(103)}}> Buy Now <FontAwesomeIcon icon={faCartShopping}  style={favIcon} /></button>
            </div>
            <div style={{backgroundColor:"#DDF2FD",height:"20vh", width:"20vw", margin:"3%", marginRight:0}}>
                <img src="" alt=""/>
                <h1>401</h1>
                <button style={buyButton} onClick={()=>{purchaseEnergy(103)}}> Buy Now <FontAwesomeIcon icon={faCartShopping}  style={favIcon} /></button>
            </div>
            <div style={{backgroundColor:"#DDF2FD",height:"20vh", width:"20vw", margin:"3%", marginRight:0}}>
                <img src="" alt=""/>
                <h1>777</h1>
                <button style={buyButton} onClick={()=>{purchaseEnergy(103)}}> Buy Now <FontAwesomeIcon icon={faCartShopping}  style={favIcon} /></button>
            </div>
            </div>
            
        </div>
        </>
    );
}