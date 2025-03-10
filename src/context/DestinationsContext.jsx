import React, { createContext, useContext } from 'react';
import { destinationsData } from '../data/destinations';

const DestinationsContext = createContext(undefined);

export const useDestinations = () => {
  const context = useContext(DestinationsContext);
  if (!context) {
    throw new Error('useDestinations must be used within a DestinationsProvider');
  }
  return context;
};

export const DestinationsProvider = ({ children }) => {
  // Extract unique categories
  const categories = Array.from(new Set(destinationsData.map(dest => dest.category)));

  const getDestinationById = (id) => {
    return destinationsData.find(dest => dest.id === id) || null;
  };

  const value = {
    destinations: destinationsData,
    categories,
    getDestinationById,
  };

  return (
    <DestinationsContext.Provider value={value}>
      {children}
    </DestinationsContext.Provider>
  );
};
