import React from 'react';
import OrderStatistics from '../components/Dashboard/OrderStatistics';
import ShipmentStatistics from '../components/Dashboard/ShipmentStatistics';

const dashboardStats = {
  totalOrders: 120,
  completedOrders: 100,
  totalShipments: 150,
  delayedShipments: 10,
};

const DashboardPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      <OrderStatistics stats={dashboardStats} />
      <ShipmentStatistics stats={dashboardStats} />
    </div>
  );
};

export default DashboardPage;
