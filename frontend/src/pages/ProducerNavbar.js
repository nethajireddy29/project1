import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import IsAuthenticated from "../hooks/IsAuthenticated";
import { Link, useNavigate } from "react-router-dom";
import ConnectToMetaMask from "../hooks/MetaMaskConnection";
const flatted = require("flatted");
function BasicExample(props) {
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

    // sendDataContract.addProducer("sai",0);
    // const data1 = data.addProducer("sai", 0);

    // console.log(JSON.parse(localStorage.getItem('SendContract')).)
  };
  const LogOut = () => {
    localStorage.removeItem("producerAuthToken");
    navigate("/ProducerLogin");
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/ProducerHome">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Microgrid" id="basic-nav-dropdown">
              <Link>
                <NavDropdown.Item href="/addMicrogrid">
                  AddMicrogrid
                </NavDropdown.Item>
              </Link>
              <Link to="/addBattery">
                <NavDropdown.Item href="/addBattery">
                  Add Battery
                </NavDropdown.Item>
              </Link>
              <Link>
                {" "}
                <NavDropdown.Item href="/addGreenEnergy">
                  Add GreenEnergy
                </NavDropdown.Item>
              </Link>
              {/* <NavDropdown.Divider /> */}
              <Link>
                <NavDropdown.Item href="/addLoad">Add Load</NavDropdown.Item>
              </Link>
              <Link>
                {" "}
                <NavDropdown.Item href="/addGrid">Add Grid</NavDropdown.Item>
              </Link>
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
