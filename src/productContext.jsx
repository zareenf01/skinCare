import React, { createContext, useState } from "react";
import axios from "axios";

// Create a Context
export const productContext = createContext();

// Create a Provider component
export const ProductProvider = ({ children }) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from the backend
  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/product/`);
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  return (
    <productContext.Provider value={{ products, loading, fetchData }}>
      {children}
    </productContext.Provider>
  );
};
