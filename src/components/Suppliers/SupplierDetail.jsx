import React from 'react';
import { useParams } from 'react-router-dom';

const supplierDetails = [
  { id: 1, name: 'Supplier A', location: 'City A', contact: '123-456-7890', products: ['Product A1', 'Product A2'] },
  { id: 2, name: 'Supplier B', location: 'City B', contact: '987-654-3210', products: ['Product B1', 'Product B2'] },
  { id: 3, name: 'Supplier C', location: 'City C', contact: '555-555-5555', products: ['Product C1', 'Product C2'] },
];

const SupplierDetail = () => {
  const { id } = useParams();
  const supplier = supplierDetails.find(supplier => supplier.id === parseInt(id));

  if (!supplier) {
    return <div className="p-6">Supplier not found</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h1 className="text-4xl font-bold mb-8">Supplier Detail: {supplier.name}</h1>
        <p className="text-lg"><strong>Location:</strong> {supplier.location}</p>
        <p className="text-lg"><strong>Contact:</strong> {supplier.contact}</p>
        <h2 className="text-2xl font-semibold mt-6">Products</h2>
        <ul className="list-disc list-inside">
          {supplier.products.map((product, index) => (
            <li key={index} className="text-lg">{product}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SupplierDetail;
