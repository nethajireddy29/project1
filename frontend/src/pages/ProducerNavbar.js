import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import IsAuthenticated from "../hooks/IsAuthenticated.js";
import { Link, useNavigate } from "react-router-dom";
import ConnectToMetaMask from "../hooks/MetaMaskConnection";
const flatted = require("flatted");
function BasicExample(props) {
  let textDeco = {
    textDecoration: "none",
    color: "black",
  };

  const navigate = useNavigate();
  const isAuthenticated = IsAuthenticated(); // Call the function to get the authentication status
  console.log("render of navbar");
  const connectMetaMask = async () => {
    const { sendDataContract, getDataContract, metaMaskAddres } =
      await ConnectToMetaMask();
    localStorage.setItem("SendContract", flatted.stringify(sendDataContract));
    localStorage.setItem("GetContract", flatted.stringify(getDataContract));
    localStorage.setItem("metaMaskAddres", metaMaskAddres);
    const data = flatted.parse(localStorage.getItem("SendContract"));
    console.log(data);
  };
  const LogOut = () => {
    localStorage.removeItem("producerAuthToken");
    navigate("/ProducerLogin");
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to="/ProducerHome" style={textDeco}>
            Home
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" style={textDeco}>
                Link
              </Link>
            </Nav.Link>

            <NavDropdown title="Microgrid" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/addMicrogrid" style={textDeco}>
                  AddMicrogrid
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/addBattery" style={textDeco}>
                  Add Battery
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
              
                <Link to="/addGreenEnergy" style={textDeco}>
                  Add GreenEnergy
                </Link>
           </NavDropdown.Item>

              {/* <NavDropdown.Divider /> */}

              <NavDropdown.Item>
                <Link to="/addLoad" style={textDeco}>
                  Add Load
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
              
                <Link to="/addGrid" style={textDeco}>
                  Add Grid
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link onClick={connectMetaMask}>connect</Nav.Link>
          {IsAuthenticated ? (
            <Nav.Link onClick={LogOut}>Log out</Nav.Link>
          ) : (
            <Nav.Link>Log in</Nav.Link>
          )}
          {/* <Nav.Link o>Login</Nav.Link> */}
          {/* <Nav.Link>Link</Nav.Link> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
