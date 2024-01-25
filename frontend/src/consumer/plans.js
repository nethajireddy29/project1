import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
// import ConsumerNavbar from "./navbar.js";
import { ethers } from 'ethers';
export default function ConsumerPlans(props) {
    const [plans,setPlans] = useState([]);
    let buyButton = {
        backgroundColor: "#A6A6A6",
        fontSize: "15px",
        height: "6vh",
        width: "20vw",
        bottom: 0,
        padding: "3%",
        borderWidth: 0,
        textAlign: "left"
    }
    let favIcon = {
        color: "#808080",
        marginLeft: "60%"
    }
    const handleOnCart = () => {
        setColor("#B6D8EB");
    }
    const [color, setColor] = useState("#DDF2FD");
    async function sendDataToServer(name, microid, units, amount) {
        try {
            // ... (your existing code for sending data to the server)
            const response = await fetch('/api/createTransactionBills', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "name": name, "microid": microid, "units": units, "amount": amount ,"microGridId": 0}),
            });
            const responseData = await response.json(); // Await the response text
            const simulationResponse = await fetch("/api/simulation/requireUser", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "userName": responseData._id, "energyRequired": units, "microGridId": 0 })
            })
            console.log('Server response:', responseData);
        } catch (error) {
            console.error('Error sending data to the server:', error);
            // Handle errors, e.g., show an error message to the user
        }
    };

    async function purchaseEnergy(microGridId,value) {
        // console.log(props)
        try{
        const producers = await props.connect.showAllProducers(microGridId);
        const prosumers = await props.connect.showAllProsumer(microGridId);
        const bigValue = ethers.BigNumber.from(value.toString());
        const multiplier = ethers.BigNumber.from("4334633723450368");
        const amount = bigValue.mul(multiplier);
        //   const ans = await props.connect.purchaseEnergy(producers[0], { value: amount });
        // const amount = value*4334633723450368;
        
        const ans = await props.connect.purchaseEnergy_to_Prosumer(producers[0],prosumers[0], { "value": amount });
        // console.log(props)
        const view = await props.connect.address_Consumer(props.metaMaskAddress)
        console.log("microid", 1)
        console.log(view[2].toNumber())
        console.log(view[3].toNumber())
        sendDataToServer(view[0], view[1], value, amount );
        // sendDataToServer("rama","0426ELUZ7164",12,23);
        }catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("/api/getAllPlans", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({})
            });
      
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
      
            const data = await response.json(); // await the promise resolution
            console.log("Data from server:", data);
            setPlans(data); // assuming 'data' is the array of plans
          } catch (error) {
            console.error("Error fetching plans:", error);
            // Handle errors, e.g., show an error message to the user
          }
        };
      
        fetchData();
      }, []);
      
    return (
        <>
            {/* <ConsumerNavbar/> */}

            <div style={{ backgroundColor: "#9BBEC8", height: "100%", padding: "3%", paddingTop: "0.9%" }}>
                <div style={{ padding: 10 }}>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search for electric plans..." style={{ borderRadius: 20, backgroundColor: "#DDF2FD" }} aria-label="Search" />
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#808080", paddingTop: "1%", marginRight: "1%" }} />
                        <div onChange={handleOnCart} style={{ backgroundColor: { color }, height: "6vh", width: "3%", textAlign: "center", borderRadius: "100%", padding: "6px" }} >
                            <Link to="/carts"><FontAwesomeIcon icon={faCartShopping} style={{ color: "#808080", paddingTop: "1%" }} /></Link>
                        </div>
                    </form>
                </div>
                <div className="d-flex flex-row">


<div style={{ backgroundColor: "#9BBEC8", height: "100%", padding: "3%", paddingTop: "0.9%" }}>
        {/* ... your search and cart code ... */}
        <div className="d-flex flex-row">
          {plans.map((plan, index) => (
            <div key={index} style={{ backgroundColor: "#DDF2FD", height: "20vh", width: "20vw", margin: "3%", marginRight: 0 }}>
              <img src="" alt="" />
              <h1>{plan.units}</h1>
              <button style={buyButton} onClick={() => { purchaseEnergy(plan.microGridId,plan.units) }}> Buy Now <FontAwesomeIcon icon={faCartShopping} style={favIcon} /></button>
            </div>
          ))}
        </div>
      </div>

                    
                    {/* <div style={{ backgroundColor: "#DDF2FD", height: "20vh", width: "20vw", margin: "3%", marginRight: 0 }}>
                        <img src="" alt="" />
                        <h1>200</h1>
                        <button style={buyButton} onClick={() => { purchaseEnergy(200) }}> Buy Now <FontAwesomeIcon icon={faCartShopping} style={favIcon} /></button>
                    </div>
                    <div style={{ backgroundColor: "#DDF2FD", height: "20vh", width: "20vw", margin: "3%", marginRight: 0 }}>
                        <img src="" alt="" />
                        <h1>400</h1>
                        <button style={buyButton} onClick={() => { purchaseEnergy(400) }}> Buy Now <FontAwesomeIcon icon={faCartShopping} style={favIcon} /></button>
                    </div>
                    <div style={{ backgroundColor: "#DDF2FD", height: "20vh", width: "20vw", margin: "3%", marginRight: 0 }}>
                        <img src="" alt="" />
                        <h1>700</h1>
                        <button style={buyButton} onClick={() => { purchaseEnergy(700) }}> Buy Now <FontAwesomeIcon icon={faCartShopping} style={favIcon} /></button>
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <div style={{ backgroundColor: "#DDF2FD", height: "20vh", width: "20vw", margin: "3%", marginRight: 0 }}>
                        <img src="" alt="" />
                        <h1>103</h1>
                        <button style={buyButton} onClick={() => { purchaseEnergy(103) }}> Buy Now <FontAwesomeIcon icon={faCartShopping} style={favIcon} /></button>
                    </div>
                    <div style={{ backgroundColor: "#DDF2FD", height: "20vh", width: "20vw", margin: "3%", marginRight: 0 }}>
                        <img src="" alt="" />
                        <h1>270</h1>
                        <button style={buyButton} onClick={() => { purchaseEnergy(103) }}> Buy Now <FontAwesomeIcon icon={faCartShopping} style={favIcon} /></button>
                    </div>
                    <div style={{ backgroundColor: "#DDF2FD", height: "20vh", width: "20vw", margin: "3%", marginRight: 0 }}>
                        <img src="" alt="" />
                        <h1>401</h1>
                        <button style={buyButton} onClick={() => { purchaseEnergy(103) }}> Buy Now <FontAwesomeIcon icon={faCartShopping} style={favIcon} /></button>
                    </div>
                    <div style={{ backgroundColor: "#DDF2FD", height: "20vh", width: "20vw", margin: "3%", marginRight: 0 }}>
                        <img src="" alt="" />
                        <h1>777</h1>
                        <button style={buyButton} onClick={() => { purchaseEnergy(103) }}> Buy Now <FontAwesomeIcon icon={faCartShopping} style={favIcon} /></button>
                    </div> */}
                </div>

            </div>
        </>
    );
}