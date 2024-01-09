import React, { createContext, useState, useContext } from 'react';

// Create a context
const VariableContext = createContext();

const VariableProvider = ({ children }) => {
  const [globalVariable, setGlobalVariable] = useState(null);

  // Function to update the global variable
  const updateGlobalVariable = (newValue) => {
    setGlobalVariable(newValue);
  };

  // Pass the global variable and update function through the context
  return (
    <VariableContext.Provider value={{ globalVariable, updateGlobalVariable }}>
      {children}
    </VariableContext.Provider>
  );
};

// Custom hook to access the context values
const useGlobalVariable = () => {
  const context = useContext(VariableContext);
  if (!context) {
    throw new Error('useGlobalVariable must be used within a VariableProvider');
  }
  return context;
};

export { VariableProvider, useGlobalVariable };
