import React from 'react';
import TicketCard from '../Components/TicketCard';

const dummyTickets = [
  {
    subject: 'Login Issue',
    category: 'Authentication',
    description: 'Unable to log in after password reset.',
    status: 'In Progress',
  },
  {
    subject: 'Payment Failed',
    category: 'Billing',
    description: 'Payment not processed for premium plan.',
    status: 'Open',
  },
  {
    subject: 'UI Bug',
    category: 'Frontend',
    description: 'Button overlap on mobile screens.',
    status: 'Resolved',
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-blue-100 to-purple-100">
      <h2 className="mb-8 text-3xl font-bold text-center text-indigo-800">
        🎫 My Tickets
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dummyTickets.map((ticket, index) => (
          <TicketCard key={index} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
