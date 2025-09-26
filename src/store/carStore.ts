import { create } from 'zustand';
import { getBrands, getCars } from '../services/carApi';
import type { Car, CarQueryParams } from '../types/car';

interface CarStore {
  brands: string[];
  cars: Car[];

  fetchBrands: () => Promise<void>;
  fetchCars: (params: CarQueryParams) => Promise<void>;
}

export const useCarStore = create<CarStore>(set => ({
  brands: [],
  cars: [],
  fetchBrands: async () => {
    const data = await getBrands();
    set({ brands: data });
  },

  fetchCars: async (params: CarQueryParams) => {
    const data = await getCars(params);
    set({ cars: data.cars });
  },
}));
