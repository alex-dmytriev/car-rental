import css from './CarDetails.module.css';

interface CarDetailsProps {
  brand: string;
  model: string;
  year: number;
  id: string;
  city: string;
  country: string;
  mileage: number;
  rentalPrice: string;
  description: string;
}

const CarDetails: React.FC<CarDetailsProps> = ({
  brand,
  model,
  year,
  id,
  city,
  country,
  mileage,
  rentalPrice,
  description,
}) => {
  return (
    <div className={css.carDetailsBox}>
      <div className={css.carTitleBox}>
        <h3 className={css.carTitle}>{`${brand} ${model}, ${year}`}</h3>
        <p className={css.carId}>{`Id: ${id}`}</p>
      </div>
      <div className={css.shortDetailsBox}>
        <div className={css.addressBox}>
          <svg className={css.iconLocation} width="16" height="16">
            <use href="#icon-location" />
          </svg>
          <p className={css.address}>
            {city}, {country}
          </p>
          <p className={css.mileage}>{`Mileage: ${mileage} km`}</p>
        </div>
        <p className={css.price}>{`$${rentalPrice}`}</p>
      </div>
      <p className={css.description}>{description}</p>
    </div>
  );
};

export default CarDetails;
