import React from 'react';

const ShipmentDetail = () => {
  // Sample static data
  const shipment = {
    id: 'SHIP789',
    date: '2024-09-17',
    status: 'In Transit',
    origin: 'Warehouse A',
    destination: 'Client Location',
    items: [
      { name: 'Truck Load', quantity: 2 },
      { name: 'Packing Materials', quantity: 100 },
    ],
    expectedDelivery: '2024-09-20',
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Shipment Detail</h1>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="font-semibold">Shipment ID:</span>
          <span>{shipment.id}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Date:</span>
          <span>{shipment.date}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Status:</span>
          <span>{shipment.status}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Origin:</span>
          <span>{shipment.origin}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Destination:</span>
          <span>{shipment.destination}</span>
        </div>
        <div className="border-t border-gray-300 mt-4 pt-4">
          <h2 className="text-xl font-semibold mb-2">Items</h2>
          {shipment.items.map((item, index) => (
            <div key={index} className="flex justify-between mb-2">
              <span>{item.name}</span>
              <span>{item.quantity}</span>
            </div>
          ))}
          <div className="flex justify-between font-semibold mt-2">
            <span>Expected Delivery:</span>
            <span>{shipment.expectedDelivery}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentDetail;
