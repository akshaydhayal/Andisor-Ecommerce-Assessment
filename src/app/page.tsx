"use client";
import { useState, useEffect } from "react";
import ProductList from "@/components/ProductList";
import Navbar from "@/components/Navbar";
import { data } from "@/data";

export default function Home() {
  const [products, setProducts] = useState(data);

  useEffect(() => {
    // Load from session storage if available
    const savedProducts = sessionStorage.getItem("products");
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      // Initial data load
      setProducts(
        /* your provided data */
        products
      );
    }
  }, []);

  //@ts-expect-error ignore
  const updateProduct = (updatedProduct) => {
    const newProducts = products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p));
    setProducts(newProducts);
    sessionStorage.setItem("products", JSON.stringify(newProducts));
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductList products={products} onUpdate={updateProduct} />
      </div>
    </main>
  );
}
