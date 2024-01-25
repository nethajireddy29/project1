import React, { useEffect, useState } from "react";
import ProsumerNavbar from "./navbar.js";

function ProsumerMyContracts() {
  const [plans, getPlans] = useState([]);
  useEffect(() => {
    const takingPlans = async () => {
      const response = await fetch("/api/getAllPlans", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          microGridId: 0, // need to take from local Storage
        }),
      });
      const data = await response.json();
      console.log(data);
      getPlans(data);
    };
    takingPlans();
  }, []);
  let img = {
    height: "25vh",
    width: "100%",
    backgroundSize: "cover",
    padding: "15px",
    borderRadius: "40px",
  };
  let cardBody = {
    backgroundColor: "#001c20",
    color: "white",
    borderRadius: "20px",
  };
  let rowdiv = {
    margin: "50px 30px 0 30px",
    display: "flex-row !important",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
  };
  let card = {
    backgroundColor: "rgb(0, 28, 32)",
    //boxShadow: '0 0 20px #001c20',
    borderWidth: "4px",
    borderRadius: "20px",
    borderImage: "linear-gradient(45deg, #005d63, #02ffff, #005d63, #005d63) 1",
  };
  let flexrow={
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  };

  
  return (
    <>
    <div style={{ backgroundColor: '#010c0e', width: '100vw' }} >
    <ProsumerNavbar/>
      <div className="d-flex flex-wrap" style={{...rowdiv, display: 'flex', flexDirection: 'row', gap: '9rem'}}>
        <div className="container">
          <div className="row">
            {plans.map((plan) => (
              <div className="col-4 mb-5" style={{...flexrow}}>
                <div className="card" style={{ width: "20vw", ...card }}>
                  <img style={{ ...img }} src="https://www.eclosio.ong/wp-content/uploads/2018/08/default.png" className="card-img-top" alt="..." />
                  <div className="card-body" style={{ ...cardBody }}>
                    <h5 className="card-title">Units {plan.units}</h5>
                    <p className="card-text">Timespan {plan.timespan}
                    </p>
                  </div>
                </div>
              </div>
          ))}
         </div>
       </div>
      </div>
      </div>
    </>
  );
}

export default ProsumerMyContracts;
