"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Lead {
  id: number;
  name: string;
  email: string;
  serviceType: string;
  date: string;
  message?: string;
  location?: string;
  guests?: string;
}

export default function AdminPortal() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would fetch from your /api/enquire GET route
    async function fetchLeads() {
      try {
        const res = await fetch('/api/enquire'); // Assuming you add a GET handler
        const data = await res.json();
        setLeads(data.reverse()); // Show newest first
      } catch (err) {
        console.error("Failed to load leads");
      } finally {
        setLoading(false);
      }
    }
    fetchLeads();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold text-[#0A192F]">AD GROUP JAPAN</h1>
            <p className="text-gray-500">Business Inquiry Dashboard</p>
          </div>
          <div className="bg-[#E67E22] text-white px-4 py-2 rounded-lg text-sm font-bold">
            ADMIN ACCESS
          </div>
        </header>

        {loading ? (
          <div className="text-center py-20">Loading Enquiries...</div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <table className="w-full text-left">
              <thead className="bg-[#0A192F] text-white">
                <tr>
                  <th className="p-4">Date</th>
                  <th className="p-4">Client</th>
                  <th className="p-4">Service</th>
                  <th className="p-4">Details</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-sm">
                      {new Date(lead.date).toLocaleDateString('en-JP')}
                    </td>
                    <td className="p-4">
                      <div className="font-bold">{lead.name}</div>
                      <div className="text-xs text-gray-400">{lead.email}</div>
                    </td>
                    <td className="p-4">
                      <span className="px-3 py-1 bg-orange-100 text-[#E67E22] rounded-full text-xs font-bold uppercase">
                        {lead.serviceType}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-gray-600 max-w-xs truncate">
                      {lead.message || lead.location || "No additional info"}
                    </td>
                    <td className="p-4">
                      <button className="text-blue-600 hover:underline text-sm font-medium">
                        View Full
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {leads.length === 0 && (
              <div className="text-center py-20 text-gray-400">No enquiries found yet.</div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}