import { create } from 'zustand';

type ProductMenuState = {
  selectedMenu: string;
  setSelectedMenu: (menu: string) => void;
};

const useProductMenuStore = create<ProductMenuState>((set) => ({
  selectedMenu: 'home',
  setSelectedMenu: (menu: string) => set({ selectedMenu: menu }),
}));

export default useProductMenuStore;