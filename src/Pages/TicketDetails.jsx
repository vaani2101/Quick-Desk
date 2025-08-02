import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CommentThread from '../components/CommentThread';

const TicketDetail = () => {
  const { id: ticketId } = useParams();
  const [ticket, setTicket] = useState(null);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const API_BASE = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all tickets, find the one with the given ID
        const ticketRes = await axios.get(`${API_BASE}/getTickets`);
        const found = ticketRes.data.tickets?.find(t => t.id === parseInt(ticketId));
        if (!found) return alert("Ticket not found");
        setTicket(found);

        // Fetch comments for this ticket
        const commentsRes = await axios.get(`${API_BASE}/ticket/${ticketId}/comments`);
        setComments(Array.isArray(commentsRes.data) ? commentsRes.data : []);
      } catch (error) {
        console.error("Error loading ticket or comments:", error);
        alert("Failed to load ticket details.");
      }
    };

    fetchData();
  }, [ticketId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    try {
      const formData = new FormData();
      formData.append("author", "You");
      formData.append("role", "User");
      formData.append("message", comment);

      await axios.post(`${API_BASE}/ticket/${ticketId}/comment`, formData);

      const res = await axios.get(`${API_BASE}/ticket/${ticketId}/comments`);
      setComments(res.data);
      setComment('');
    } catch (error) {
      console.error("Error submitting comment:", error);
      alert("Failed to submit comment.");
    }
  };

  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;
    try {
      const res = await axios.put(`${API_BASE}/ticket/${ticketId}/status`, {
        status: newStatus,
      });
      setTicket(res.data.ticket);
    } catch (err) {
      console.error("Failed to update status:", err);
      alert("Failed to update status");
    }
  };

  if (!ticket) return <p className="mt-10 text-center text-gray-500">Loading ticket...</p>;

  return (
    <div className="min-h-screen p-6 bg-gradient-to-bl from-blue-50 to-purple-100">
      <div className="max-w-3xl p-8 mx-auto bg-white shadow-lg rounded-xl">
        <h2 className="mb-4 text-3xl font-bold text-indigo-800">🎫 Ticket: {ticket.subject}</h2>
        <p className="mb-2 text-sm text-gray-500">Category: {ticket.category}</p>
        <p className="mb-6 text-gray-700">{ticket.description}</p>

        <label className="block mb-2 text-sm font-semibold text-indigo-600">Status:</label>
        <select
          className="p-2 mb-8 border border-indigo-300 rounded-md"
          value={ticket.status}
          onChange={handleStatusChange}
        >
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
          <option value="Closed">Closed</option>
        </select>

        <h3 className="mb-4 text-2xl font-semibold text-purple-700">🗨 Conversation</h3>
        <div className="mb-6 space-y-4">
          {comments.length > 0 ? (
            comments.map((c) => <CommentThread key={c.id} comment={c} />)
          ) : (
            <p className="text-gray-500">No comments yet.</p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-4 border border-indigo-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Write your reply..."
            rows={4}
          />
          <button
            type="submit"
            className="self-end px-6 py-2 font-semibold text-white transition rounded-md shadow-md bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90"
          >
            Reply
          </button>
        </form>
      </div>
    </div>
  );
};

export default TicketDetail;
