import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import DashboardPage from './pages/DashboardPage';
import OrderManagementPage from './pages/OrderManagementPage';
import InventoryManagementPage from './pages/InventoryManagementPage';
import SupplierTrackingPage from './pages/SupplierTrackingPage';
import SupplierDetailPage from './components/Suppliers/SupplierDetail'; 
import ShipmentTrackingPage from './pages/ShipmentTrackingPage';
import ShipmentDetailPage from './components/Shipments/ShipmentDetail';
import UserProfilePage from './pages/ProfilePage';
// import UserSettingsPage from './pages/UserSettingsPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import ManagerDashboardPage from './pages/ManagerDashboardPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/orders" element={<OrderManagementPage />} />
        <Route path="/inventory" element={<InventoryManagementPage />} />
        <Route path="/shipment" element={<ShipmentTrackingPage />} />
        <Route path="/suppliers" element={<SupplierTrackingPage />} />
        <Route path="/suppliers/:id" element={<SupplierDetailPage />} /> 
        <Route path="/shipments/:id" element={<ShipmentDetailPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        {/* <Route path="/settings" element={<UserSettingsPage />} /> */}
        <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
        <Route path="/manager-dashboard" element={<ManagerDashboardPage />} />
      </Routes>
    </Router>
  );
};

export default App;
