import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from '../components/UserCard';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error("Failed to fetch users:", err));
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-indigo-100 to-blue-200">
      <h1 className="mb-10 text-4xl font-bold text-center text-indigo-800">
        🛠 Admin Panel - User Management
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {users.length > 0 ? (
          users.map((user, index) => (
            <UserCard key={index} user={user} />
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;