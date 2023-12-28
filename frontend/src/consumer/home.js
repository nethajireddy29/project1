import React from "react";
import "./styles.css";
import ConsumerNavbar from "./navbar.js";

export default function ConsumerHome(){
    return(
        <>
        <ConsumerNavbar/>
        <div style={{backgroundColor:"#9BBEC8", height:"100vh"}}>
            <p>HOME</p>
        </div>
        </>
    )
}