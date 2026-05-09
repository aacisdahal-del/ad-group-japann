"use client";

import React from 'react';

export default function EnquireHub() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    await fetch("https://formspree.io/f/YOUR_ID", {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-3xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E67E22]"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-3xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E67E22]"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-3xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E67E22]"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-3xl bg-[#E67E22] px-6 py-3 text-white font-bold uppercase tracking-wider transition hover:bg-[#cf6d16]"
      >
        Send Enquiry
      </button>
    </form>
  );
}
