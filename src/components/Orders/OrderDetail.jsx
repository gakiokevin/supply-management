import React from 'react';

const OrderDetail = () => {
  // Sample static data
  const order = {
    id: 'ORD456',
    date: '2024-09-16',
    customer: 'John Doe',
    status: 'Shipped',
    items: [
      { name: 'Truck Load', quantity: 1, price: 5000 },
      { name: 'Insurance', quantity: 1, price: 300 },
    ],
    total: 5300,
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Order Detail</h1>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="font-semibold">Order ID:</span>
          <span>{order.id}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Date:</span>
          <span>{order.date}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Customer:</span>
          <span>{order.customer}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Status:</span>
          <span>{order.status}</span>
        </div>
        <div className="border-t border-gray-300 mt-4 pt-4">
          <h2 className="text-xl font-semibold mb-2">Items</h2>
          {order.items.map((item, index) => (
            <div key={index} className="flex justify-between mb-2">
              <span>{item.name}</span>
              <span>{item.quantity} x ${item.price}</span>
            </div>
          ))}
          <div className="flex justify-between font-semibold mt-2">
            <span>Total:</span>
            <span>${order.total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
