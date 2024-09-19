import React from 'react';

const ShipmentList = ({ shipments }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Shipment List</h2>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Shipment ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Status</th>
            <th className="p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map(shipment => (
            <tr key={shipment.id}>
              <td className="p-2 border">{shipment.id}</td>
              <td className="p-2 border">{shipment.name}</td>
              <td className="p-2 border">{shipment.status}</td>
              <td className="p-2 border">{shipment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShipmentList;
