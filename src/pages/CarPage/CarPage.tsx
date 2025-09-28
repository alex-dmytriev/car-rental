import Container from '../../components/Container/Container';
import css from './CarPage.module.css';
import { useEffect, useState } from 'react';
import type { Car } from '../../types/car';
import { toast } from 'react-hot-toast';
import { getCarById } from '../../services/carApi';
import CarImage from '../../components/CarImage/CarImage';
import CarSubmitForm from '../../components/CarSubmitForm/CarSubmitForm';
import CarDetails from '../../components/CarDetails/CarDetails';
import RentalConditions from '../../components/RentalConditions/RentalConditions';
import CarSpecs from '../../components/CarSpecs/CarSpecs';
import CarAccessories from '../../components/CarAccessories/CarAccessories';

const CarPage = () => {
  const [car, setCar] = useState<Car | null>(null);
  // const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCarByID = async () => {
      const testID = '5ed1cf8e-d493-459e-9cc6-1a1ca22a1900';

      try {
        const data = await getCarById(testID);
        console.log('Fetched Car: ', data); //! Remove when tested
        setCar(data);
      } catch (err) {
        const errMessage = 'Failed to load Car by ID';
        console.error('Fetch error', err);
        // setError(errMessage);
        toast.error(errMessage);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCarByID();
  }, []);

  return (
    <div>
      <Container>
        <div className={css.carPageContainer}>
          {isLoading && <p>Loading...</p>}
          <div className={css.imgFormColumn}>
            {car && <CarImage img={car.img} alt={`${car.brand} ${car.model}`} />}
            <CarSubmitForm />
          </div>
          <div className={css.detailsColumn}>
            <CarDetails />
            <RentalConditions />
            <CarSpecs />
            <CarAccessories />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CarPage;
