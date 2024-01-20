
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ProsumerLogin() {
  const [credentials, setcredentials] = useState({
    gst_number: "",
    password: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    // Synthetic Event
    e.preventDefault();
    const response = await fetch("api/ProsumerLogIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gst_number: credentials.gst_number,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert(
        "Registrant should have atleast 5 characters, GST Number should have atleast 14 characters and Password should have atleast 8 characters"
      );
    }
    if (json.success) {
      localStorage.setItem("prosumerAuthToken", json.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/Prosumer/home");
    }
  };
  const onChange = (event) => {
    if (event.target) {
      setcredentials({
        ...credentials,
        [event.target.name]: event.target.value,
      });
    }
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="gst_number" className="form-label">
              GST Number
            </label>
            <input
              type="text"
              className="form-control"
              name="gst_number"
              value={credentials.gst_number}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to="/prosumer/signup" className="m-3 btn btn-danger">
            I'm a new user
          </Link>
        </form>
      </div>
    </>
  );
}