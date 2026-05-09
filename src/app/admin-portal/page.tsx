"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageSquare, 
  TrendingUp, 
  Search, 
  Filter,
  Download,
  CheckCircle2,
  Clock
} from 'lucide-react';

// Mock data structure - In production, fetch this from your cloud source
const MOCK_LEADS = [
  { id: 1, name: "Tanaka Kenji", email: "t.kenji@chiba-res.jp", service: "Real Estate", status: "New", date: "2026-05-08" },
  { id: 2, name: "Sarah Miller", email: "smiller@logistic-hub.com", service: "Logistics", status: "Contacted", date: "2026-05-07" },
  { id: 3, name: "Arjun Dahal", email: "arjun@survey.au", service: "Land Surveying", status: "Closed", date: "2026-05-05" },
];

export default function AdminDashboard() {
  const [leads, setLeads] = useState(MOCK_LEADS);
  const [searchTerm, setSearchTerm] = useState("");

  const stats = [
    { label: "Total Enquiries", value: "128", icon: MessageSquare, color: "text-blue-600" },
    { label: "Conversion Rate", value: "24%", icon: TrendingUp, color: "text-green-600" },
    { label: "Active Leads", value: "12", icon: Users, color: "text-[#E67E22]" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10 font-sans">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-2xl font-black tracking-tighter uppercase italic">
            AD GROUP <span className="text-[#E67E22]">JAPAN</span>
          </h1>
          <p className="text-gray-500 text-sm">Control Tower • Internal Use Only</p>
        </div>
        <button className="flex items-center gap-2 bg-[#0A192F] text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-[#E67E22] transition-colors">
          <Download size={18} /> Export Data
        </button>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                <h3 className="text-3xl font-black mt-1">{stat.value}</h3>
              </div>
              <div className={`p-3 bg-gray-50 rounded-xl ${stat.color}`}>
                <stat.icon size={24} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Leads Table Section */}
      <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
        {/* Table Controls */}
        <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row justify-between gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
            <input 
              type="text" 
              placeholder="Search enquiries..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-[#E67E22]/20"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <button className="p-2 bg-gray-50 rounded-lg text-gray-500 hover:bg-gray-100"><Filter size={20}/></button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Client</th>
                <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Service</th>
                <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Status</th>
                <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Date</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} className="border-b border-gray-50 hover:bg-gray-50/30 transition-colors">
                  <td className="p-4">
                    <div className="font-bold text-sm">{lead.name}</div>
                    <div className="text-xs text-gray-400">{lead.email}</div>
                  </td>
                  <td className="p-4">
                    <span className="text-xs font-semibold px-2.5 py-1 bg-gray-100 rounded-md uppercase">
                      {lead.service}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1.5">
                      {lead.status === "New" && <Clock size={14} className="text-blue-500" />}
                      {lead.status === "Closed" && <CheckCircle2 size={14} className="text-green-500" />}
                      <span className="text-xs font-bold">{lead.status}</span>
                    </div>
                  </td>
                  <td className="p-4 text-xs text-gray-500">{lead.date}</td>
                  <td className="p-4 text-right">
                    <button className="text-[10px] font-black uppercase text-[#E67E22] hover:underline">Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}