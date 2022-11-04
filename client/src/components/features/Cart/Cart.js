import { getCartProducts, removeFromCart } from "../../../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import styles from "./Cart.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "../../../redux/usersRedux";

const Cart = () => {
  let [cartTotalPrice, setCartTotalPrice] = useState(0);
  const user = useSelector(getUser);
  const isEmpty = Object.values(user).every((x) => x === null || x === "");

  const dispatch = useDispatch();
  const cartData = useSelector(getCartProducts);

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  useEffect(() => {
    const totalCartCount = () => {
      let cartTotalPrice = 0;
      cartData.map((item) => (cartTotalPrice = item.price + cartTotalPrice));
      setCartTotalPrice(cartTotalPrice);
    };
    totalCartCount();
  }, [cartData]);

  return (
    <section className="mt-5 mb-5">
      {cartData.length >= 1 ? (
        <Container style={{ minHeight: "18.70rem" }}>
          {cartData.map((cartItem, index) => (
            <Row key={index} style={{ height: "10rem" }} className="mb-5">
              <Col xl={3} style={{ height: "10rem" }}>
                <Card
                  style={{ borderRadius: "0", width: "15rem" }}
                  className="mt-2 mb-2"
                >
                  <Card.Img
                    src={`/images/${cartItem.image}`}
                    style={{
                      height: "10rem",

                      objectFit: "cover",
                      borderRadius: "0",
                    }}
                  />
                </Card>
              </Col>
              <Col style={{ height: "10rem" }}>
                <Table>
                  <thead>
                    <tr>
                      <td>
                        <p>
                          <strong>Product: </strong> {cartItem.name}
                        </p>
                        <p>
                          <strong>Price: </strong> {cartItem.price} $
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Description: </strong>{" "}
                          {cartItem.descriptionShort}
                        </p>
                        <p>
                          <strong>Category: </strong>
                          {cartItem.category}
                        </p>
                      </td>
                    </tr>
                  </thead>
                </Table>
                <Row className="d-flex justify-content-end">
                  <Col className="d-flex justify-content-end">
                    <Button
                      className={styles.buttonRemove}
                      onClick={() => handleDelete(cartItem.id)}
                    >
                      Remove
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          ))}
        </Container>
      ) : (
        <Container
          style={{ minHeight: "19.70rem" }}
          className="d-flex justify-content-center"
        >
          <Row>
            <Col>
              <h4>Your cart is empty</h4>
              <iframe
                src="https://giphy.com/embed/giXLnhxp60zEEIkq8K"
                width="200"
                height="200"
                frameBorder="0"
                className="giphy-embed"
                title="gif"
              ></iframe>
              <p>
                <a href="https://giphy.com/gifs/shopping-skeleton-cart-giXLnhxp60zEEIkq8K">
                  <i></i>
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      )}
      <Container className="mt-5">
        <Row className="mb-3">
          <Col className="d-flex justify-content-center">
            <p style={{ fontSize: "27px", fontWeight: "bold" }}>
              Total: {cartTotalPrice} $
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            {isEmpty && (
              <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                You must be logged in to process the order
              </p>
            )}
            {cartData.length >= 1 && !isEmpty && (
              <Link to={"/orderForm"}>
                <Button className={styles.button}>Process order</Button>
              </Link>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cart;
