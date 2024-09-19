import React from 'react';
import OrderList from '../components/Orders/OrderList';

const orders = [
  { id: 1, name: 'Order #12345', date: '2024-09-01', status: 'Shipped' },
  { id: 2, name: 'Order #12346', date: '2024-09-05', status: 'Pending' },
  { id: 3, name: 'Order #12347', date: '2024-09-10', status: 'Delivered' },
];

const OrderManagementPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Order Management</h1>
      <OrderList orders={orders} />
    </div>
  );
};

export default OrderManagementPage;
