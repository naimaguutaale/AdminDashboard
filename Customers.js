// src/Customers.js
import React, { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';

const generateCustomers = (num) => {
  const customers = [];
  for (let i = 0; i < num; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email(firstName, lastName);
    const address = faker.address.streetAddress();

    customers.push({
      id: i + 1,
      name: `${firstName} ${lastName}`,
      email: email,
      address: address,
    });
  }
  return customers;
};

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const data = generateCustomers(100);
    setCustomers(data);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-white font-bold mb-4">Customer List</h1>
      <div className="grid grid-cols-1 text-white gap-11 w-[950px] h-11">
        {customers.map((customer) => (
          <div key={customer.id} className="">
            <h2 className="text-lg font-semibold ">{customer.name}</h2>
            <p className=" ">{customer.email}</p>
            <p className="">{customer.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;
