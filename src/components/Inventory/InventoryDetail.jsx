import React from 'react';

const InventoryDetail = () => {
  // Sample static data
  const inventoryItem = {
    id: 'INV123',
    name: 'High-Quality Steel',
    quantity: 150,
    location: 'Warehouse A',
    supplier: 'Steel Supplies Ltd',
    lastUpdated: '2024-09-15',
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Inventory Detail</h1>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="font-semibold">ID:</span>
          <span>{inventoryItem.id}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Name:</span>
          <span>{inventoryItem.name}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Quantity:</span>
          <span>{inventoryItem.quantity}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Location:</span>
          <span>{inventoryItem.location}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Supplier:</span>
          <span>{inventoryItem.supplier}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Last Updated:</span>
          <span>{inventoryItem.lastUpdated}</span>
        </div>
      </div>
    </div>
  );
};

export default InventoryDetail;
