import React from "react";

import "../consumer/styles.css";
import { Link } from "react-router-dom";
function ProsumerJoinMicroGrid() {
  return (
    <div>
      <h1>Join</h1>
      <Link to="/ProsumerHome" className="removeDash">
      </Link>
    </div>
  );
}

export default ProsumerJoinMicroGrid;