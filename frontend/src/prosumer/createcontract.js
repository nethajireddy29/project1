// prosumer createcontract

import React from "react";
import myImage from "../images/3.jpg";
import RegisterButton from "../consumer/authentication";

let div = {
  height: "100vh",
  width: "100vw",
  background: `url(${myImage})`,
  backgroundSize: "cover",
};
let h1 = {
  fontFamily: "Poppins",
  textAlign: "center",
  color: "white",
  fontSize: "3rem",
};
let flexrow = {
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
  justifyContent: "center",
};
let flexcolumn = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

function ProducerCreateContract() {
  async function add() {
    const gstNumber = document.getElementById("getNumber").value;
    // const amount = document.getElementById("amount").value;
    const units = document.getElementById("units").value;
    const timespan = document.getElementById("timespan").value;

    const response = await fetch("/api/addPlan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        gst_number: gstNumber,
        microGridId: 0,
        units: Number(units),
        timespan: Number(timespan),
      }),
    });
    alert("SuccessFully Created an plan");
    console.log(await response.json());
  }
  // let style = {
  //   backgroundColor: "#DAFFFB",
  //   color: "black",
  //   fontSize: 20,
  //   textAlign: "center",
  //   padding: "2%",
  //   marginTop: "3%",
  //   marginLeft: "30%",
  //   heigth: "70%",
  //   width: "40%",
  //   borderRadius: "3%",
  // };
  let inputbox = {
    width: "40vw",
    height: "55px",
    borderColor: "#02ffff",
    borderWidth: "2px",
    backgroundColor: "rgb(0, 28, 32)",
    padding: "0 50px 0 50px",
    borderRadius: "5px",
    fontSize: "20px",
    color: "#02ffff",
  };
  // let myButton = {
  //   backgroundColor: "#164863",
  //   color: "#ffffff",
  //   height: "20%",
  //   width: "30%",
  //   borderRadius: 20,
  //   padding: "2%",
  // };
  return (
    <>
      <div style={{ ...div, ...flexrow }}>
        <div style={{ ...flexcolumn, gap: "0.25rem" }}>
          <h1 style={h1}> Create Plan! </h1>
          <br />
          <input
            type="text"
            id="getNumber"
            placeholder="Enter Your gst_number"
            style={{ ...inputbox }}
          />
          <br />
          {/* <input
          type="text"
          id="amount"
          placeholder="Enter Amount"
          style={inputbox}
        /> 
        <br />*/}
          <input
            type="number"
            id="units"
            placeholder="Enter units"
            style={inputbox}
          />
          <br />
          <input
            type="number"
            id="timespan"
            placeholder="Enter timespan"
            style={inputbox}
          />
          <br />
          {/* <button className="btn" onClick={add}>
            Add
          </button> */}
          {RegisterButton("Confirm", add)}
        </div>
      </div>
    </>
  );
}

export default ProducerCreateContract;
