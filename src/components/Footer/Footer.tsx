import Container from '../Container/Container';
import logo from '../../assets/logo.svg';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <Container>
        <div className={css.footer}>
          <a href="/">
            <img className={css.logo} src={logo} alt="logo" width={104} height={16} />
          </a>
          <p>&copy; RentalCar 2025 </p>
        </div>
      </Container>
    </>
  );
};

export default Footer;
