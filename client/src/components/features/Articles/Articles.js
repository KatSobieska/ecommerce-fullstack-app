import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAllArticles } from '../../../redux/articlesRedux';
import styles from './Articles.module.scss';
import { useSelector } from 'react-redux';

const Articles = () => {
  const articles = useSelector(getAllArticles);

  return (
    <section className="mt-3 mb-3 d-flex justify-content-center">
      <Row className="mt-5 mb-5">
        {articles.map((article, index) => (
          <Col key={index}>
            <Card style={{ width: '22rem' }}>
              <Card.Body>
                <Card.Img
                  src={`/images/${article.image}`}
                  className="mb-4"
                  style={{ height: '10rem', objectFit: 'cover' }}
                />
                <Card.Text className={styles.text}>
                  {article.descriptionShort}
                </Card.Text>
                <Link className={styles.link} to={'/' + article.id}>
                  <Button className={styles.button}>Read more..</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Articles;
