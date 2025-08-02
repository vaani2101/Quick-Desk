import React from 'react';
import UserCard from '../Components/UserCard';

const dummyUsers = [
  {
    name: 'Aarav Gupta',
    email: 'aarav@example.com',
    role: 'Admin',
    joinedDate: '2024-01-12',
  },
  {
    name: 'Priya Sharma',
    email: 'priya@example.com',
    role: 'Support Agent',
    joinedDate: '2024-04-18',
  },
  {
    name: 'Ravi Mehta',
    email: 'ravi@example.com',
    role: 'Customer',
    joinedDate: '2025-02-27',
  },
];

const AdminPanel = () => {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-indigo-100 to-blue-200">
      <h1 className="mb-10 text-4xl font-bold text-center text-indigo-800">
        🛠 Admin Panel - User Management
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dummyUsers.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
