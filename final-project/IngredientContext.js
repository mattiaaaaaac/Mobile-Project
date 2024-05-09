

import React, { createContext, useContext, useState } from 'react';

const IngredientContext = createContext();

export const useIngredientContext = () => useContext(IngredientContext);

export const IngredientProvider = ({ children }) => {
  const [example, setExample] = useState([
  ]);

  return (
    <IngredientContext.Provider value={{ example, setExample }}>
      {children}
    </IngredientContext.Provider>
  );
};

export default IngredientContext;
