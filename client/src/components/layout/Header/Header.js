import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../../../redux/usersRedux";
import styles from "./Header.module.scss";

const Header = () => {
  const user = useSelector(getUser);
  const isEmpty = Object.values(user).every((x) => x === null || x === "");

  return (
    <div className={styles.background}>
      <Container className={styles.logo}>
        <Row className="m-0">
          <Col md={12}>
            <Navbar className="d-flex justify-content-end">
              <Nav className={styles.nav}>
                <Nav.Link>About</Nav.Link>
                <Nav.Link>Contact</Nav.Link>
                {isEmpty && (
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                )}
                {isEmpty && (
                  <Nav.Link as={Link} to="/register">
                    Sign up
                  </Nav.Link>
                )}
                {!isEmpty && (
                  <Nav.Link as={Link} to="/logout">
                    Logout
                  </Nav.Link>
                )}
              </Nav>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
