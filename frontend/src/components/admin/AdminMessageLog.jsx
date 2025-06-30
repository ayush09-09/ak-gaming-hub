import React, { useState } from 'react';

const AdminMessageLog = ({ logs = [], onAddNote }) => {
  const [note, setNote] = useState('');

  const handleAdd = () => {
    if (note.trim()) {
      onAddNote(note.trim());
      setNote('');
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-4 mt-6 shadow">
      <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-3">Admin Notes & Logs</h3>

      <div className="space-y-2 max-h-52 overflow-y-auto pr-2">
        {logs.length > 0 ? (
          logs.map((log, i) => (
            <div key={i} className="bg-zinc-100 dark:bg-zinc-800 text-sm px-3 py-2 rounded shadow-sm">
              <span className="text-xs text-zinc-500 mr-2">[{log.date}]</span>
              <span>{log.message}</span>
            </div>
          ))
        ) : (
          <p className="text-sm text-zinc-400">No logs yet.</p>
        )}
      </div>

      <div className="mt-4 flex gap-2">
        <input
          type="text"
          className="flex-1 px-3 py-2 text-sm border dark:bg-zinc-800 rounded focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Write a note (only visible to admin)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AdminMessageLog;
