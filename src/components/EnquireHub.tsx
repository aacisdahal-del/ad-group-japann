"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ServiceType = 'survey' | 'restaurant' | 'grocery' | 'realestate' | 'trading' | 'consultancy' | '';

export default function EnquiryHub() {
  const [service, setService] = useState<ServiceType>('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/enquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        setService('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Base Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input required name="name" type="text" placeholder="Full Name" className="w-full p-4 border-b-2 border-gray-200 focus:border-[#E67E22] outline-none transition-colors bg-transparent" />
          <input required name="email" type="email" placeholder="Email Address" className="w-full p-4 border-b-2 border-gray-200 focus:border-[#E67E22] outline-none transition-colors bg-transparent" />
        </div>

        {/* Step 2: Service Selection */}
        <div className="relative">
          <select 
            required
            name="serviceType"
            onChange={(e) => setService(e.target.value as ServiceType)}
            className="w-full p-4 border-b-2 border-gray-200 appearance-none bg-transparent focus:border-[#E67E22] outline-none cursor-pointer"
          >
            <option value="">Select the Service You Require</option>
            <option value="survey">Land Survey & Property Measurement</option>
            <option value="restaurant">Restaurant & Catering</option>
            <option value="grocery">Halal Shop & Grocery Supply</option>
            <option value="realestate">Real Estate Solutions</option>
            <option value="trading">Import/Export & Trading</option>
            <option value="consultancy">Business Consultancy</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#E67E22]">▼</div>
        </div>

        {/* Step 3: Dynamic Fields based on Animation */}
        <AnimatePresence mode="wait">
          {service && (
            <motion.div
              key={service}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="space-y-6"
            >
              {service === 'survey' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input name="location" placeholder="Property Location (Chiba area)" className="p-4 border border-gray-100 rounded-lg bg-gray-50" />
                  <input name="areaSize" placeholder="Approx Area Size (sqm)" className="p-4 border border-gray-100 rounded-lg bg-gray-50" />
                </div>
              )}

              {service === 'restaurant' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input name="guests" type="number" placeholder="Number of Guests" className="p-4 border border-gray-100 rounded-lg bg-gray-50" />
                  <select name="cuisine" className="p-4 border border-gray-100 rounded-lg bg-gray-50">
                    <option>Nepali/Indian</option>
                    <option>Asian Fusion</option>
                    <option>Halal Catering</option>
                  </select>
                </div>
              )}

              {service === 'trading' && (
                <input name="productType" placeholder="What items are you looking to import/export?" className="w-full p-4 border border-gray-100 rounded-lg bg-gray-50" />
              )}

              <textarea 
                name="message" 
                placeholder="How can we help you specifically?" 
                className="w-full p-4 border border-gray-100 rounded-lg bg-gray-50 h-32"
              ></textarea>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={status === 'loading'}
          className="w-full bg-[#0A192F] text-white p-5 rounded-lg font-bold tracking-widest uppercase hover:bg-[#E67E22] transition-colors disabled:bg-gray-400"
        >
          {status === 'loading' ? 'Processing...' : 'Submit Inquiry'}
        </motion.button>

        {status === 'success' && <p className="text-green-600 font-bold text-center">Thank you! Your inquiry has been sent to the AD Group team.</p>}
      </form>
    </div>
  );
}