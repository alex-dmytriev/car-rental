import { create } from 'zustand';
import { getBrands } from '../services/carApi';

interface CarStore {
  brands: string[];
  fetchBrands: () => Promise<void>;
}

export const useCarStore = create<CarStore>(set => ({
  brands: [],
  fetchBrands: async () => {
    const data = await getBrands();
    set({ brands: data });
  },
}));
