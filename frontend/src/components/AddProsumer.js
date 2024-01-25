import React, { useState } from "react";
import connectToMetaMask from "../hooks/MetaMaskConnection";
import { useNavigate } from "react-router-dom";

function AddProsumer() {
  const [tem, setTem] = useState("");
  const navigate = useNavigate();
  async function connect() {
    const { sendDataContract } = await connectToMetaMask();
    await setTem(sendDataContract);
    console.log(sendDataContract)
  }

  async function addProsumer() {
    let uniqueID = document.getElementById("uniqueID").value;
    let name = document.getElementById("name").value;
    const data = tem.addProsumer(name, Number(uniqueID));
    navigate("/prosumer/joinmicrogrid");
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
        <h1>Add Prosumer</h1>
        <br />
        <input
          type="text"
          id="uniqueID"
          placeholder="uniqueID"
          style={inputbox}
        />
        <br />
        <input type="text" id="name" placeholder="name" style={inputbox} />
        <br />
        {/* <input type="text" id="energyRequired" placeholder="energyRequired" style={inputbox} />
        <br /> */}
        <button className="btn" style={myButton} onClick={addProsumer}>
          Add Prosumer
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

export default AddProsumer;