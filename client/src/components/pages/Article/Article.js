import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getArticleById } from "../../../redux/articlesRedux";
import styles from "./Article.module.scss";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";

const Article = () => {
  const { id } = useParams();
  const articleData = useSelector((state) => getArticleById(state, id));

  return (
    <section className={styles.article}>
      <Row className="mt-5 d-flex justify-content-start">
        <Col xl={4}>
          <Card
            style={{
              width: "22rem",
              height: "18rem",
              border: "none",
            }}
          >
            <Card.Body className="">
              <Card.Img
                src={`/images/${articleData.image}`}
                className="mb-4"
                style={{
                  height: "15rem",
                  objectFit: "cover",
                  borderRadius: "0",
                }}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={8}>
          <Card style={{ height: "18rem", border: "none" }}>
            <Card.Body>
              <Card.Text className={styles.title}>
                {articleData.title}
              </Card.Text>
              <Card.Text className={styles.text}>
                {articleData.descriptionLong}
              </Card.Text>
              <Card.Text className={styles.text}>
                <b>Author:</b> {articleData.author}
              </Card.Text>
              <Row>
                <Link className={styles.link} to={"/"}>
                  <Button className={styles.button}>
                    <FontAwesomeIcon
                      icon={faArrowAltCircleLeft}
                    ></FontAwesomeIcon>
                    Back
                  </Button>
                </Link>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default Article;
