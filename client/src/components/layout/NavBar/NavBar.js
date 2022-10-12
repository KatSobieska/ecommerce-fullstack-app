import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <Navbar
      sticky="top"
      expand="sm"
      className={`${styles.navbar} justify-content-end`}
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className={`px-5 my-2 my-lg-0 ${styles.nav}`}>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
