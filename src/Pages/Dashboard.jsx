import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TicketCard from '../components/TicketCard';

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = `${import.meta.env.VITE_API_URL}/getTickets`;

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await axios.get(API_URL);
        setTickets(res.data.tickets || []);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch tickets.');
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  const filteredTickets =
    filter === 'All'
      ? tickets
      : tickets.filter(ticket => ticket.status === filter);

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-blue-50 to-purple-100">
      <h2 className="mb-6 text-3xl font-extrabold text-center text-indigo-800">
        🎫 My Tickets
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {['All', 'Open', 'In Progress', 'Resolved', 'Closed'].map(status => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-full font-medium shadow-md transition ${
              filter === status
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-indigo-700 border border-indigo-300'
            } hover:bg-indigo-500 hover:text-white`}
          >
            {status}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Loading tickets...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : filteredTickets.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTickets.map((ticket, index) => (
            <TicketCard key={index} ticket={ticket} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No tickets found.</p>
      )}
    </div>
  );
};

export default Dashboard;
