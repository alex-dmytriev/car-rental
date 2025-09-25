import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.homeContainer}>
      <section className={css.heroSection}>
        <div className={css.ctaElements}>
          <h1 className={css.heroHeader}>Find your perfect rental car</h1>
          <h2 className={css.heroSubheader}>
            Reliable and budget-friendly rentals for any journey
          </h2>
          <a className={css.ctaBtn} href="/catalog">
            View Catalog
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
