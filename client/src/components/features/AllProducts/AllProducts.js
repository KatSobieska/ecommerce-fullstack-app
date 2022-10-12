import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../../../redux/productsRedux';
import styles from './AllProducts.module.scss';

const AllProducts = () => {
  const products = useSelector(getAllProducts);
  return (
    <section className="mt-5 mb-5 ">
      <Row>
        <Link className={styles.link} to={'/'}>
          <Button className={styles.button}>
            <FontAwesomeIcon icon={faArrowAltCircleLeft}></FontAwesomeIcon>Back
          </Button>
        </Link>
      </Row>
      <Row>
        {products.map((product, index) => (
          <Col key={index}>
            <Card style={{ width: '18rem' }} className="mt-2 mb-2">
              <Card.Body>
                <Card.Img
                  src={`/images/${product.image}`}
                  style={{ height: '10rem', objectFit: 'cover' }}
                />
                <Card.Text className={styles.category}>
                  {product.category}
                </Card.Text>
                <Card.Text className={styles.productName}>
                  {product.name}
                </Card.Text>
                <Card.Text className={styles.price}>{product.price}</Card.Text>
                <Link className={styles.link} to={'/'}>
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

export default AllProducts;
