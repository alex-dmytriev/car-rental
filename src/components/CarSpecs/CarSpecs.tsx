import css from './CarSpecs.module.css';

interface CarSpecsProps {
  year: number;
  type: string;
  fuelConsumption: string;
  engineSize: string;
}

const CarSpecs: React.FC<CarSpecsProps> = ({ year, type, fuelConsumption, engineSize }) => {
  return (
    <div className={css.listBox}>
      <h3 className={css.listTitle}>Car Specifications:</h3>
      <ul className={css.list}>
        <li className={css.listItem}>
          <svg width="16" height="16">
            <use href="#icon-calendar" />
          </svg>
          <p>{`Year: ${year}`}</p>
        </li>
        <li className={css.listItem}>
          <svg width="16" height="16">
            <use href="#icon-car" />
          </svg>
          <p>{`Type: ${type}`}</p>
        </li>
        <li className={css.listItem}>
          <svg width="16" height="16">
            <use href="#icon-fuel-pump" />
          </svg>
          <p>{`Fuel Consumption: ${fuelConsumption}`}</p>
        </li>
        <li className={css.listItem}>
          <svg width="16" height="16">
            <use href="#icon-gear" />
          </svg>
          <p>{`Engine Size: ${engineSize}`}</p>
        </li>
      </ul>
    </div>
  );
};

export default CarSpecs;
