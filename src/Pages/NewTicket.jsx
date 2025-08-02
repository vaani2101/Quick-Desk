import React, { useState } from 'react';
import axios from 'axios';

const NewTicket = () => {
  const [ticket, setTicket] = useState({
    subject: '',
    category: '',
    description: '',
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const formData = new FormData();
    formData.append("subject", ticket.subject);
    formData.append("category", ticket.category);
    formData.append("description", ticket.description);

   const res = await axios.post(`${import.meta.env.VITE_API_URL}/create_ticket`, formData);
    alert(res.data.message);
    setTicket({ subject: '', category: '', description: '' });
  } catch (error) {
    alert(error.response?.data?.message || "Error creating ticket");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-indigo-100 to-blue-100">
      <div className="max-w-xl p-8 mx-auto bg-white shadow-lg rounded-xl">
        <h2 className="mb-6 text-2xl font-bold text-indigo-700">📬 Create New Ticket</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            required
            placeholder="Subject"
            value={ticket.subject}
            onChange={(e) => setTicket({ ...ticket, subject: e.target.value })}
            className="w-full p-3 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          
          <select
            required
            value={ticket.category}
            onChange={(e) => setTicket({ ...ticket, category: e.target.value })}
            className="w-full p-3 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">Select Category</option>
            <option value="Login Issue">Login Issue</option>
            <option value="Payment">Payment</option>
            <option value="Technical Error">Technical Error</option>
            <option value="Other">Other</option>
          </select>

          <textarea
            required
            placeholder="Description"
            value={ticket.description}
            onChange={(e) => setTicket({ ...ticket, description: e.target.value })}
            className="w-full p-3 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            rows={5}
          />

          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-2 text-white rounded-md font-semibold transition-all duration-200 ${
              loading
                ? 'bg-indigo-400 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700 shadow-md'
            }`}
          >
            {loading ? 'Submitting...' : 'Submit Ticket'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewTicket;
