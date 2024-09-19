import React from 'react';
import OrderStatistics from '../components/ManagerDashboard/OrderStatistics';
import ShipmentStatistics from '../components/ManagerDashboard/ShipmentStatistics';

const managerStats = {
  totalOrders: 200,
  completedOrders: 180,
  totalShipments: 250,
  delayedShipments: 15,
};

const ManagerDashboardPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Manager Dashboard</h1>
      <OrderStatistics stats={managerStats} />
      <ShipmentStatistics stats={managerStats} />
    </div>
  );
};

export default ManagerDashboardPage;
