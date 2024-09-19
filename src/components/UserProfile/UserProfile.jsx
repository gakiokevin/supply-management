import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <h3 className="text-xl font-semibold mt-4">Orders</h3>
      <ul>
        {user.orders.map(order => (
          <li key={order.id} className="border-b py-2">
            <strong>{order.name}</strong> - {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
