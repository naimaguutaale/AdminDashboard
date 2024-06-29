import React from 'react'
import './App.css'

     // src/Inventory.js
     import { faker } from '@faker-js/faker';
     
     const generateInventory = (num) => {
       const inventory = [];
       for (let i = 0; i < num; i++) {
         inventory.push({
           id: i,
           name:faker.commerce.productName(),
           price: faker.commerce.price(),
           quantity: faker.datatype.number({ min: 1, max: 100 }),
           category: faker.commerce.department(),
         });
       }
       return inventory;
     };
const Inventory = () => {
  
  const inventory = generateInventory(50);
  return (
    <div  className='main-container'>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Inventory List</h1>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Quantity</th>
            <th className="py-2 px-4 border-b">Category</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b">{item.id}</td>
              <td className="py-2 px-4 border-b">{item.name}</td>
              <td className="py-2 px-4 border-b">${item.price}</td>
              <td className="py-2 px-4 border-b">{item.quantity}</td>
              <td className="py-2 px-4 border-b">{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Inventory;

        
        
  
