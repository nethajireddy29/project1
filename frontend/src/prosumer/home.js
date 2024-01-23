import React from "react";
import ProsumerNavbar from "./navbar.js";

export default function ProsumerHome(){
    return(
        <>
        <ProsumerNavbar/>
        <div style={{backgroundColor:"#9BBEC8", height:"100vh"}}>
            
            <p>HOME</p>
            <a href = "/prosumer/createcontract">create</a>
        </div>
        </>
    )
}