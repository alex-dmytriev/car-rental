import css from './CarAccessories.module.css';

interface CarAccessoriesProps {
  accessories: string[];
}

const CarAccessories: React.FC<CarAccessoriesProps> = ({ accessories }) => {
  return (
    <div className={css.listBox}>
      <h3 className={css.listTitle}>Accessories and functionalities:</h3>
      <ul className={css.list}>
        {accessories.map((accessory, idx) => (
          <li className={css.listItem} key={idx}>
            <svg className={css.iconCheck} width="16" height="16">
              <use href="#icon-check-circle" />
            </svg>
            <p>{accessory}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarAccessories;
