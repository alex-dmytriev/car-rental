import css from './Catalog.module.css';
import Container from '../../components/Container/Container';
import Grid from '../../components/CarGrid/CarGrid';

const Catalog = () => {
  return (
    <div>
      <Container>
        <div className={css.catalogContainer}>
          <div className={css.filterBox}>Filter Box</div>
          <Grid />
          <button className={css.loadMoreBtn} type="button">
            Load more
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Catalog;
