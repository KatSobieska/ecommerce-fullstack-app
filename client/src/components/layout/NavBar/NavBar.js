import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHouse,
  faSearch,
  faTrashCan,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Form, Nav, Navbar, Row, Table } from "react-bootstrap";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartProducts, removeFromCart } from "../../../redux/cartRedux";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [price, setPrice] = useState(0);
  const cartData = useSelector(getCartProducts);
  const dispatch = useDispatch();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  useEffect(() => {
    const totalCartCount = () => {
      let price = 0;
      cartData.map((item) => (price = item.price + price));
      setPrice(price);
    };
    totalCartCount();
  }, [cartData]);

  return (
    <Navbar sticky="top" expand="sm" className={`${styles.navbar}`}>
      <Col>
        <Link to="/">
          <img src={`/images/logo_final.jpg`} alt="logo"></img>
        </Link>
      </Col>
      <Col>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className={`px-0 my-3 my-lg-0 `}>
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
            <Nav.Link>
              <Badge
                badgeContent={cartData.length}
                color="secondary"
                overlap="circular"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <Button
                  style={{
                    width: "2.8rem",
                    height: "2.8rem",
                  }}
                  variant="outline-secondary"
                  className="rounded-circle"
                >
                  <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                </Button>
              </Badge>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {cartData.length ? (
                  <div style={{ width: "24rem" }}>
                    <Table>
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Summary</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartData.map((cartItem, index) => (
                          <tr key={index}>
                            <td>
                              <Link to={"/cart"}>
                                <img
                                  src={`/images/${cartItem.image}`}
                                  alt="cartItem"
                                  style={{ width: "5rem", height: "5rem" }}
                                ></img>
                              </Link>
                            </td>
                            <td>
                              <p>{cartItem.name}</p>
                              <p>Price: {cartItem.price} $</p>
                            </td>
                            <td>
                              <Button
                                className={styles.buttonRemove}
                                onClick={() => handleDelete(cartItem.id)}
                              >
                                <FontAwesomeIcon
                                  icon={faTrashCan}
                                  onClick={() => handleDelete(cartItem.id)}
                                ></FontAwesomeIcon>
                              </Button>
                            </td>
                          </tr>
                        ))}
                        <tr
                          className="text-center"
                          style={{ fontSize: "18px", paddingTop: 10 }}
                        >
                          <td>Total : {price} $</td>
                        </tr>
                      </tbody>
                    </Table>
                    <Row>
                      <Col className="d-flex justify-content-around ">
                        <Link className={styles.link} to={"/allProducts"}>
                          <Button variant="outline-secondary">
                            Continue shopping
                          </Button>
                        </Link>

                        <Link className={styles.link} to={"/cart"}>
                          <Button variant="outline-secondary">
                            Go to cart
                          </Button>
                        </Link>
                      </Col>
                    </Row>
                  </div>
                ) : (
                  <div
                    className="d-flex justify-content-center items-align-center"
                    style={{ paddingLeft: 10, paddingRight: 10 }}
                  >
                    <p style={{ fontSize: 18 }}>Your cart is empty</p>
                    <FontAwesomeIcon
                      icon={faXmark}
                      style={{
                        fontSize: 20,
                        marginLeft: 6,
                      }}
                      onClick={handleClose}
                    ></FontAwesomeIcon>
                  </div>
                )}
              </Menu>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Col>
    </Navbar>
  );
};

export default NavBar;
