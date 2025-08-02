import React from 'react';

const CommentThread = ({ comments }) => {
  return (
    <div className="mt-4 space-y-3">
      {comments.map((c, idx) => (
        <div key={idx} className="bg-gray-100 p-3 rounded">
          <strong>{c.author}</strong>
          <p>{c.text}</p>
          <small className="text-gray-500">{c.timestamp}</small>
        </div>
      ))}
    </div>
  );
};

export default CommentThread;
