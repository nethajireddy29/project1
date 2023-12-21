import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar.js";

export default function Plans(){
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
    return(
        <>
        <Navbar/>
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
                <img src="" alt="" style={{height:"14vh"}}/>
                <button style={buyButton}> Buy Now <FontAwesomeIcon icon={faCartShopping} style={favIcon} /></button>
            </div>
            <div style={{backgroundColor:"#DDF2FD",height:"20vh", width:"20vw", margin:"3%", marginRight:0}}>
                <img src="" alt=""/>
                <button style={buyButton}> Buy Now <FontAwesomeIcon icon={faCartShopping} style={favIcon} /></button>
            </div>
            <div style={{backgroundColor:"#DDF2FD",height:"20vh", width:"20vw", margin:"3%", marginRight:0}}>
                <img src="" alt=""/>
                <button style={buyButton}> Buy Now <FontAwesomeIcon icon={faCartShopping} style={favIcon}/></button>
            </div>
            <div style={{backgroundColor:"#DDF2FD",height:"20vh", width:"20vw", margin:"3%", marginRight:0}}>
                <img src="" alt=""/>
                <button style={buyButton}> Buy Now <FontAwesomeIcon icon={faCartShopping}  style={favIcon} /></button>
            </div>
            </div>
            <div className="d-flex flex-row">
            <div style={{backgroundColor:"#DDF2FD",height:"20vh", width:"20vw", margin:"3%", marginRight:0}}>
                <img src="" alt=""/>
                <button style={buyButton}> Buy Now <FontAwesomeIcon icon={faCartShopping}  style={favIcon} /></button>
            </div>
            <div style={{backgroundColor:"#DDF2FD",height:"20vh", width:"20vw", margin:"3%", marginRight:0}}>
                <img src="" alt=""/>
                <button style={buyButton}> Buy Now <FontAwesomeIcon icon={faCartShopping}  style={favIcon} /></button>
            </div>
            <div style={{backgroundColor:"#DDF2FD",height:"20vh", width:"20vw", margin:"3%", marginRight:0}}>
                <img src="" alt=""/>
                <button style={buyButton}> Buy Now <FontAwesomeIcon icon={faCartShopping}  style={favIcon} /></button>
            </div>
            <div style={{backgroundColor:"#DDF2FD",height:"20vh", width:"20vw", margin:"3%", marginRight:0}}>
                <img src="" alt=""/>
                <button style={buyButton}> Buy Now <FontAwesomeIcon icon={faCartShopping}  style={favIcon} /></button>
            </div>
            </div>
            <div className="d-flex flex-row">
            <div style={{backgroundColor:"#DDF2FD",height:"20vh", width:"20vw", margin:"3%", marginRight:0}}>
                <img src="" alt=""/>
                <button style={buyButton}> Buy Now <FontAwesomeIcon icon={faCartShopping}  style={favIcon} /></button>
            </div>
            <div style={{backgroundColor:"#DDF2FD",height:"20vh", width:"20vw", margin:"3%", marginRight:0}}>
                <img src="" alt=""/>
                <button style={buyButton}> Buy Now <FontAwesomeIcon icon={faCartShopping}  style={favIcon} /></button>
            </div>
            <div style={{backgroundColor:"#DDF2FD",height:"20vh", width:"20vw", margin:"3%", marginRight:0}}>
                <img src="" alt=""/>
                <button style={buyButton}> Buy Now <FontAwesomeIcon icon={faCartShopping}  style={favIcon} /></button>
            </div>
            <div style={{backgroundColor:"#DDF2FD",height:"20vh", width:"20vw", margin:"3%", marginRight:0}}>
                <img src="" alt=""/>
                <button style={buyButton}> Buy Now <FontAwesomeIcon icon={faCartShopping}  style={favIcon} /></button>
            </div>
            </div>
            
        </div>
        </>
    )
}