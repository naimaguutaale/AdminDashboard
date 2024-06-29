import React, { useEffect, useState } from 'react';
import './App.css';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data.slice(0, 51)); // Get the first 49 products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className=" grid grid-cols-4 gap-11 w-[950px] h-11">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-800 p-4 rounded">
            <img
             className="w-[200px] h-[200px]  object-cover mb-4 rounded"
              src={product.image}
              alt={product.title}
            />
            <h4 className="text-white text-xl font-semibold mb-2">
              {product.title.slice(0, 30)}
            </h4>
            <p className="text-white mb-2">${product.price.toFixed(2)}</p>
            <p className="text-white">
              {product.description.slice(0, 20)}...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
