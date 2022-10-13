import { Carousel } from 'react-bootstrap/';
import { useSelector } from 'react-redux';
import { getAllAds } from '../../../redux/adsRedux';
import styles from './CarouselHome.module.scss';

const CarouselHome = () => {
  const adsData = useSelector(getAllAds);
  return (
    <Carousel
      className={styles.carousel}
      indicators={false}
      controls={false}
      variant="dark"
    >
      {adsData.map((ad, index) => (
        <Carousel.Item key={index} className={styles.carousel}>
          <img
            className="d-block justify-content-center w-100"
            src={`images/${ad.image}`}
            alt="Carousel slide"
          />
          <Carousel.Caption className={styles.caption}>
            <h1>We do jewellery</h1>
            <h3>to make women feel beautiful</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselHome;
