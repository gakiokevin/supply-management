import React from 'react';

const OrderStatistics = ({ stats }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg mb-6">
      <h2 className="text-2xl font-semibold mb-4">Order Statistics</h2>
      <p><strong>Total Orders:</strong> {stats.totalOrders}</p>
      <p><strong>Completed Orders:</strong> {stats.completedOrders}</p>
    </div>
  );
};

export default OrderStatistics;
