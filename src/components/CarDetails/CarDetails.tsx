import css from './CarDetails.module.css';

const CarDetails = () => {
  return (
    <div>
      <div className={css.carTitleBox}>
        <div className={css.carTitle}>Buick Enclave, 2008</div>
        <div className={css.carId}>Id: 9582</div>
      </div>
      <div className={css.shortDetailsBox}>
        <div className={css.addressBox}>
          <svg className={css.iconLocation} width="16" height="16">
            <use href="#icon-location" />
          </svg>
          <div className={css.address}>Kyiv, Ukraine</div>
          <div className={css.mileage}>Mileage: 5858 km</div>
        </div>
        <div className={css.price}>$40</div>
      </div>
      <div className={css.description}>
        The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious
        features.
      </div>
    </div>
  );
};

export default CarDetails;
