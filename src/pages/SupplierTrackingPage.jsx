import React from 'react';
import SupplierList from '../components/Suppliers/SupplierList';

const suppliers = [
  { id: 1, name: 'Supplier A', location: 'City A' },
  { id: 2, name: 'Supplier B', location: 'City B' },
  { id: 3, name: 'Supplier C', location: 'City C' },
];

const SupplierTrackingPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Supplier Tracking</h1>
      <SupplierList suppliers={suppliers} />
    </div>
  );
};

export default SupplierTrackingPage;
