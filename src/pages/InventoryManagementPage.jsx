import React from 'react';
import InventoryList from '../components/Inventory/InventoryList';

const inventoryItems = [
  { id: 1, name: 'Item #1', quantity: 150, location: 'Warehouse A' },
  { id: 2, name: 'Item #2', quantity: 75, location: 'Warehouse B' },
  { id: 3, name: 'Item #3', quantity: 200, location: 'Warehouse C' },
];

const InventoryManagementPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Inventory Management</h1>
      <InventoryList inventoryItems={inventoryItems} />
    </div>
  );
};

export default InventoryManagementPage;
