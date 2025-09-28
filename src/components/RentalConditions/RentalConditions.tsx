import css from './RentalConditions.module.css';

interface RentalConditionsProps {
  conditions: string[];
}

const RentalConditions: React.FC<RentalConditionsProps> = ({ conditions }) => {
  return (
    <div className={css.rentalConditionsBox}>
      <div className={css.listBox}>
        <h3 className={css.listTitle}>Rental Conditions:</h3>
        <ul className={css.list}>
          {conditions.map((condition, idx) => (
            <li className={css.listItem} key={idx}>
              <svg className={css.iconCheck} width="16" height="16">
                <use href="#icon-check-circle" />
              </svg>
              <p> {condition} </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RentalConditions;
