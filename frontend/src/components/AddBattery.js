import React, {useState,useEffect}from 'react'

export default function AddBattery(props) {
  const [temp, setTemp] = useState('');
  
  async function callContractToMicro(){
      let data = await props.contract.createMicroGrid("1");

  }
  async function callContract(){
    let uniqueID = document.getElementById("uniqueID").value
    let minCapacity = document.getElementById("minCapacity").value
    let maxCapacity = document.getElementById("maxCapacity").value
    let maxCharge = document.getElementById("maxCharge").value
    let maxEfficiency = document.getElementById("maxEfficiency").value
    let initSoc = document.getElementById("initSoc").value
    let data = await props.contract.addBattery(uniqueID,minCapacity,maxCapacity,maxCharge,maxEfficiency,initSoc);
    // console.log(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <label htmlFor="">uniqueID</label>
        <input type="text"  id="uniqueID"/><br/>
        <label htmlFor="">minCapacity</label>
        <input type="text"  id="minCapacity"/><br/>
        <label htmlFor="">maxCapacity</label>
        <input type="text"  id="maxCapacity"/><br/>
        <label htmlFor="">maxCharge</label>
        <input type="text"  id="maxCharge"/><br/>
        <label htmlFor="">maxEfficiency</label>
        <input type="text"  id="maxEfficiency"/><br/>
        <label htmlFor="">initSoc</label>
        <input type="text"  id="initSoc"/><br/>

        <button onClick={callContract}>AddBattery</button>
        <button onClick={callContractToMicro}>add microgrid</button>
        

      </header>
    </div>
  );
}
