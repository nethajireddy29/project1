import React from "react";
import AvailableMicrogrid from "../components/AvailableMicrogrid";
import AddMicrogrid from "../components/AddMicrogrid";
import "../consumer/styles.css"
import {Link} from "react-router-dom";
function JoinOrCreateMicroGrid() {
  return (
    <div>
      <h1>Join</h1>

      <Link to = "/ProducerLogin" className = "removeDash"> </Link>
      <Link  className = "removeDash">

        <AvailableMicrogrid />
      </Link>

      <Link className = "removeDash">
        <h1>Create</h1>
        <p>Create Your Own Microgrid</p>
        <AddMicrogrid redirectLogIn={true}/>
      </Link>
    </div>
  );
}

export default JoinOrCreateMicroGrid;
