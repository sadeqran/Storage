import React from "react";
import { ProductsProvider } from "./context/productsContext";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Users from "./pages/Users";
import { KarbarProvider } from "./context/userContext";
import Dashboard from "./pages/dashboard/Dashboard";

const Content = () => {
  return (
    <KarbarProvider>
      <ProductsProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<Product/>} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </ProductsProvider>
    </KarbarProvider>
  );
};

export default Content;
