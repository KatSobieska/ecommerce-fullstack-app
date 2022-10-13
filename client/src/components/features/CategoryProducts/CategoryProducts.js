import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getProductByCategory } from '../../../redux/productsRedux';
import styles from './CategoryProducts.module.scss';

const CategoryProducts = () => {
  const { category } = useParams();
  const productDataByCategory = useSelector((state) =>
    getProductByCategory(state, category),
  );

  return (
    <section className="mt-5 mb-5">
      <Row>
        <Link className={styles.link} to={'/'}>
          <Button className={`mb-2 ${styles.button}`}>
            <FontAwesomeIcon icon={faArrowAltCircleLeft}></FontAwesomeIcon>Back
          </Button>
        </Link>
      </Row>
      <Row className="mt-5 mb-5">
        {productDataByCategory.map((product, index) => (
          <Col xl={3} key={index} className="d-flex justify-content-center">
            <Card
              style={{ width: '18rem', borderRadius: '0' }}
              className={`mt-3  ${styles.cart}`}
            >
              <Card.Img
                src={`/images/${product.image}`}
                style={{
                  height: '15rem',
                  objectFit: 'cover',
                  borderRadius: '0',
                }}
              />
              <Card.Text className={styles.category}>
                {product.category}
              </Card.Text>
              <Card.Body>
                <Card.Text className="d-flex justify-content-center">
                  {product.name}
                </Card.Text>
                <Card.Text className="d-flex justify-content-center">
                  {product.price}
                </Card.Text>
                <Card.Text className={styles.description}>
                  <b>Description: </b>
                  {product.descriptionShort}
                </Card.Text>
                <Link className={styles.link} to={'/' + product.id}>
                  <Button className={styles.button}>Check details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default CategoryProducts;
