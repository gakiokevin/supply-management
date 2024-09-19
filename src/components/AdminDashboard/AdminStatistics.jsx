import React from 'react';

const AdminStatistics = ({ stats }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg mb-6">
      <h2 className="text-2xl font-semibold mb-4">Admin Statistics</h2>
      <p><strong>Total Users:</strong> {stats.totalUsers}</p>
      <p><strong>Active Users:</strong> {stats.activeUsers}</p>
      <p><strong>Inactive Users:</strong> {stats.inactiveUsers}</p>
    </div>
  );
};

export default AdminStatistics;
