'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GlobalContextType {
  // Add global state properties here
  // For example:
  // theme: string;
  // setTheme: (theme: string) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  // Add global state here
  // const [theme, setTheme] = useState('light');

  const value: GlobalContextType = {
    // theme,
    // setTheme,
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};