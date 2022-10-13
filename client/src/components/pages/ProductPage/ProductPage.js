import { Button, Card, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../../../redux/productsRedux';
import styles from './ProductPage.module.scss';

const ProductPage = () => {
  const { productId } = useParams();
  const productData = useSelector((state) => getProductById(state, productId));
  console.log('productData', productData);

  return (
    <section>
      <Row className={`mt-3 mb-5 ${styles.root}`}>
        <Col className={`mb-4 d-flex justify-content-end ${styles.photo}`}>
          <Card style={{ border: 'none' }} className="mb-4">
            <Card.Img
              src={`/images/${productData.image}`}
              className="mb-4 "
              style={{ height: '20rem', width: '22rem', objectFit: 'cover' }}
            />
          </Card>
        </Col>
        <Col className="d-flex justify-content-start">
          <Card style={{ border: 'none' }}>
            <Card.Body className="p-0">
              <Card.Text className={styles.text}>{productData.name}</Card.Text>
              <Card.Text className={styles.price}>
                <b>price:</b> {productData.price}
              </Card.Text>
              <Card.Text>{productData.descriptionLong}</Card.Text>
            </Card.Body>
            <Col className="p-0">
              <Link className={styles.link}>
                <Button
                  variant="primary"
                  type="submit"
                  className={styles.button}
                >
                  Add to cart
                </Button>
              </Link>
            </Col>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default ProductPage;
