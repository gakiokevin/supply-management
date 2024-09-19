import React from 'react';

const ShipmentStatistics = ({ stats }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Shipment Statistics</h2>
      <p><strong>Total Shipments:</strong> {stats.totalShipments}</p>
      <p><strong>Delayed Shipments:</strong> {stats.delayedShipments}</p>
    </div>
  );
};

export default ShipmentStatistics;
