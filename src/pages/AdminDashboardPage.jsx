import React from 'react';
// Correct import
// import AdminStatistics from '../components/AdminDashboard/AdminStatistics';

import UserManagement from '../components/AdminDashboard/UserManagement';

const adminStats = {
  totalUsers: 500,
  activeUsers: 450,
  inactiveUsers: 50,
};

const AdminDashboardPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
      {/* <AdminStatistics stats={adminStats} /> */}
      <UserManagement />
    </div>
  );
};

export default AdminDashboardPage;
