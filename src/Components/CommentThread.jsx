import React from 'react';

const CommentThread = ({ comment }) => {
  return (
    <div className="p-4 border-l-4 border-indigo-500 rounded-lg shadow-md bg-white/80 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-indigo-700">{comment.author}</span>
        <span className="text-xs text-gray-500">{new Date(comment.timestamp).toLocaleString()}</span>
      </div>
      <p className="text-gray-800">{comment.message}</p>
    </div>
  );
};

export default CommentThread;
