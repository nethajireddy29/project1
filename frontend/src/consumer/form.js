import React from "react";
function Form(props) {
  async function add(){
    const cName = document.getElementById("cName").value;
    const cMMID = document.getElementById("cMMID").value;

    console.log(cName);
    console.log(cMMID);

  
    const k= await props.connect.addConsumer(cName,cMMID,0)
    //console.log(k);
    alert("SUCCESSFULLY ADDED");
  }
  let style = {
    backgroundColor: "#DAFFFB",
    color: "black",
    fontSize: 20,
    textAlign: "center",
    padding: "2%",
    marginTop: "3%",
    marginLeft: "30%",
    heigth: "70%",
    width:"40%",
    borderRadius: "3%"
  }
  let inputbox ={
    height: 40,
    width: "60%",
    borderRadius: 20,
    backgroundColor: "#9BBEC8",
    margin: 5,
    borderWidth: 0,
    textAlign: "center",
    fontSize: 15,
    marginBottom: 8
  }
  let myButton = {
    backgroundColor: "#164863",
    color:"#ffffff",
    height: "20%",
    width: "30%",
    borderRadius: 20,
    padding: "2%"
  }
return (<>
  <div className ="welcomeContainer shadow" style={style}>
    <h1> Consumer Form! </h1><br/>
    <input type= "text" id="cName" placeholder="Enter Your Name" style={inputbox}/><br/>
    <input type="text" id="cMMID" placeholder="Enter Your Micro Meter ID" style={inputbox}/><br/>
    <button className="btn" style={myButton} onClick={add}> Add</button>
  </div>
        </>
  );
}

export default Form;