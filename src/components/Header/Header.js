import './Header.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="/">BookMyShow</Navbar.Brand>
            <Form className="d-flex col-lg">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />   
            </Form>
            <Navbar.Toggle aria-controls="navbarScroll" />

            <NavDropdown title="Link" id="navbarScrollingDropdown" style={{color: "white", margin: "0px 5px"}}>
                  <NavDropdown.Item href="/movies">movies</NavDropdown.Item>
                  <NavDropdown.Item href="/postMovie">
                    post a movie
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
            </NavDropdown>

            <Button variant="outline-success">sign in</Button>
            
        </Container>
      </Navbar>
      <Container fluid style={{background:"black", color:"white"}}>
        klgjkag
      </Container>
    </div>
  );
}

export default Header;
