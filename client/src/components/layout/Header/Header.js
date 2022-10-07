import NavBar from '../NavBar/NavBar';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.logo}>
      <img
        className={`mx-auto d-block `}
        src={`/images/logo_final.jpg`}
        alt="logo"
      ></img>
      <NavBar />
    </div>
  );
};

export default Header;
