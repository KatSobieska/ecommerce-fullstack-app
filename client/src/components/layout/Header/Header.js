import { Col, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.logo}>
      <Row>
        <Col md={10}>
          <img
            className={`mx-auto  `}
            src={`/images/logo_final.jpg`}
            alt="logo"
          ></img>
        </Col>
        <Col>
          <Navbar className="d-flex justify-content-end">
            <Nav className={styles.nav}>
              <Nav.Link as={Link} to="/">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                Register
              </Nav.Link>
            </Nav>
          </Navbar>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
