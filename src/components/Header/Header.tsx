import css from './Header.module.css';
import logo from '../../assets/logo.svg';
import Container from '../Container/Container';

const Header = () => {
  return (
    <div>
      <Container>
        <nav className={css.headerNav}>
          <a href="/">
            <img className={css.logo} src={logo} alt="logo" width={104} height={16} />
          </a>
          <div className={css.navLinks}>
            <a className={css.navItem} href="/">
              Home
            </a>
            <a className={css.navItem} href="/catalog">
              Catalog{' '}
            </a>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Header;
