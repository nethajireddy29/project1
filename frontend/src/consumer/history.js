import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import ConsumerNavbar from "./navbar.js";
// import { Link } from "react";

export default function ConsumerHistory(){
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
    let link={
        backgroundColor:"#9BBEC8",
        color: "black",
        textDecoration: "none"

    }
    return(
        <>
        <ConsumerNavbar/>
        <div style={{backgroundColor:"#9BBEC8", height:"100%", padding:"3%", paddingTop:"0.9%"}}>
            <div style={{padding:10}}>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search for electric plans..." style={{borderRadius:20, backgroundColor:"#DDF2FD"}} aria-label="Search"/>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#808080",paddingTop:"1%", marginRight:"1%"}} />
                <div style={{backgroundColor:"#DDF2FD",height:"6vh",width:"3%", textAlign:"center", borderRadius:"100%", padding:"6px"}}>
                <FontAwesomeIcon icon={faCartShopping} style={{color: "#808080",paddingTop:"1%"}} />
                </div>
            </form>
            </div>
            <h3 style={{padding:10}}> Your Plans </h3>
            <div className="d-flex flex-row">
            <div style={{backgroundColor:"#DDF2FD",height:"20vh", width:"20vw", margin:"1%", marginLeft:0}}>
                <img src="" alt="" style={{height:"14vh"}}/>
                <button style={buyButton}> Buy Now <FontAwesomeIcon icon={faCartShopping} style={favIcon} /></button>
            </div>
            <div style={{margin:"1%"}}>
                <p> Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                <p><a href="/delete" style={link}>Delete </a> | <a href="/share" style={link}> Share </a>  |  <a href="/more" style={link}>See More Like This</a> </p>
            </div>
            </div>
            <div className="d-flex flex-row">
            <div style={{backgroundColor:"#DDF2FD",height:"20vh", width:"20vw", margin:"1%", marginLeft:0}}>
                <img src="" alt="" style={{height:"14vh"}}/>
                <button style={buyButton}> Buy Now <FontAwesomeIcon icon={faCartShopping} style={favIcon} /></button>
            </div>
            <div style={{margin:"1%"}}>
                <p> Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                <p><a href="/delete" style={link}>Delete </a> | <a href="/share" style={link}> Share </a>  |  <a href="/more" style={link}>See More Like This</a> </p>
            </div>
            </div>
            <div className="d-flex flex-row">
            <div style={{backgroundColor:"#DDF2FD",height:"20vh", width:"20vw", margin:"1%", marginLeft:0}}>
                <img src="" alt="" style={{height:"14vh"}}/>
                <button style={buyButton}> Buy Now <FontAwesomeIcon icon={faCartShopping} style={favIcon} /></button>
            </div>
            <div style={{margin:"1%"}}>
                <p> Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                <p><a href="/delete" style={link}>Delete </a> | <a href="/share" style={link}> Share </a>  |  <a href="/more" style={link}>See More Like This</a> </p>
            </div>
            </div>
            </div>
        </>
    );
}