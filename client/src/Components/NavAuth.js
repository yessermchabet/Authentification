import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavAuth=()=>{
    return(
        <Navbar bg="danger" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Authentification</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/Register'>Register</Nav.Link>
            <Nav.Link as={Link} to='/Login'>Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavAuth