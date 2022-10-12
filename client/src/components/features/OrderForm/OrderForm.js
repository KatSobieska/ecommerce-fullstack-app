import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import styles from './OrderForm.module.scss';
import { useForm } from 'react-hook-form';

const OrderForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();
  return (
    <Container>
      <Row>
        <Col>
          <Form
            onSubmit={validate(handleSubmit)}
            style={{ width: '30rem' }}
            className="m-3"
          >
            <Form.Group>
              <Row>
                <Col>
                  <Form.Label className="mt-3">Name</Form.Label>
                  <Form.Control
                    {...register('name', { required: true })}
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
                    {...register('lastname', { required: true })}
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
                {...register('address', { required: true })}
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
                    {...register('city', { required: true })}
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
                    {...register('zip', { required: true })}
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
                {...register('email', { required: true })}
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
                {...register('box', { required: true })}
                type="checkbox"
                label="Accept terms and conditions"
              />
              {errors.box && (
                <small className="d-block form-text text-danger mt-2">
                  Approval is required
                </small>
              )}
            </Form.Group>
            <Button type="submit" className={styles.button}>
              Submit
            </Button>
          </Form>
        </Col>
        <Col className="justify-content-center">
          <>Order Summary</>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderForm;
