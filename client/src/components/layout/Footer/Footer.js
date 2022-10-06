import { Container } from 'react-bootstrap';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <Container className={`${styles.footer} d-flex justify-content-center`}>
      Copyright © Ruby Star Jewelry 2022
    </Container>
  );
};

export default Footer;
