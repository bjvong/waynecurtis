import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function BasicNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src="/img/bigger.svg" height="80rem" alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="md-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">Schedule</Nav.Link>
            <NavDropdown title="Invoices" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Pay Invoice</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Lookup Invoice
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default BasicNav;