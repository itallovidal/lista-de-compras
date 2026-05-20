import { useContext } from 'react';
import { ProximityContext } from '../contexts/ProximityContext';

export const useProximity = () => {
  const context = useContext(ProximityContext);
  if (!context) {
    throw new Error('useProximity must be used within a ProximityProvider');
  }
  return context;
};
