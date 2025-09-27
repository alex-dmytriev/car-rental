import { useCarStore } from '../../store/carStore';
import HeartIcon from '../HeartIcon/HeartIcon';
import css from './CarGrid.module.css';

const CarGrid = () => {
  const { cars } = useCarStore();

  const { favorites, toggleFavorite } = useCarStore();

  return (
    <div className={css.catalogBox}>
      <ul className={css.grid}>
        {cars &&
          cars.map(car => {
            const isCarFavorite = favorites.includes(car.id);
            return (
              <li key={car.id} className={css.card}>
                <div className={css.imgBox}>
                  <HeartIcon
                    isActive={isCarFavorite}
                    onClick={() => toggleFavorite(car.id)}
                    className={css.heartIcon}
                  />
                  <img className={css.cardImg} src={car.img} />
                </div>
                <div className={css.brandLine}>
                  <div className={css.bmyBox}>
                    <p className={css.bmyText}>
                      {car.brand} <span className={css.modelSpn}>{car.model}</span>, {car.year}
                    </p>
                  </div>
                  <p>${car.rentalPrice}</p>
                </div>
                <div className={css.addressLine}>
                  <p className={`${css.address} ${css.city}`}>{car.address.split(',')[1].trim()}</p>
                  <p className={css.address}>{car.address.split(',')[2].trim()}</p>
                  <p className={css.address}>{car.rentalCompany}</p>
                </div>
                <div className={css.typeLine}>
                  <p className={`${css.address} ${css.city}`}>{car.type}</p>
                  <p className={css.mileage}>
                    {car.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} km
                  </p>
                </div>
                <button className={css.cardBtn} type="button">
                  Read more
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CarGrid;
