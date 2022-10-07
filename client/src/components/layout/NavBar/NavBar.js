import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <Navbar className={`${styles.navbar} justify-content-end`}>
      <Nav>
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link as={Link} to="/cart">
          Cart
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
