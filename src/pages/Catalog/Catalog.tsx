import css from './Catalog.module.css';
import Container from '../../components/Container/Container';
import CarGrid from '../../components/CarGrid/CarGrid';
import FilterBox from '../../components/FilterBox/FilterBox';

const Catalog = () => {
  return (
    <div>
      <Container>
        <div className={css.catalogContainer}>
          <FilterBox />
          <CarGrid />
          <button className={css.loadMoreBtn} type="button">
            Load more
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Catalog;
