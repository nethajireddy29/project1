import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Add this line to import Bootstrap styles

export default function ProsumerSignup() {
  let navigate = useNavigate();
  const [credentials, setcredentials] = useState({
    registrant: "",
    gst_number: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    // Synthetic Event
    e.preventDefault();
    console.log(credentials);
    try {
      setLoading(true);

      const response = await fetch("api/createProsumerUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          registrant: credentials.registrant,
          gst_number: credentials.gst_number,
        }),
      });

      const json = await response.json();
      console.log(json);

      if (!json.success) {
        alert(
          "Registrant should have atleast 5 characters, GST Number should have atleast 14 characters and Password should have atleast 8 characters"
        );
      } else {
        navigate("/addProsumer");
      }
    } catch (error) {
      console.error("Fetch error:", error);

      alert(
        "An error occurred while submitting the form. Please try again later."
      );
    } finally {
      setLoading(false);
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
            <label htmlFor="Username1" className="form-label">
              Registrant
            </label>
            <input
              type="text"
              className="form-control"
              name="registrant"
              value={credentials.registrant}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="GST Number" className="form-label">
              GST Number
            </label>
            <input
              type="text"
              id="gst_number"
              className="form-control"
              name="gst_number"
              value={credentials.gst_number}
              onChange={onChange}
            />
          </div>
          {/* <div className="mb-3">
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
          </div> */}
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
          <Link to="/ProsumerLogin" className="m-3 btn btn-danger">
            Already a user
          </Link>
        </form>
      </div>
    </>
  );
}