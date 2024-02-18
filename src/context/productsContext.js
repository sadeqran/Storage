import React, { createContext, useContext } from "react";

const ProductsContext = createContext();

export const useProducts = () => {
  return useContext(ProductsContext);
};

export const ProductsProvider = ({ children }) => {
  const products = [
    {
      id: 1,
      product: "44A",
      quantity: 3,
      location: "کمد8",
      added_at: "1402/11/11",
    },
    {
      id: 2,
      product: "79A",
      quantity: 1,
      location: "کمد8",
      added_at: "1402/11/11",
    },
    {
      id: 3,
      product: "85A",
      quantity: 3,
      location: "کمد8",
      added_at: "1402/11/11",
    },
    {
      id: 4,
      product: "107A",
      quantity: 3,
      location: "کمد8",
      added_at: "1402/11/11",
    },
    {
      id: 5,
      product: "725A",
      quantity: 2,
      location: "کمد8",
      added_at: "1402/11/11",
    },
    {
      id: 6,
      product: "737A",
      quantity: 2,
      location: "کمد8",
      added_at: "1402/11/11",
    },
  ];
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};
