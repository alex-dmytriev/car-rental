import css from './Test.module.css';
import { useEffect, useState } from 'react';
import { getBrands, getCarById, getCars } from '../../services/carApi'; // adjust path if needed
import type { Car } from '../../types/car';

const Test = () => {
  const [brands, setBrands] = useState<string[]>([]);
  const [car, setCar] = useState<Car | null>(null);
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const data = await getBrands();
        console.log('Fetched brands:', data); // ✅ Console output
        setBrands(data); // ✅ Renders on page
      } catch (err) {
        setError('Failed to load brands');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBrands();
  }, []);

  useEffect(() => {
    const fetchCarByID = async () => {
      const testID = '5ed1cf8e-d493-459e-9cc6-1a1ca22a1900';

      try {
        const data = await getCarById(testID);
        console.log('Fetched Car: ', data);
        setCar(data);
      } catch (err) {
        setError('Failed to load Car by ID');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCarByID();
  }, []);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await getCars();
        console.log('Fetched cars:', data); // ✅ Console output
        console.log('API response for getCars:', data);

        setCars(Array.isArray(data.cars) ? data.cars : []); // ✅ Renders on page
      } catch (err) {
        setError('Failed to load car list');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCars();
  }, []);

  return (
    <div>
      <h1>Test Page</h1>

      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className={css.testBox}>
        <h4>Brands Test</h4>
        <ul>
          {brands.map((brand, index) => (
            <li key={index}>{brand}</li>
          ))}
        </ul>
        <h4>CarID Test</h4>
        <ul>
          {car && (
            <>
              <li>Brand: {car.brand}</li>
              <li>Model: {car.model}</li>
              <li>Price: {car.rentalPrice}</li>
            </>
          )}
        </ul>
        <h4>Car List Test</h4>
        <ul>
          {Array.isArray(cars) &&
            cars.map((car, index) => (
              <li key={index}>
                {car.brand} {car.model} — ${car.rentalPrice}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Test;
