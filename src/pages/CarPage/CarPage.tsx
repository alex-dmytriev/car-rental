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
import { useParams } from 'react-router-dom';

const CarPage = () => {
  const [car, setCar] = useState<Car | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchCarByID = async () => {
      if (!id) return;

      try {
        const data = await getCarById(id);
        console.log('Fetched Car: ', data); //! Remove when tested
        setCar(data);
      } catch (err) {
        const errMessage = 'Failed to load Car by ID';
        console.error('Fetch error', err);
        toast.error(errMessage);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCarByID();
  }, [id]);

  const fullAccessories = [...(car?.accessories ?? []), ...(car?.functionalities ?? [])];

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
            {car && (
              <CarDetails
                brand={car?.brand}
                model={car.model}
                year={car.year}
                id={car.id.slice(0, 4)}
                city={car.address.split(',')[1].trim()}
                country={car.address.split(',')[2].trim()}
                mileage={car.mileage}
                rentalPrice={car.rentalPrice}
                description={car.description ?? ''}
              />
            )}

            <div className={css.combiBox}>
              <RentalConditions
                conditions={
                  Array.isArray(car?.rentalConditions)
                    ? car.rentalConditions
                    : car?.rentalConditions
                    ? [car.rentalConditions]
                    : []
                }
              />
              <CarSpecs
                year={car?.year ?? 0}
                type={car?.type ?? 'n/d'}
                fuelConsumption={car?.fuelConsumption ?? '0'}
                engineSize={car?.engineSize ?? 'n/d'}
              />
              <CarAccessories accessories={fullAccessories} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CarPage;
