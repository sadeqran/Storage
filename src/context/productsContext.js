import React, { createContext, useContext } from "react";

const ProductsContext = createContext();

export const useProducts = () => {
  return useContext(ProductsContext);
};

export const ProductsProvider = ({ children }) => {
  const products = [
    {
      id: 1,
      product: "کارتریج",
      quantity: 3,
      added_at: "1402/11/11",
    },
    {
      id: 3,
      product: "کیبورد",
      quantity: 3,
      added_at: "1402/11/11",
    },
    {
      id: 4,
      product: "موس",
      quantity: 3,
      added_at: "1402/11/11",
    },
    {
      id: 5,
      product: "سیستم(کیس)",
      quantity: 2,
      added_at: "1402/11/11",
    },
    {
      id: 6,
      product: "مانیتور",
      quantity: 2,
      added_at: "1402/11/11",
    },
    {
      id: 2,
      product: "تلفن",
      quantity: 2,
      added_at: "1402/11/11",
    },
    {
      id: 7,
      product: "هارد",
      quantity: 2,
      added_at: "1402/11/11",
    },
  ];
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};
