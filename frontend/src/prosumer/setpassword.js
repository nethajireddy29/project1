import React, { useState } from "react";
// import SuccessPage from "./successPage.js";
import { Link } from "react-router-dom";
function Password() {
  const [path, setPath] = useState();
  let style = {
    backgroundColor: "#DAFFFB",
    color: "black",
    fontSize: 20,
    textAlign: "center",
    padding: "2%",
    marginTop: "3%",
    marginLeft: "30%",
    heigth: "70%",
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
  };
  const submitBtn = () => {
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirmP").value;
    if (password === confirm) {
      setPath("/successPage");
    } else {
      console.log("Yes");
    }
  };
  return (
    <>
      <div className="welcomeContainer shadow" style={style}>
        <h1> Set Password! </h1>
        <br />
        <input
          type="password"
          id="password"
          placeholder="Enter Your Password"
          style={inputbox}
        />
        <br />
        <input
          type="password"
          id="confirmP"
          placeholder="Confirm Password"
          style={inputbox}
        />
        <br />
        <Link className="btn" style={myButton} onClick={submitBtn} to={path}>
          {" "}
          Submit
        </Link>
      </div>
    </>
  );
}

export default Password;