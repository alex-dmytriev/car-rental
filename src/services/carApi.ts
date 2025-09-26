import axios from 'axios';
import { type Car } from '../types/car';

const axiosAPI = axios.create({
  baseURL: 'https://car-rental-api.goit.global',
});

//* Get list of cars with params
interface CarAPIResponse {
  cars: Car[];
  page: number;
  totalCars: number;
  totalPages: number;
}

interface CarQueryParams {
  brand?: string;
  rentalPrice?: string;
  minMileage?: string;
  maxMileage?: string;
  limit?: string;
  page?: string;
}

export const getCars = async (params?: CarQueryParams): Promise<CarAPIResponse> => {
  const config = {
    params: params ?? {},
  };
  const response = await axiosAPI.get<CarAPIResponse>('/cars', config);
  return response.data;
};

//* Get Brand list
export const getBrands = async (): Promise<string[]> => {
  const response = await axiosAPI.get<string[]>('/brands');
  return response.data;
};

//* Get a car by ID

export const getCarById = async (id: string): Promise<Car> => {
  const response = await axiosAPI.get<Car>(`/cars/${id}`);
  return response.data;
};
