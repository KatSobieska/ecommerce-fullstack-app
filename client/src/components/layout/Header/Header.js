import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.background}>
      <Container className={styles.logo}>
        <Row className="m-0">
          <Col md={12}>
            <Navbar className="d-flex justify-content-end">
              <Nav className={styles.nav}>
                <Nav.Link>About</Nav.Link>
                <Nav.Link>Contact</Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Sign up
                </Nav.Link>
              </Nav>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
