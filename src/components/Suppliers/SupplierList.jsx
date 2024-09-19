import React from 'react';
import { Link } from 'react-router-dom';

const SupplierList = ({ suppliers }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Supplier List</h2>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Supplier ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Location</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map(supplier => (
            <tr key={supplier.id}>
              <td className="p-2 border">{supplier.id}</td>
              <td className="p-2 border">{supplier.name}</td>
              <td className="p-2 border">{supplier.location}</td>
              <td className="p-2 border">
                <Link to={`/suppliers/${supplier.id}`} className="text-blue-500">View Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupplierList;
