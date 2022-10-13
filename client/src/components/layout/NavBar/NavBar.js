import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faHouse,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { Col, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <Navbar sticky="top" expand="sm" className={`${styles.navbar}`}>
      <Col>
        <img src={`/images/logo_final.jpg`} alt="logo"></img>
      </Col>
      <Col>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className={`px-2 my-2 my-lg-0 `}>
            <Form className="d-flex align-items-center">
              <Form.Control
                type="search"
                className="me-2"
                placeholder="Search"
                aria-label="Search"
              />
            </Form>
            <Nav.Link as={Link} to="/">
              <FontAwesomeIcon icon={faSearch}> </FontAwesomeIcon>
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              <FontAwesomeIcon icon={faHouse} />
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <FontAwesomeIcon icon={faCartShopping}> </FontAwesomeIcon>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/cart"
              className={`d-flex align-items-center justify-content-center m-2 pt-0  ${styles.cartQuantity}`}
            >
              {0}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Col>
    </Navbar>
  );
};

export default NavBar;
