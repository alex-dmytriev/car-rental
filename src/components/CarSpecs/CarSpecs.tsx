import css from './CarSpecs.module.css';

const CarSpecs = () => {
  return (
    <div>
      <div className={css.listBox}>
        <h3 className={css.listTitle}>Car Specifications:</h3>
        <ul className={css.list}>
          <li className={css.listItem}>
            <svg width="16" height="16">
              <use href="#icon-calendar" />
            </svg>
            <p>Minimum age: 25</p>
          </li>
          <li className={css.listItem}>
            <svg width="16" height="16">
              <use href="#icon-car" />
            </svg>
            <p>Security deposit required</p>
          </li>
          <li className={css.listItem}>
            <svg width="16" height="16">
              <use href="#icon-fuel-pump" />
            </svg>
            <p>Valid driver’s license</p>
          </li>
          <li className={css.listItem}>
            <svg width="16" height="16">
              <use href="#icon-gear" />
            </svg>
            <p>Engine Size: 3.6L V6</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CarSpecs;
