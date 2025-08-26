import React from "react";
import { useNavigate } from "react-router-dom";

const disputes = [
  { id: "12345", provider: "Spa in Lekki", user: "Sophia Bennett", type: "Billing Dispute", status: "In Progress" },
  { id: "4239", provider: "Babysitter in Ikeji", user: "Ethan Walker", type: "Technical Problem", status: "Resolved" },
  { id: "9203", provider: "Spa in Lekki", user: "Ava Thompson", type: "Billing Dispute", status: "Resolved" },
  { id: "9729", provider: "Nurse Lillian James", user: "Liam Cooper", type: "Technical Problem", status: "Open" },
  { id: "8749", provider: "Doula Funke Adeyemi", user: "Mia Hughes", type: "Billing Dispute", status: "Open" },
];

const statusColors = {
  "In Progress": "bg-orange-100 text-orange-600",
  "Resolved": "bg-green-100 text-green-600",
  "Open": "bg-red-100 text-red-600",
};

function Disputes() {
  const navigate = useNavigate();
  return (
    <div className="p-2 sm:p-4 md:p-8 bg-[#F8F9FB] min-h-screen">
      <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400 mb-2 sm:mb-4">
        <span>Service Providers</span>
        <span>›</span>
        <span className="text-purple-600 font-semibold">Disputes & Issues</span>
      </div>
      <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Disputes & Issues</h2>
      <div className="text-xs text-gray-500 mb-4">Manage and resolve disputes and issues related to service providers.</div>
      <div className="flex flex-wrap gap-2 mb-4 justify-end">
        <button className="bg-gray-100 px-2 sm:px-3 py-2 rounded text-xs">Assign to Me</button>
        <button className="bg-gray-100 px-2 sm:px-3 py-2 rounded text-xs">Status</button>
      </div>
      <div className="bg-white rounded-xl p-2 sm:p-4 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
          <div className="font-semibold text-sm mb-2 sm:mb-0">All Disputes</div>
          <div className="flex gap-2 w-full sm:w-auto">
            <div className="relative flex-1">
              <input className="w-full border rounded px-3 py-2 text-xs" placeholder="Search provider" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><circle cx="7" cy="7" r="5.5" stroke="#BDBDBD"/><path d="M11 11l3 3" stroke="#BDBDBD" strokeLinecap="round"/></svg>
              </span>
            </div>
            <button className="bg-gray-100 px-2 sm:px-3 py-2 rounded text-xs">Filter by: All</button>
          </div>
        </div>
        <div className="overflow-x-auto rounded-xl border border-gray-100">
          <table className="min-w-full text-xs sm:text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-semibold text-gray-500 whitespace-nowrap">Issue ID</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-semibold text-gray-500 whitespace-nowrap">Provider</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-semibold text-gray-500 whitespace-nowrap">User Name</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-semibold text-gray-500 whitespace-nowrap">Issue Type</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-semibold text-gray-500 whitespace-nowrap">Status</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-semibold text-gray-500 whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody>
              {disputes.map((d, idx) => (
                <tr key={d.id} className="border-t border-gray-100">
                  <td className="py-2 sm:py-3 px-2 sm:px-4 whitespace-nowrap">#{d.id}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 whitespace-nowrap">{d.provider}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 whitespace-nowrap">{d.user}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 whitespace-nowrap">{d.type}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${statusColors[d.status]}`}>{d.status}</span>
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 whitespace-nowrap">
                    <button className="bg-purple-600 text-white px-4 py-1 rounded" onClick={() => navigate(`/admin/service-provider/disputes/${d.id}`)}>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination UI (not functional) */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-xs text-gray-500 gap-2">
          <button className="px-2 py-1">&lt; Previous</button>
          <div className="flex gap-1 flex-wrap">
            <button className="w-6 h-6 rounded-full bg-purple-100 text-purple-700">1</button>
            <button className="w-6 h-6 rounded-full hover:bg-purple-100">2</button>
            <span>3</span>
            <span>...</span>
            <span>8</span>
            <span>9</span>
            <button className="w-6 h-6 rounded-full hover:bg-purple-100">10</button>
          </div>
          <button className="px-2 py-1">Next &gt;</button>
        </div>
      </div>
    </div>
  );
}

export default Disputes;
