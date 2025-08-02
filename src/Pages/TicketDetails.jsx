import React from 'react';
import CommentThread from '../Components/CommentThread';

const dummyComments = [
  {
    author: 'Priya Sharma',
    message: 'Thanks for reporting. We’re looking into this.',
    timestamp: '2025-08-01 10:30 AM',
    role: 'Agent',
  },
  {
    author: 'Ravi Mehta',
    message: 'Following up. Still not resolved.',
    timestamp: '2025-08-02 9:15 AM',
    role: 'Customer',
  },
];

const TicketDetail = () => {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="max-w-2xl p-6 mx-auto bg-white shadow-lg rounded-xl">
        <h2 className="mb-4 text-2xl font-bold text-indigo-700">Ticket: Login Issue</h2>
        <p className="mb-2 text-sm text-gray-600"><strong>Category:</strong> Authentication</p>
        <p className="mb-4 text-gray-700">User is unable to log in even after resetting the password.</p>

        <div className="space-y-4">
          {dummyComments.map((c, i) => (
            <CommentThread key={i} comment={c} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketDetail;
