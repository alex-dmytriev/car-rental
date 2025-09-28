import css from './CarAccessories.module.css';

const CarAccessories = () => {
  return (
    <div>
      <div className={css.listBox}>
        <h3 className={css.listTitle}>Accessories and functionalities:</h3>
        <ul className={css.list}>
          <li className={css.listItem}>
            <svg className={css.iconCheck} width="16" height="16">
              <use href="#icon-check-circle" />
            </svg>
            <p>Leather seats</p>
          </li>
          <li className={css.listItem}>
            <svg width="16" height="16">
              <use href="#icon-check-circle" />
            </svg>
            <p>Panoramic sunroof</p>
          </li>
          <li className={css.listItem}>
            <svg width="16" height="16">
              <use href="#icon-check-circle" />
            </svg>
            <p>Remote start</p>
          </li>
          <li className={css.listItem}>
            <svg width="16" height="16">
              <use href="#icon-check-circle" />
            </svg>
            <p>Blind-spot monitoring</p>
          </li>
          <li className={css.listItem}>
            <svg width="16" height="16">
              <use href="#icon-check-circle" />
            </svg>
            <p>Power liftgate</p>
          </li>
          <li className={css.listItem}>
            <svg width="16" height="16">
              <use href="#icon-check-circle" />
            </svg>
            <p>Premium audio system</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CarAccessories;
