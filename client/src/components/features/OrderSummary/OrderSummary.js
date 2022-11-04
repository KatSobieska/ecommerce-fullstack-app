import { Col, Row } from "react-bootstrap";
import styles from "./OrderSummary.module.scss";
import { useSelector } from "react-redux";
import { getCartProducts } from "../../../redux/cartRedux";
import { useEffect, useState } from "react";

const OrderSummary = () => {
  const cartData = useSelector(getCartProducts);
  let [cartTotalPrice, setCartTotalPrice] = useState(0);
  let [delivery] = useState(10);
  let [totalOrderAmount] = useState(0);

  useEffect(() => {
    const totalCartCount = () => {
      let cartTotalPrice = 0;
      cartData.map((item) => (cartTotalPrice = item.price + cartTotalPrice));
      setCartTotalPrice(cartTotalPrice);
    };
    totalCartCount();
  }, [cartData]);

  totalOrderAmount = delivery + cartTotalPrice;

  return (
    <section className={styles.summary}>
      <Row>
        <Col className="d-flex justify-content-center">Summary</Col>
      </Row>
      <Row className={`mt-5 d-flex flex-column ${styles.list}`}>
        <Col className="m-3">Items: </Col>
        {cartData.map((cartItem) => (
          <Col className="m-3">
            {cartItem.name} {cartItem.price} $
          </Col>
        ))}
        <Col className={`m-3 ${styles.line}`}>
          Order amount: {cartTotalPrice}$
        </Col>

        <Col className={`m-3 ${styles.line}`}>Delivery: {delivery}$</Col>
        <Col className="m-3">Total: {totalOrderAmount}$</Col>
      </Row>
    </section>
  );
};

export default OrderSummary;
