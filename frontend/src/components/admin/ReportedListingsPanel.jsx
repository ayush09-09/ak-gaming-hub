import React, { useState, useEffect } from 'react';

const dummyReports = [
  {
    id: 'ID1234',
    reason: 'Fake profile image',
    reportedBy: 'user1@example.com',
    date: '2025-06-29',
  },
  {
    id: 'ID5678',
    reason: 'Wrong level shown',
    reportedBy: 'user2@example.com',
    date: '2025-06-28',
  },
];

const ReportedListingsPanel = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Replace with API call
    setReports(dummyReports);
  }, []);

  const handleAction = (listingId, action) => {
    console.log(`${action.toUpperCase()} action on ${listingId}`);
    setReports(reports.filter((r) => r.id !== listingId));
    // API call can be added here
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-5 mt-6 shadow">
      <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-4">
        Reported Listings
      </h3>

      {reports.length === 0 ? (
        <p className="text-sm text-zinc-600 dark:text-zinc-400">No reports found.</p>
      ) : (
        <ul className="space-y-4">
          {reports.map((report) => (
            <li
              key={report.id}
              className="border p-3 rounded-lg dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800"
            >
              <div className="flex flex-col sm:flex-row justify-between">
                <div className="text-sm text-zinc-800 dark:text-zinc-100">
                  <p><strong>ID:</strong> {report.id}</p>
                  <p><strong>Reason:</strong> {report.reason}</p>
                  <p><strong>Reported By:</strong> {report.reportedBy}</p>
                  <p><strong>Date:</strong> {report.date}</p>
                </div>
                <div className="flex gap-2 mt-3 sm:mt-0">
                  <button
                    onClick={() => handleAction(report.id, 'approve')}
                    className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleAction(report.id, 'remove')}
                    className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReportedListingsPanel;
