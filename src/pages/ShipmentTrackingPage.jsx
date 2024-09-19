import React from 'react';
import ShipmentList from '../components/Shipments/ShipmentList';

const shipments = [
  { id: 1, name: 'Shipment #001', status: 'In Transit', date: '2024-09-01' },
  { id: 2, name: 'Shipment #002', status: 'Delivered', date: '2024-09-05' },
  { id: 3, name: 'Shipment #003', status: 'Pending', date: '2024-09-10' },
];

const ShipmentTrackingPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Shipment Tracking</h1>
      <ShipmentList shipments={shipments} />
    </div>
  );
};

export default ShipmentTrackingPage;
