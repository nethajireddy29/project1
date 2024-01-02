import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import IsAuthenticated from "../hooks/IsAuthenticated";
import { useNavigate } from "react-router-dom";
function BasicExample(props) {
  const navigate  = useNavigate()
  const isAuthenticated = IsAuthenticated(); // Call the function to get the authentication status

  const LogOut = () => {
    localStorage.removeItem('producerAuthToken');
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
              <NavDropdown.Item href="/addMicrogrid">
                AddMicrogrid
              </NavDropdown.Item>
              <NavDropdown.Item href="/addBattery">
                Add Battery
              </NavDropdown.Item>
              <NavDropdown.Item href="/addGreenEnergy">
                Add GreenEnergy
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="/addLoad">Add Load</NavDropdown.Item>
              <NavDropdown.Item href="/addGrid">Add Grid</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link onClick={props.fetchData}>connect</Nav.Link>
          {IsAuthenticated ? (
            <Nav.Link onClick={LogOut}>Log out</Nav.Link>
          ) : (
            <Nav.Link >Log in</Nav.Link>
          )}
          {/* <Nav.Link o>Login</Nav.Link> */}
          {/* <Nav.Link>Link</Nav.Link> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
