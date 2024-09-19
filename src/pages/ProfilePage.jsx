import React from 'react';
import UserProfile from '../components/UserProfile/UserProfile';

const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  orders: [
    { id: 1, name: 'Order #12345', status: 'Shipped' },
    { id: 2, name: 'Order #12346', status: 'Pending' },
  ],
};

const UserProfilePage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Profile</h1>
      <UserProfile user={user} />
    </div>
  );
};

export default UserProfilePage;
