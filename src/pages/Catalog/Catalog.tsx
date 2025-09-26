import css from './Catalog.module.css';
import Container from '../../components/Container/Container';
import CarGrid from '../../components/CarGrid/CarGrid';
import FilterBox from '../../components/FilterBox/FilterBox';
import { useCarStore } from '../../store/carStore';
import { useEffect } from 'react';

const Catalog = () => {
  const { fetchCars, loadMoreCars, page, totalPages, loading } = useCarStore();

  useEffect(() => {
    fetchCars({ page: '1', limit: '12' });
  }, [fetchCars]);

  const hasMore = page < totalPages;

  return (
    <div>
      <Container>
        <div className={css.catalogContainer}>
          <FilterBox />
          <CarGrid />
          {hasMore && (
            <button
              className={css.loadMoreBtn}
              type="button"
              onClick={loadMoreCars}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Load more'}
            </button>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Catalog;
