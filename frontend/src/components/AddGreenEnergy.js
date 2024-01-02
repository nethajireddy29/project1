import React, { useState } from "react";
import connectToMetaMask from "../hooks/MetaMaskConnection";

function AddGreenEnergy() {
  const [tem, setTem] = useState("");

  async function connect() {
    const { sendDataContract } = await connectToMetaMask();
    setTem(sendDataContract);
  }

  async function addGreenEnergy() {
    let uniqueID = document.getElementById("uniqueID").value;
    let charge = document.getElementById("charge").value;
    let energyProduction = document.getElementById("energyProduction").value;
    // Implement your logic for adding green energy
    const data = tem.addGreenEnergy(Number(uniqueID),Number(charge),Number(energyProduction))
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
        <h1>Add Green Energy</h1>
        <br />
        <input type="text" id="uniqueID" placeholder="uniqueID" style={inputbox} />
        <br />
        <input type="text" id="charge" placeholder="charge" style={inputbox} />
        <br />
        <input type="text" id="energyProduction" placeholder="energyProduction" style={inputbox} />
        <br />
        <button className="btn" style={myButton} onClick={addGreenEnergy}>
          Add Green Energy
        </button>
        <button className="btn" style={myButton} onClick={connect}>
          Connect MetaMask
        </button>
      </div>
      {/* Uncomment and implement the producer component */}
      {/* <Producer /> */}
      {/* <AddLoad />*/}
    </>
  );
}

export default AddGreenEnergy;