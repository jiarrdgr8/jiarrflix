import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function NavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">JiarrFlix</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Browse</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Find movies, TV shows or more"
              className="me-2"
              aria-label="Search"
              style={{ minWidth: '260px'}}
            />
            <Button variant="outline-dark" className='col-sm-3' style={{ maxWidth: '80px'}}>Register</Button>
            <Button variant="light" className='col-sm-3' style={{ maxWidth: '80px'}}>Sign in</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
  );
}

export default NavBar;