import React from 'react';

const roleColors = {
  Admin: 'bg-red-100 text-red-700',
  'Support Agent': 'bg-yellow-100 text-yellow-700',
  Customer: 'bg-green-100 text-green-700',
};

const UserCard = ({ user }) => {
  return (
    <div className="p-6 transition-all duration-300 shadow-lg bg-gradient-to-br from-pink-50 to-purple-100 rounded-xl hover:shadow-2xl hover:scale-105">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-indigo-900">{user.name}</h3>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${roleColors[user.role] || 'bg-gray-100 text-gray-700'}`}
        >
          {user.role}
        </span>
      </div>
      <p className="mb-1 text-sm text-gray-700">📧 <span className="font-medium">{user.email}</span></p>
      <p className="text-sm text-gray-600">Joined on: {user.joinedDate}</p>
    </div>
  );
};

export default UserCard;