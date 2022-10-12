import { Col, Container, Row } from 'react-bootstrap';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className={`${styles.footer}`}>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col xs={12} md={5} className="mt-5">
            <div>
              <ul className={`${styles.icons} d-flex`}>
                <li>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className={styles.icon}
                    ></FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className={styles.icon}
                    ></FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className={styles.icon}
                    ></FontAwesomeIcon>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p>Copyright © Mood Jewellery 2022</p>
            </div>
          </Col>
          <Col xs={12} md={3} className="mt-5">
            <h5 className="pb-3">More information</h5>
            <p>About shop</p>
            <p>FAQ</p>
            <p>Contact us</p>
          </Col>
          <Col xs={12} md={2} className="mt-5">
            <h5 className="pb-3">Customer Service</h5>
            <p>Payment methods</p>
            <p>Returns</p>
            <p>Terms and conditions</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
