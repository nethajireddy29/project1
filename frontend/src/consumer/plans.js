
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import ConsumerNavbar from "./navbar";

export default function ConsumerPlans(props) {
  const [plans,setPlans] = useState([]);
  let img={
    height: "25vh",
    width: "100%",
    backgroundSize: "cover",
    padding: '15px',
    borderRadius: '40px',
  }
  let cardBody={
    backgroundColor:'#001c20', 
    color: 'white',
    borderRadius: '20px'
  }
  let rowdiv={
    margin: '50px 30px 0 30px',
    display: 'flex-row !important',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem'
  }
  let card={
    backgroundColor: 'rgb(0, 28, 32)',
    //boxShadow: '0 0 20px #001c20',
    borderWidth: '4px',
    borderRadius: '20px',
    borderImage: 'linear-gradient(45deg, #005d63, #02ffff, #005d63, #005d63) 1',
  }

  const BuyButton = ({ buttonText }) => {
    const [buttonStyles, setButtonStyles] = useState({
      border: 'none',
      width: '150px',
      height: '40px',
      borderRadius: '3em',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '12px',
      background: '#005d63',
      cursor: 'pointer',
      transition: 'all 450ms ease-in-out',
    });
    const [textStyles, setTextStyles] = useState({
      fontWeight: '600',
      color: '#02ffff',
      fontSize: 'medium',
    });
    const handleHover = () => {
      setButtonStyles((prevStyles) => ({
        ...prevStyles,
        background: 'linear-gradient(0deg, #02ffff, #005d63)',
        transform: 'translateY(-2px)',
      }));
      setTextStyles((prevStyles) => ({
        ...prevStyles,
        color: 'white',
      }));
    };
    const handleLeave = () => {
      setButtonStyles((prevStyles) => ({
        ...prevStyles,
        background: '#005d63',
        transform: 'translateY(0)',
      }));
      setTextStyles((prevStyles) => ({
        ...prevStyles,
        color: '#02ffff',
      }));
    };
    return (
      <button
        className="btn"
        style={buttonStyles}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <span className="text" style={textStyles}>
          {buttonText}
        </span>
      </button>
    );
  };

  let favIcon = {
    color: "#ffffff",
  }
  const handleOnCart = () => {
    setColor("#B6D8EB");
  };
  let buyCart = {
    height: "6vh",
    width: "40px",
    borderRadius: "25%",
    backgroundColor: "#A6A6A6",
    textAlign: "center",
    padding: "2% 2% 0px 0px",
    margin: "13px 20px 0px auto",
  };
  const [color, setColor] = useState("#DDF2FD");
  async function sendDataToServer(name, microid, units, amount) {
    try {
      // ... (your existing code for sending data to the server)
      const response = await fetch(
        "http://localhost:3001/api/createTransactionBills",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            microid: microid,
            units: units,
            amount: amount,
          }),
        },
      );
      const responseData = await response.json();
      // Await the response text

      console.log("Server response:", responseData);
    } catch (error) {
      console.error("Error sending data to the server:", error);
      // Handle errors, e.g., show an error message to the user
    }
  }

  async function purchaseEnergy(value) {
    console.log(props);
    const ans = await props.connect.purchaseEnergy(value);
    const view = await props.connect.address_Consumer(
      "0x5c4813250dd228f7b94DFaeB315aEA66C66bBEA4",
    );
    console.log("microid", 1);
    console.log(view[2].toNumber());
    console.log(view[3].toNumber());
    sendDataToServer(view[0], view[1], view[2].toNumber(), view[3].toNumber());
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/getAllPlans", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({})
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json(); // await the promise resolution
        console.log("Data from server:", data);
        setPlans(data); // assuming 'data' is the array of plans
      } catch (error) {
        console.error("Error fetching plans:", error);
        // Handle errors, e.g., show an error message to the user
      }
    };
  
    fetchData();
  }, []);
  // end of CSS

  return (
    <>
      <div
        style={{
          height: "91vh",
          padding: "3%",
          paddingTop: "0.9%",
          backgroundColor: '#010c0e'
        }}
      >
        <ConsumerNavbar/>
        <div style={{ padding: 10 }}>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for electric plans..."
              style={{ borderRadius: 20, backgroundColor: "#005d63", border:'none', color: '#02ffff', paddingLeft: '30px'}}
              aria-label="Search"
            />
            <i className="material-icons" style={{fontSize:"25px", color:'#02ffff', padding:'8px 0 8px 0'}}>search</i>
            <div
              onChange={handleOnCart}
              style={{
                backgroundColor: { color },
                height: "6vh",
                width: "3%",
                textAlign: "center",
                borderRadius: "100%",
                padding: "6px",
              }}
            >
              <Link to="/carts">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{ fontSize: '18px', color: "#02ffff", paddingTop: "5px" }}
                />
              </Link>
            </div>
          </form>
        </div>

        {/* next */}
        <div style={{...rowdiv, display: 'flex', flexDirection: 'row', gap: '9rem'}}>
        {plans.map((plan)=>(
    
                  <div className="card" style={{width: '30rem', ...card}}>
                      <img style={{...img}} src="https://www.eclosio.ong/wp-content/uploads/2018/08/default.png" className="card-img-top" alt="..."/>
                      <div className="card-body" style={{...cardBody}}>
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <BuyButton buttonText="Buy Now" />
                      </div>
                  </div>
))}
</div>
        </div>
    </>
  );
}