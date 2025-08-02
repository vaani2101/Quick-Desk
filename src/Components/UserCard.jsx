import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="p-6 transition shadow-md bg-white/80 backdrop-blur-md rounded-xl hover:shadow-lg">
      <h3 className="mb-2 text-xl font-semibold text-indigo-800">{user.name}</h3>
      <p className="mb-1 text-sm text-gray-600">📧 {user.email}</p>
      <p className="text-sm text-gray-600">🛡 Role: <span className="font-medium text-indigo-700">{user.role}</span></p>
    </div>
  );
};

export default UserCard;
