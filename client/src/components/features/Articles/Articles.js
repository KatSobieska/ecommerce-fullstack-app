import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Articles.module.scss';

const Articles = () => {
  return (
    <section className="mt-3 mb-3 d-flex justify-content-center">
      <Row className="mt-5 mb-5">
        <Col>
          <Card style={{ width: '22rem' }}>
            <Card.Body>
              <Card.Img
                src={`/images/bluejew.jpg`}
                className="mb-4"
                style={{ height: '10rem', objectFit: 'cover' }}
              />
              <Card.Text className={styles.text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </Card.Text>
              <Link className={styles.link}>
                <Button className={styles.button}>Read more..</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '22rem' }}>
            <Card.Body>
              <Card.Img
                src={`/images/greenjew.jpg`}
                className="mb-4"
                style={{ height: '10rem', objectFit: 'cover' }}
              />
              <Card.Text className={styles.text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </Card.Text>
              <Link className={styles.link}>
                <Button className={styles.button}>Read more..</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '22rem' }}>
            <Card.Body>
              <Card.Img
                src={`/images/purplejew.jpg`}
                className="mb-4"
                style={{ height: '10rem', objectFit: 'cover' }}
              />
              <Card.Text className={styles.text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </Card.Text>
              <Link className={styles.link}>
                <Button className={styles.button}>Read more..</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default Articles;
