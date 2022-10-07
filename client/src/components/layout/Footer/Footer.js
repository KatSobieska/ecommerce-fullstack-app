import { Container } from 'react-bootstrap';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <Container className={`${styles.footer}`}>
      <div>
        <ul className={`${styles.icons} d-flex justify-content-center`}>
          <li>
            <a href="#">
              <FontAwesomeIcon
                icon={faFacebook}
                className={styles.icon}
              ></FontAwesomeIcon>{' '}
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon
                icon={faInstagram}
                className={styles.icon}
              ></FontAwesomeIcon>{' '}
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon
                icon={faTwitter}
                className={styles.icon}
              ></FontAwesomeIcon>{' '}
            </a>
          </li>
        </ul>
      </div>
      <div className="d-flex justify-content-center">
        Copyright © Mood Jewellery 2022
      </div>
    </Container>
  );
};

export default Footer;
