import { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllCategories,
  loadCategoriesRequest,
} from "../../../redux/categoriesRedux";
import styles from "./Categories.module.scss";

const Categories = () => {
  const categories = useSelector(getAllCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategoriesRequest());
  }, [dispatch]);

  return (
    <section className={`${styles.header} "mt-5 mb-5 "`}>
      <Row className="mt-5 mb-3 d-flex justify-content-center">
        Our collections
      </Row>
      <Row className="mt-3 mb-2">
        {categories.map((category, index) => (
          <Col key={index} className="p-0 d-flex justify-content-center">
            <Card style={{ width: "19rem", border: "none" }} className="mt-3 ">
              <Link to={"/" + category.id}>
                <Card.Img
                  src={`/images/${category.image}`}
                  className="mb-4"
                  style={{
                    height: "15rem",
                    objectFit: "cover",
                    borderRadius: "0",
                  }}
                />
              </Link>
              <Card.Body>
                <Link className={styles.categoryLink} to={"/" + category.id}>
                  <Card.Text>{category.name}</Card.Text>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <Link className={styles.link} to={"/allProducts"}>
          <Card.Text>View all</Card.Text>
        </Link>
      </Row>
    </section>
  );
};

export default Categories;
