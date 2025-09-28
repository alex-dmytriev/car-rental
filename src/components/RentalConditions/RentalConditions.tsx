import css from './RentalConditions.module.css';

const RentalConditions = () => {
  return (
    <div>
      <div className={css.listBox}>
        <h3 className={css.listTitle}>Rental Conditions:</h3>
        <ul className={css.list}>
          <li className={css.listItem}>
            <svg className={css.iconCheck} width="16" height="16">
              <use href="#icon-check-circle" />
            </svg>
            <p>Minimum age: 25</p>
          </li>
          <li className={css.listItem}>
            <svg width="16" height="16">
              <use href="#icon-check-circle" />
            </svg>
            <p>Security deposit required</p>
          </li>
          <li className={css.listItem}>
            <svg width="16" height="16">
              <use href="#icon-check-circle" />
            </svg>
            <p>Valid driver’s license</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RentalConditions;
