import { Card, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../../../redux/articlesRedux';
import styles from './Article.module.scss';

const Article = () => {
  const { articleId } = useParams();
  const articleData = useSelector((state) => getArticleById(state, articleId));

  return (
    <section className="d-flex justify-content-center">
      <Row className="mt-5 mb-5">
        <Col>
          <Card style={{ width: '22rem' }}>
            <Card.Body className="">
              <Card.Img
                src={`/images/${articleData.image}`}
                className="mb-4"
                style={{ height: '15rem', objectFit: 'cover' }}
              />
              <Card.Text className={styles.text}>
                <b>Description: </b>
                {articleData.descriptionLong}
              </Card.Text>
              <Card.Text className={styles.text}>
                <b>Author:</b> {articleData.author}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default Article;
