import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_URL } from "../../../config";
import { logOut } from "../../../redux/usersRedux";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const options = {
      method: "DELETE",
      credentials: "include",
    };
    fetch(`${API_URL}/auth/logout`, options)
      .then(() => {
        dispatch(logOut());
      })
      .catch((error) => {
        console.log(error);
      });

    setTimeout(() => {
      navigate("/");
      window.location.reload(false);
    }, 5000);
  });

  return (
    <Container
      style={{ height: "33.25rem" }}
      className="d-flex align-items-center justify-content-center"
    >
      <Row>
        <Col>
          <Alert variant="success">
            <Alert.Heading>Success!</Alert.Heading>
            <p>You have been succesfully logged out!</p>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default Logout;
