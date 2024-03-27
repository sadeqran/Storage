import React from "react";
import { ProductsProvider } from "./context/productsContext";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import User from "./pages/User";
import { KarbarProvider } from "./context/userContext";
import Dashboard from "./pages/dashboard/Dashboard";
import Kala from "./pages/Kala";

const Content = () => {
  return (
    <KarbarProvider>
      <ProductsProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/kala/:productId" element={<Kala />} />
          <Route path="/product" element={<Product />} />
          <Route path="/users" element={<User />} />
        </Routes>
      </ProductsProvider>
    </KarbarProvider>
  );
};

export default Content;
