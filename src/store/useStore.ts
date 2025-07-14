import { create } from 'zustand';
import { SelectedPage } from '@/shared/types';

interface StoreState {
  selectedPage: SelectedPage;
  setSelectedPage: (page: SelectedPage) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  user: any;
  setUser: (user: any) => void;
  addNotification: (message: string, type: 'success' | 'error' | 'info') => void;
}

export const useStore = create<StoreState>((set) => ({
  selectedPage: SelectedPage.Home,
  setSelectedPage: (page) => set({ selectedPage: page }),
  isAuthenticated: false,
  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
  user: null,
  setUser: (user) => set({ user }),
  addNotification: (message, type) => {
    // Simple console log for now - in a real app this would show toast notifications
    console.log(`${type.toUpperCase()}: ${message}`);
  },
}));