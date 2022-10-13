import { Button, Col, Row } from 'react-bootstrap';
import styles from './OrderSummary.module.scss';

const OrderSummary = () => {
  return (
    <section className={styles.summary}>
      <Row>
        <Col className="d-flex justify-content-center">Summary</Col>
      </Row>
      <Row className={`mt-5 d-flex flex-column ${styles.list}`}>
        <Col className="m-3">Items: BLABLABLA</Col>
        <Col className={`m-3 ${styles.line}`}>Order amount: 10$</Col>

        <Col className={`m-3 ${styles.line}`}>Delivery: 10$</Col>
        <Col className="m-3">Total: 20$</Col>
      </Row>
      <Col className="d-flex justify-content-center">
        <Button type="submit" className={styles.button}>
          Process order
        </Button>
      </Col>
    </section>
  );
};

export default OrderSummary;
