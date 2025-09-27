import { useEffect } from 'react';
import { useCarStore } from '../../store/carStore';
import css from './FilterBox.module.css';
import { Formik, Form, Field } from 'formik';

interface FilterBoxProps {
  brand: string;
  price: string;
  minMileage: string;
  maxMileage: string;
}

const FilterBox = () => {
  const initialValues: FilterBoxProps = {
    brand: '',
    price: '',
    minMileage: '',
    maxMileage: '',
  };

  const { brands, fetchBrands } = useCarStore();

  useEffect(() => {
    fetchBrands();
  }, [fetchBrands]);

  const setFilters = useCarStore(state => state.setFilters);
  const fetchCars = useCarStore(state => state.fetchCars);
  const clearFilters = useCarStore(state => state.clearFilters);

  const handleSubmit = (values: FilterBoxProps) => {
    clearFilters();

    const newFilterValues = {
      brand: values.brand,
      rentalPrice: values.price,
      minMileage: values.minMileage,
      maxMileage: values.maxMileage,
    };

    setFilters(newFilterValues);

    fetchCars({
      ...newFilterValues,
      page: '1',
      limit: '12',
    });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.filterBox}>
        <div className={css.filterItemBox}>
          <label className={css.labels} htmlFor="brand">
            Car Brand
          </label>
          <div className={css.selectWrapper}>
            <Field className={css.dropdown} as="select" name="brand">
              <option value="">Choose a brand</option>
              {brands && brands.map((brand, index) => <option key={index}>{brand}</option>)}
            </Field>
          </div>
        </div>
        <div className={css.filterItemBox}>
          <label className={css.labels} htmlFor="price">
            Price/ 1 hour{' '}
          </label>
          <Field className={`${css.dropdown} ${css.priceDropdown}`} as="select" name="price">
            <option value="">Choose a price</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="70">70</option>
            <option value="80">80</option>
          </Field>
        </div>
        <div className={css.filterItemBox}>
          <label className={css.labels}>Car mileage / km</label>
          <div className={css.mileageRange}>
            <div className={css.inputPrefix}>
              <span className={css.prefix}>From</span>
              <Field className={css.minMilInput} type="text" name="minMileage" />
            </div>
            <div className={css.inputPrefix}>
              <span className={css.prefix}>To</span>
              <Field className={css.maxMilInput} type="text" name="maxMileage" />
            </div>
          </div>
        </div>
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default FilterBox;
