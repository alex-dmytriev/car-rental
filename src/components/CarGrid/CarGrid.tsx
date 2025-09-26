import css from './CarGrid.module.css';

const CarGrid = () => {
  return (
    <div className={css.catalogBox}>
      <ul className={css.grid}>
        <li className={css.card}>
          <div className={css.imgBox}>
            <p>Like btn</p>
            <p>image</p>
          </div>
          <div className={css.brandLine}>
            <div className={css.bmyBox}>
              <p>
                Brand <span className={css.modelSpn}>Model</span>, year
              </p>
            </div>
            <p>$40</p>
          </div>
          <div className={css.addressLine}>
            <p className={`${css.address} ${css.city}`}>Kyiv</p>
            <p className={css.address}>Ukraine</p>
            <p className={css.address}>rentalCompany</p>
          </div>
          <div className={css.typeLine}>
            <p className={`${css.address} ${css.city}`}>type</p>
            <p className={css.mileage}>mileage</p>
          </div>
          <button className={css.cardBtn} type="button">
            Read more
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CarGrid;
