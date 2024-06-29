
import React from 'react';
import { faker } from '@faker-js/faker';

const generateCategories = (num) => {
  const categories = [];
  for (let i = 0; i < num; i++) {
    categories.push({
      id: i,
      name: faker.commerce.department(),
      description: faker.lorem.sentence(),
    });
  }
  return categories;
};


const Cotegories = () => {
  const categories = generateCategories(12);

  return (
    <div  className='main-container'>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Categories List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:w-[790px]">
        {categories.map((category) => (
          <div key={category.id} className="border p-4 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-2">{category.name}</h2>
            <p className="">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  
      </div>
  );
}

export  default Cotegories




