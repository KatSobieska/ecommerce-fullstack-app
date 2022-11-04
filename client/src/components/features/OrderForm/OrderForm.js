import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import styles from "./OrderForm.module.scss";
import { useForm } from "react-hook-form";
import OrderSummary from "../OrderSummary/OrderSummary";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderForm = () => {
  const [orderStatus, setOrderStatus] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    setOrderStatus(true);
    setTimeout(() => {
      navigate("/");
      window.location.reload(false);
    }, 5000);
  };

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  return (
    <Container>
      {orderStatus === false && (
        <Row className="mb-3">
          <Col className="d-flex justify-content-end">
            <Form
              onSubmit={validate(handleSubmit)}
              style={{ width: "30rem" }}
              className={`m-3 ${styles.form}`}
            >
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label className="mt-3">Name</Form.Label>
                    <Form.Control
                      {...register("name", { required: true })}
                      placeholder="Enter name"
                      className="mb-3"
                    ></Form.Control>
                    {errors.name && (
                      <small className="d-block form-text text-danger mt-2">
                        Name is required
                      </small>
                    )}
                  </Col>
                  <Col>
                    <Form.Label className="mt-3">Last name</Form.Label>
                    <Form.Control
                      {...register("lastname", { required: true })}
                      placeholder="Enter last name"
                      className="mb-2"
                    ></Form.Control>
                    {errors.lastname && (
                      <small className="d-block form-text text-danger mt-2">
                        Last name is required
                      </small>
                    )}
                  </Col>
                </Row>
                <Form.Label className="mt-3">Address</Form.Label>
                <Form.Control
                  {...register("address", { required: true })}
                  placeholder="Enter address"
                  className="mb-2"
                ></Form.Control>
                {errors.address && (
                  <small className="d-block form-text text-danger mt-2">
                    Address is required
                  </small>
                )}
                <Row>
                  <Col>
                    <Form.Label className="mt-3">City</Form.Label>
                    <Form.Control
                      {...register("city", { required: true })}
                      placeholder="Enter city"
                      className="mb-2"
                    ></Form.Control>
                    {errors.city && (
                      <small className="d-block form-text text-danger mt-2">
                        City is required
                      </small>
                    )}
                  </Col>
                  <Col>
                    <Form.Label className="mt-3">Zip</Form.Label>
                    <Form.Control
                      {...register("zip", { required: true })}
                      placeholder="Enter zip"
                      className="mb-2"
                    ></Form.Control>
                    {errors.zip && (
                      <small className="d-block form-text text-danger mt-2">
                        Zip is required
                      </small>
                    )}
                  </Col>
                </Row>
                <Form.Label className="mt-3">Email</Form.Label>
                <Form.Control
                  {...register("email", { required: true })}
                  placeholder="email@example.com"
                  type="email"
                  className="mb-2"
                ></Form.Control>
                {errors.email && (
                  <small className="d-block form-text text-danger mt-2">
                    Email is required
                  </small>
                )}
                <Form.Label className="mt-3">
                  Additional information (optional)
                </Form.Label>
                <Form.Control
                  placeholder="Type here.."
                  as="textarea"
                  rows={3}
                  className="mb-2"
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check
                  {...register("box", { required: true })}
                  type="checkbox"
                  label="Accept terms and conditions"
                />
                {errors.box && (
                  <small className="d-block form-text text-danger mt-2">
                    Approval is required
                  </small>
                )}
              </Form.Group>
              <Col className="d-flex justify-content-end">
                <Button type="submit" className={styles.button}>
                  Process order
                </Button>
              </Col>
            </Form>
          </Col>
          <Col className="d-flex justify-content-end">
            <OrderSummary />
          </Col>
        </Row>
      )}
      {orderStatus === true && (
        <Alert
          variant="success"
          style={{ marginTop: "8rem", marginBottom: "10.75rem" }}
        >
          <Alert.Heading>THANK YOU</Alert.Heading>
          <p>Your order has been processed!</p>
          <hr />
          <p className="mt-5 mb-5">
            In any cases, please contact our support team.
          </p>
        </Alert>
      )}
    </Container>
  );
};

export default OrderForm;
