'use client';

import React, { useState } from 'react';
import LeadSourceModal from '@/components/LeadSourceModal';

export default function TestPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <button 
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 font-medium"
      >
        Open Survey Modal
      </button>

      <LeadSourceModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
