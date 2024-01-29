import React from "react";
import { ProductsProvider } from "./productsContext";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Users from "./Users";
import { KarbarProvider } from "./userContext";
import Dashboard from "./Dashboard";

const Context = () => {
  return (
    <KarbarProvider>
      <ProductsProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Main />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </ProductsProvider>
    </KarbarProvider>
  );
};

export default Context;
