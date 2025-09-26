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
    brand: 'Choose a brand',
    price: 'Choose a price',
    minMileage: 'From',
    maxMileage: 'To',
  };

  const { brands, fetchBrands } = useCarStore();

  useEffect(() => {
    fetchBrands();
  }, [fetchBrands]);

  console.log('Oh br: ', brands);

  const handleSubmit = () => {}; //TODO: add submit logic here

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
            <Field className={css.minMilInput} type="text" name="minMileage" />
            <Field className={css.maxMilInput} type="text" name="maxMileage" />
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
