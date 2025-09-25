import axios from 'axios';
import { type Car } from '../types/car';

interface CarAPIResponse {
  results: Car[];
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
  const baseURL = 'https://car-rental-api.goit.global';
  const config = {
    params: params ?? {},
  };

  const response = await axios.get<CarAPIResponse>(`${baseURL}/cars`, config);

  return response.data;
};

// const data = await getCars();
// console.log('Full List', data);

// const brandFilter = await getCars({ brand: 'volvo' });
// console.log('Brand Volvo', brandFilter);
