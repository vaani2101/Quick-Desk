import React from 'react';
import { useNavigate } from 'react-router-dom';

const TicketCard = ({ ticket }) => {
  const navigate = useNavigate();

  const statusColors = {
    "Open": "bg-green-100 text-green-700",
    "In Progress": "bg-yellow-100 text-yellow-700",
    "Resolved": "bg-blue-100 text-blue-700",
    "Closed": "bg-gray-100 text-gray-700",
  };

  return (
    <div
      onClick={() => navigate(`/ticket/${ticket.id}`)}
      className="cursor-pointer bg-white/80 backdrop-blur-sm shadow-md rounded-xl p-6 transition hover:shadow-lg hover:scale-[1.01]"
    >
      <h3 className="mb-2 text-xl font-bold text-indigo-800">{ticket.subject}</h3>

      <p className="mb-3 text-sm text-gray-600">
        {ticket.description.length > 100
          ? ticket.description.slice(0, 100) + "..."
          : ticket.description}
      </p>

      <div className="flex items-center justify-between mt-2 text-sm">
        <span className={`px-3 py-1 rounded-full ${statusColors[ticket.status]}`}>
          {ticket.status}
        </span>
        <div className="flex items-center gap-1 font-medium text-indigo-700">
          <span>{ticket.category}</span>
          <span className="text-xs">→</span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
