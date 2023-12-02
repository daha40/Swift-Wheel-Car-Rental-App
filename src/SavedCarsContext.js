import React, { createContext, useContext, useState } from 'react';

const SavedCarsContext = createContext();

export const SavedCarsProvider = ({ children }) => {
  const [savedCars, setSavedCars] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);


  const toggleSavedCar = (carId) => {
    setSavedCars((prevSavedCars) => {
      if (prevSavedCars.includes(carId)) {
        return prevSavedCars.filter((savedId) => savedId !== carId);
      } else {
        return [...prevSavedCars, carId];
      }
    });
  };

  const clearSavedCars = () => {
    setSavedCars([]);
  };


  const TheDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <SavedCarsContext.Provider value={{ savedCars, toggleSavedCar, clearSavedCars, TheDarkMode, isDarkMode }}>
      {children}
    </SavedCarsContext.Provider>
  );
};

export const useSavedCars = () => {
  const context = useContext(SavedCarsContext);
  if (!context) {
    throw new Error('useSavedCars must be used within a SavedCarsProvider');
  }
  return context;
};
