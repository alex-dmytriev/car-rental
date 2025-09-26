import { create } from 'zustand';
import { getBrands, getCars } from '../services/carApi';
import type { Car, CarQueryParams } from '../types/car';

interface CarStore {
  brands: string[];
  cars: Car[];
  page: number;
  totalPages: number;
  loading: boolean;

  fetchBrands: () => Promise<void>;
  fetchCars: (params: CarQueryParams) => Promise<void>;
  loadMoreCars: () => Promise<void>;
}

export const useCarStore = create<CarStore>((set, get) => ({
  brands: [],
  cars: [],
  page: 1,
  totalPages: 1,
  loading: false,

  fetchBrands: async () => {
    const data = await getBrands();
    set({ brands: data });
  },

  fetchCars: async (params: CarQueryParams) => {
    set({ loading: true });
    try {
      const response = await getCars(params);
      set({
        cars: response.cars,
        page: Number(response.page),
        totalPages: response.totalPages,
      });
    } catch (error) {
      console.error('Failed to fetch cars: ', error); //TODO: replace with toast message
    } finally {
      set({ loading: false });
    }
  },

  loadMoreCars: async () => {
    const { page, totalPages, cars } = get();
    if (page >= totalPages) return;

    set({ loading: true });

    try {
      const response = await getCars({ page: String(page + 1), limit: String(12) });
      set({
        cars: [...cars, ...response.cars],
        page: Number(response.page),
        totalPages: response.totalPages,
      });
    } catch (error) {
      console.error('Failed to fetch cars: ', error); //TODO: replace with toast message
    } finally {
      set({ loading: false });
    }
  },
}));
