import React from 'react';

const statusColor = {
  Open: 'bg-red-100 text-red-600',
  'In Progress': 'bg-yellow-100 text-yellow-700',
  Resolved: 'bg-green-100 text-green-700',
  Closed: 'bg-gray-100 text-gray-600',
};

const TicketCard = ({ ticket }) => {
  return (
    <div className="p-5 transition-transform transform shadow-xl bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl hover:scale-105">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg font-bold text-indigo-900">{ticket.subject}</h3>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColor[ticket.status] || 'bg-gray-100 text-gray-800'}`}
        >
          {ticket.status}
        </span>
      </div>
      <p className="mb-1 text-sm text-gray-800">
        <span className="font-medium text-indigo-600">Category:</span> {ticket.category}
      </p>
      <p className="mb-2 text-sm text-gray-700">{ticket.description}</p>
      <div className="text-right">
        <button className="text-sm font-semibold text-indigo-600 hover:underline">View Details →</button>
      </div>
    </div>
  );
};

export default TicketCard;