import React from "react";

import "../consumer/styles.css";
import { Link } from "react-router-dom";
import ProsumerAvailable from "../components/ProsumerAvailable";
function ProsumerJoinMicroGrid() {
  return (
    <div>
      <h1>Join</h1>
        <ProsumerAvailable />
    </div>
  );
}

export default ProsumerJoinMicroGrid;