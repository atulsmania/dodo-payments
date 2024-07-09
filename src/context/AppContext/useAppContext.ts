import { useContext } from 'react';
import { AppContext } from '.';

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useAppContext must be used within a AppContextProvider');
  }
  return ctx;
};
