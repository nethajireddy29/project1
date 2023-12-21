import React from "react";
import "./styles.css";
import Navbar from "./navbar.js";

export default function Home(){
    return(
        <>
        <Navbar/>
        <div style={{backgroundColor:"#9BBEC8", height:"100vh"}}>
            <p>HOME</p>
        </div>
        </>
    )
}