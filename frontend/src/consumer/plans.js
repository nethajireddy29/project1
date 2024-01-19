// import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// // import ConsumerNavbar from "./navbar.js";
// import { ethers } from 'ethers';
// export default function ConsumerPlans(props) {
//     let buyButton = {
//         backgroundColor: "#A6A6A6",
//         fontSize: "15px",
//         height: "6vh",
//         width: "20vw",
//         bottom: 0,
//         padding: "3%",
//         borderWidth: 0,
//         textAlign: "left"
//     }
//     let favIcon = {
//         color: "#808080",
//         marginLeft: "60%"
//     }
//     const handleOnCart = () => {
//         setColor("#B6D8EB");
//     }
//     const [color, setColor] = useState("#DDF2FD");
//     async function sendDataToServer(name, microid, units, amount) {
//         try {
//             // ... (your existing code for sending data to the server)
//             const response = await fetch('/api/createTransactionBills', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ "name": name, "microid": microid, "units": units, "amount": amount }),
//             });
//             const responseData = await response.json(); // Await the response text
//             const simulationResponse = await fetch("/api/simulation/requireUser", {
//                 method: "POST",
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ "userName": responseData._id, "energyRequired": units, "microGridId": 0 })
//             })
//             console.log('Server response:', responseData);
//         } catch (error) {
//             console.error('Error sending data to the server:', error);
//             // Handle errors, e.g., show an error message to the user
//         }
//     };

//     async function purchaseEnergy(value) {
//         // console.log(props)

//         const producers = await props.connect.showAllProducers(0);
//         const bigValue = ethers.BigNumber.from(value.toString());
//         const multiplier = ethers.BigNumber.from("4334633723450368");
//         const amount = bigValue.mul(multiplier);
//         //   const ans = await props.connect.purchaseEnergy(producers[0], { value: amount });
//         // const amount = value*4334633723450368;
//         const ans = await props.connect.purchaseEnergy(producers[0], { "value": amount });
//         // console.log(props)
//         const view = await props.connect.address_Consumer(props.metaMaskAddress)
//         console.log("microid", 1)
//         console.log(view[2].toNumber())
//         console.log(view[3].toNumber())
//         sendDataToServer(view[0], view[1], value, amount );
//         // sendDataToServer("rama","0426ELUZ7164",12,23);
//     }
//     return (
//         <>
//             {/* <ConsumerNavbar/> */}
//             <div style={{ backgroundColor: "#9BBEC8", height: "100%", padding: "3%", paddingTop: "0.9%" }}>
//                 <div style={{ padding: 10 }}>
//                     <form className="d-flex">
//                         <input className="form-control me-2" type="search" placeholder="Search for electric plans..." style={{ borderRadius: 20, backgroundColor: "#DDF2FD" }} aria-label="Search" />
//                         <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#808080", paddingTop: "1%", marginRight: "1%" }} />
//                         <div onChange={handleOnCart} style={{ backgroundColor: { color }, height: "6vh", width: "3%", textAlign: "center", borderRadius: "100%", padding: "6px" }} >
//                             <Link to="/carts"><FontAwesomeIcon icon={faCartShopping} style={{ color: "#808080", paddingTop: "1%" }} /></Link>
//                         </div>
//                     </form>
//                 </div>
//                 <div className="d-flex flex-row">
//                     <div style={{ backgroundColor: "#DDF2FD", height: "20vh", width: "20vw", margin: "3%", marginRight: 0 }}>
//                         <img src="" alt="" />
//                         <h1>100</h1>
//                         <button style={buyButton} onClick={() => { purchaseEnergy(100) }}> Buy Now <FontAwesomeIcon icon={faCartShopping} style={favIcon} /></button>
//                     </div>
//                     <div style={{ backgroundColor: "#DDF2FD", height: "20vh", width: "20vw", margin: "3%", marginRight: 0 }}>
//                         <img src="" alt="" />
//                         <h1>200</h1>
//                         <button style={buyButton} onClick={() => { purchaseEnergy(200) }}> Buy Now <FontAwesomeIcon icon={faCartShopping} style={favIcon} /></button>
//                     </div>
//                     <div style={{ backgroundColor: "#DDF2FD", height: "20vh", width: "20vw", margin: "3%", marginRight: 0 }}>
//                         <img src="" alt="" />
//                         <h1>400</h1>
//                         <button style={buyButton} onClick={() => { purchaseEnergy(400) }}> Buy Now <FontAwesomeIcon icon={faCartShopping} style={favIcon} /></button>
//                     </div>
//                     <div style={{ backgroundColor: "#DDF2FD", height: "20vh", width: "20vw", margin: "3%", marginRight: 0 }}>
//                         <img src="" alt="" />
//                         <h1>700</h1>
//                         <button style={buyButton} onClick={() => { purchaseEnergy(700) }}> Buy Now <FontAwesomeIcon icon={faCartShopping} style={favIcon} /></button>
//                     </div>
//                 </div>
//                 <div className="d-flex flex-row">
//                     <div style={{ backgroundColor: "#DDF2FD", height: "20vh", width: "20vw", margin: "3%", marginRight: 0 }}>
//                         <img src="" alt="" />
//                         <h1>103</h1>
//                         <button style={buyButton} onClick={() => { purchaseEnergy(103) }}> Buy Now <FontAwesomeIcon icon={faCartShopping} style={favIcon} /></button>
//                     </div>
//                     <div style={{ backgroundColor: "#DDF2FD", height: "20vh", width: "20vw", margin: "3%", marginRight: 0 }}>
//                         <img src="" alt="" />
//                         <h1>270</h1>
//                         <button style={buyButton} onClick={() => { purchaseEnergy(103) }}> Buy Now <FontAwesomeIcon icon={faCartShopping} style={favIcon} /></button>
//                     </div>
//                     <div style={{ backgroundColor: "#DDF2FD", height: "20vh", width: "20vw", margin: "3%", marginRight: 0 }}>
//                         <img src="" alt="" />
//                         <h1>401</h1>
//                         <button style={buyButton} onClick={() => { purchaseEnergy(103) }}> Buy Now <FontAwesomeIcon icon={faCartShopping} style={favIcon} /></button>
//                     </div>
//                     <div style={{ backgroundColor: "#DDF2FD", height: "20vh", width: "20vw", margin: "3%", marginRight: 0 }}>
//                         <img src="" alt="" />
//                         <h1>777</h1>
//                         <button style={buyButton} onClick={() => { purchaseEnergy(103) }}> Buy Now <FontAwesomeIcon icon={faCartShopping} style={favIcon} /></button>
//                     </div>
//                 </div>

//             </div>
//         </>
//     );
// }

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import ConsumerNavbar from "./navbar.js";

export default function ConsumerPlans(props) {
  let img={
    height: "25vh",
    width: "100%",
    backgroundSize: "cover",
    padding: '15px',
    borderRadius: '40px',
  }
  let cardBody={
    backgroundColor:'#001c20', 
    color: 'white',
    borderRadius: '20px'
  }
  let rowdiv={
    margin: '50px 30px 0 30px',
    display: 'flex-row !important',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem'
  }
  let card={
    backgroundColor: 'rgb(0, 28, 32)',
    //boxShadow: '0 0 20px #001c20',
    borderWidth: '4px',
    borderRadius: '20px',
    borderImage: 'linear-gradient(45deg, #005d63, #02ffff, #005d63, #005d63) 1',
  }

  const BuyButton = ({ buttonText }) => {
    const [buttonStyles, setButtonStyles] = useState({
      border: 'none',
      width: '150px',
      height: '40px',
      borderRadius: '3em',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '12px',
      background: '#005d63',
      cursor: 'pointer',
      transition: 'all 450ms ease-in-out',
    });
    const [textStyles, setTextStyles] = useState({
      fontWeight: '600',
      color: '#02ffff',
      fontSize: 'medium',
    });
    const handleHover = () => {
      setButtonStyles((prevStyles) => ({
        ...prevStyles,
        background: 'linear-gradient(0deg, #02ffff, #005d63)',
        transform: 'translateY(-2px)',
      }));
      setTextStyles((prevStyles) => ({
        ...prevStyles,
        color: 'white',
      }));
    };
    const handleLeave = () => {
      setButtonStyles((prevStyles) => ({
        ...prevStyles,
        background: '#005d63',
        transform: 'translateY(0)',
      }));
      setTextStyles((prevStyles) => ({
        ...prevStyles,
        color: '#02ffff',
      }));
    };
    return (
      <button
        className="btn"
        style={buttonStyles}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <span className="text" style={textStyles}>
          {buttonText}
        </span>
      </button>
    );
  };

  let favIcon = {
    color: "#ffffff",
  }
  const handleOnCart = () => {
    setColor("#B6D8EB");
  };
  let buyCart = {
    height: "6vh",
    width: "40px",
    borderRadius: "25%",
    backgroundColor: "#A6A6A6",
    textAlign: "center",
    padding: "2% 2% 0px 0px",
    margin: "13px 20px 0px auto",
  };
  const [color, setColor] = useState("#DDF2FD");
  async function sendDataToServer(name, microid, units, amount) {
    try {
      // ... (your existing code for sending data to the server)
      const response = await fetch(
        "http://localhost:3001/api/createTransactionBills",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            microid: microid,
            units: units,
            amount: amount,
          }),
        },
      );
      const responseData = await response.json();
      // Await the response text

      console.log("Server response:", responseData);
    } catch (error) {
      console.error("Error sending data to the server:", error);
      // Handle errors, e.g., show an error message to the user
    }
  }

  async function purchaseEnergy(value) {
    console.log(props);
    const ans = await props.connect.purchaseEnergy(value);
    const view = await props.connect.address_Consumer(
      "0x5c4813250dd228f7b94DFaeB315aEA66C66bBEA4",
    );
    console.log("microid", 1);
    console.log(view[2].toNumber());
    console.log(view[3].toNumber());
    sendDataToServer(view[0], view[1], view[2].toNumber(), view[3].toNumber());
  }

  // end of CSS

  return (
    <>
      <ConsumerNavbar />
      <div
        style={{
          height: "91vh",
          padding: "3%",
          paddingTop: "0.9%",
          backgroundColor: '#010c0e'
        }}
      >
        <div style={{ padding: 10 }}>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for electric plans..."
              style={{ borderRadius: 20, backgroundColor: "#005d63", border:'none', color: '#02ffff', paddingLeft: '30px'}}
              aria-label="Search"
            />
            <i className="material-icons" style={{fontSize:"25px", color:'#02ffff', padding:'8px 0 8px 0'}}>search</i>
            <div
              onChange={handleOnCart}
              style={{
                backgroundColor: { color },
                height: "6vh",
                width: "3%",
                textAlign: "center",
                borderRadius: "100%",
                padding: "6px",
              }}
            >
              <Link to="/carts">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{ fontSize: '18px', color: "#02ffff", paddingTop: "5px" }}
                />
              </Link>
            </div>
          </form>
        </div>

        {/* next */}
        
        <div style={{...rowdiv, display: 'flex', flexDirection: 'row', gap: '9rem'}}>
        <div className="card" style={{width: '20rem', ...card}}>
            <img style={{...img}} src="https://www.eclosio.ong/wp-content/uploads/2018/08/default.png" className="card-img-top" alt="..."/>
            <div className="card-body" style={{...cardBody}}>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <BuyButton buttonText="Buy Now" />
            </div>
        </div>
        <div className="card" style={{width: '20rem', ...card}}>
            <img style={{...img}} src="https://www.eclosio.ong/wp-content/uploads/2018/08/default.png" className="card-img-top" alt="..."/>
            <div className="card-body" style={{...cardBody}}>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <BuyButton buttonText="Buy Now" />
            </div>
        </div>
        <div className="card" style={{width: '20rem', ...card}}>
            <img style={{...img}} src="https://www.eclosio.ong/wp-content/uploads/2018/08/default.png" className="card-img-top" alt="..."/>
            <div className="card-body" style={{...cardBody}}>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <BuyButton buttonText="Buy Now" />
            </div>
        </div>
          {/* <div
            className="shadow"
            style={{
              backgroundColor: "#DDF2FD",

              width: "20vw",
              margin: "3%",
              marginRight: 0,
              borderRadius: "20px",
            }}
          >
            <img
              style={{
                height: "30vh",
                width: "100%",
                backgroundSize: "cover",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
              }}
              src="https://www.eclosio.ong/wp-content/uploads/2018/08/default.png"
              alt="myPic"
            />
            <p className="m-3" style={{ width: "100%" }}>
              {" "}
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
              Lorem Lorem Lorem Lorem Lorem Lorem{" "}
            </p>
            <div className="d-flex flex-row">
              <button
                className="m-3 shadow"
                style={buyButton}
                id="myButton"
                onClick={() => {
                  purchaseEnergy(12);
                }}
              >
                {" "}
                Buy Now
              </button>
              <div className="shadow" style={buyCart}>
                <FontAwesomeIcon icon={faCartShopping} style={favIcon} />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}