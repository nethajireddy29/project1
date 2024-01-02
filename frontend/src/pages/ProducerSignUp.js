import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Add this line to import Bootstrap styles

export default function ProducerSignup() {
  let navigate = useNavigate();
  const [credentials, setcredentials] = useState({
    registrant: "",
    name: "",
    password: "",
    designation: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    // Synthetic Event
    e.preventDefault();
    console.log(credentials);
    try {
      setLoading(true);

      const response = await fetch("/api/createProducerUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          registrant: credentials.registrant,
          name: credentials.name,
          password: credentials.password,
          designation: credentials.designation,
        }),
      });

      const json = await response.json();
      console.log(json);

      if (!json.success) {
        alert(
          "Username or Registrant should have atleast 5 characters and Password should have atleast 8 characters"
        );
      }
      else{
        navigate("/AddProducer")
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
            <label htmlFor="Username" className="form-label">
              UserName
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={credentials.name}
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
          <div className="mb-3">
            <label htmlFor="exampleInputDesignation1" className="form-label">
              Designation
            </label>
            <select
              className="form-select"
              name="designation"
              value={credentials.designation}
              onChange={onChange}
            >
              <option value="">Select Designation</option>
              <option value="Chief Engineer">Chief Engineer</option>
              <option value="Superintendent Engineer">
                Superintendent Engineer
              </option>
              <option value="Divisional Engineer">Divisional Engineer</option>
              <option value="Assistant Director">Assistant Director</option>
              <option value="Assistant Engineer">Assistant Engineer</option>
              <option value="Assistant Sub-Engineer">
                Assistant Sub-Engineer
              </option>
              <option value="Foreman">Foreman</option>
              <option value="Line Inspector">Line Inspector</option>
              <option value="Lineman">Lineman</option>
              <option value="Junior Lineman">Junior Lineman</option>
              <option value="Assistant Lineman">Assistant Lineman</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
          <Link to="/ProducerLogin" className="m-3 btn btn-danger">
            Already a user
          </Link>
        </form>
      </div>
    </>
  );
}
