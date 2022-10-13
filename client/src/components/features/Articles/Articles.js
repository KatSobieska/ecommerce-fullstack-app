import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAllArticles } from '../../../redux/articlesRedux';
import styles from './Articles.module.scss';
import { useSelector } from 'react-redux';

const Articles = () => {
  const articles = useSelector(getAllArticles);

  return (
    <section className={`${styles.header} "mt-5 mb-5 "`}>
      <Row className="mt-5 mb-5 d-flex justify-content-center">
        Read more about jewellery...
      </Row>
      <Row className={`"mt-5 mb-5" ${styles.articles}`}>
        {articles.map((article, index) => (
          <Col key={index} className="p-0 d-flex justify-content-center">
            <Card style={{ width: '22rem', border: 'none' }}>
              <Card.Img
                src={`/images/${article.image}`}
                className="mb-4"
                style={{
                  height: '16rem',
                  objectFit: 'cover',
                  borderRadius: '0',
                }}
              />
              <Card.Body>
                <Card.Text className={styles.text}>
                  {article.descriptionShort}
                </Card.Text>
                <Link className={styles.link} to={'/articles/' + article.id}>
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
