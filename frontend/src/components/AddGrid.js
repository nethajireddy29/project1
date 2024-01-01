import React, { useState } from "react";
import connectToMetaMask from "../hooks/MetaMaskConnection";
// import AddLoad from "./components/AddLoad";

function AddGrid() {
  const [tem, setTem] = useState("");

  async function connect() {
    const { sendDataContract } = await connectToMetaMask();
    setTem(sendDataContract);
  }

  async function addGrid() {
    let uniqueID = document.getElementById("uniqueID").value;
    let charge = document.getElementById("charge").value;
    let maxImport = document.getElementById("maxImport").value;
    let maxExport = document.getElementById("maxExport").value;
    const data = tem.addPowerGrid(Number(uniqueID),Number(charge),Number(maxImport),Number(maxExport))
  }

  let style = {
    backgroundColor: "#DAFFFB",
    color: "black",
    fontSize: 20,
    textAlign: "center",
    padding: "2%",
    marginTop: "3%",
    marginLeft: "30%",
    height: "70%",
    width: "40%",
    borderRadius: "3%",
  };

  let inputbox = {
    height: 40,
    width: "60%",
    borderRadius: 20,
    backgroundColor: "#9BBEC8",
    margin: 5,
    borderWidth: 0,
    textAlign: "center",
    fontSize: 15,
    marginBottom: 8,
  };

  let myButton = {
    backgroundColor: "#164863",
    color: "#ffffff",
    height: "20%",
    width: "30%",
    borderRadius: 20,
    padding: "2%",
    margin: "10px", // Added margin for better spacing
  };


  return (
    <>
      <div className="welcomeContainer shadow" style={style}>
        <h1>Add Grid</h1>
        <br />
        <input type="text" id="uniqueID" placeholder="uniqueID" style={inputbox} />
        <br />
        <input type="text" id="charge" placeholder="charge" style={inputbox} />
        <br />
        <input type="text" id="maxImport" placeholder="maxImport" style={inputbox} />
        <br />
        <input type="text" id="maxExport" placeholder="maxExport" style={inputbox} />
        <br />
        <button className="btn" style={myButton} onClick={addGrid}>
          Add load
        </button>
        <button className="btn" style={myButton} onClick={connect}>
          connect MetaMask
        </button>
      </div>
      {/* Uncomment and implement the producer component */}
      {/* <Producer /> */}
      {/* <AddLoad />*/}
    </>
  );
}

export default AddGrid; // Export the correct component