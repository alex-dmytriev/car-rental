import { create } from 'zustand';
import { getBrands, getCars } from '../services/carApi';
import type { Car, CarQueryParams } from '../types/car';
import toast from 'react-hot-toast';

interface CarFilters {
  brand: string;
  rentalPrice: string;
  minMileage: string;
  maxMileage: string;
}

interface CarStore {
  brands: string[];
  cars: Car[];
  page: number;
  totalPages: number;
  loading: boolean;
  filters: CarFilters;

  fetchBrands: () => Promise<void>;
  fetchCars: (params: CarQueryParams) => Promise<void>;
  loadMoreCars: () => Promise<void>;
  setFilters: (filters: CarFilters) => void;
  clearFilters: () => void;
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
      toast.error(`Failed to fetch cars: ${error}`);
    } finally {
      set({ loading: false });
    }
  },

  loadMoreCars: async () => {
    const { page, totalPages, cars, filters } = get();
    if (page >= totalPages) return;

    set({ loading: true });

    try {
      const response = await getCars({ ...filters, page: String(page + 1), limit: String(12) });
      set({
        cars: [...cars, ...response.cars],
        page: Number(response.page),
        totalPages: response.totalPages,
      });
    } catch (error) {
      toast.error(`Failed to fetch cars: ${error}`);
    } finally {
      set({ loading: false });
    }
  },

  filters: {
    brand: '',
    rentalPrice: '',
    minMileage: '',
    maxMileage: '',
  },

  setFilters: filters => set({ filters }),
  clearFilters: () =>
    set({
      filters: {
        brand: '',
        rentalPrice: '',
        minMileage: '',
        maxMileage: '',
      },
    }),
}));
