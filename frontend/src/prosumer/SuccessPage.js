import React from "react";
function Success() {
  let style = {
    backgroundColor: "#DAFFFB",
    color: "green",
    fontSize: 20,
    textAlign: "center",
    padding: "2%",
    marginTop: "3%",
    marginLeft: "30%",
    heigth: "400px",
    width: "40%",
    borderRadius: "3%",
  };

  return (
    <>
      <div className="welcomeContainer shadow" style={style}>
        <h1> Password confirmed successfully! </h1>
        <br />
      </div>
    </>
  );
}

export default Success;