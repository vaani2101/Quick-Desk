import React, { useState } from 'react';
import axios from 'axios';

const NewTicket = () => {
  const [ticket, setTicket] = useState({
    subject: '',
    category: '',
    description: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("subject", ticket.subject);
      formData.append("category", ticket.category);
      formData.append("description", ticket.description);

      const res = await axios.post("http://localhost:5000/create_ticket", formData);
      alert(res.data.message);
      setTicket({ subject: '', category: '', description: '' });
    } catch (error) {
      alert(error.response?.data?.message || "Error creating ticket");
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-indigo-100 to-blue-100">
      <div className="max-w-xl p-8 mx-auto bg-white shadow-lg rounded-xl">
        <h2 className="mb-6 text-2xl font-bold text-indigo-700">📬 Create New Ticket</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Subject"
            value={ticket.subject}
            onChange={(e) => setTicket({ ...ticket, subject: e.target.value })}
            className="w-full p-3 border border-indigo-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Category"
            value={ticket.category}
            onChange={(e) => setTicket({ ...ticket, category: e.target.value })}
            className="w-full p-3 border border-indigo-300 rounded-md"
          />
          <textarea
            placeholder="Description"
            value={ticket.description}
            onChange={(e) => setTicket({ ...ticket, description: e.target.value })}
            className="w-full p-3 border border-indigo-300 rounded-md"
          />
          <button
            type="submit"
            className="px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
          >
            Submit Ticket
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewTicket;
