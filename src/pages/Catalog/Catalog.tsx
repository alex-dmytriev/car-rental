import css from './Catalog.module.css';

const Catalog = () => {
  return (
    <div className={css.catContainer}>
      <div>Filter Bar</div>
      <div>
        <ul>
          <li>
            <p>Car Img</p>
            <p>Car description</p>
            <button>Read More</button>
          </li>
          <li>
            <p>Car Img</p>
            <p>Car description</p>
            <button>Read More</button>
          </li>
          <li>
            <p>Car Img</p>
            <p>Car description</p>
            <button>Read More</button>
          </li>
          <li>
            <p>Car Img</p>
            <p>Car description</p>
            <button>Read More</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Catalog;
