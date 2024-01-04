import React, { useState } from "react";
import connectToMetaMask from "../hooks/MetaMaskConnection";
import { useNavigate } from "react-router-dom";
// import AddLoad from "./components/AddLoad";

function AddMicrogrid() {
  const [tem, setTem] = useState("");
const navigate = useNavigate()
  async function connect() {
    const { sendDataContract } = await connectToMetaMask();
    setTem(sendDataContract);
    // console.log(tem)
  }

  async function addMicrogrid() {

    let microGridName = document.getElementById("microGridName").value;
    const microGridId = await tem.microGridId();
    // console.log(Number(microGridId))
    const data = await tem.createMicroGrid(microGridName);
    tem.addProducerToMicroGrid(microGridId);
    navigate("/ProducerHomePage")
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
        <h1>Add Microgrid</h1>
        <input type="text" id="microGridName" placeholder="MicrogridName" style={inputbox} />
        <br />
        <button className="btn" style={myButton} onClick={addMicrogrid}>
          Add microgrid
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

export default AddMicrogrid; // Export the correct component