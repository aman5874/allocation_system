// app/page.tsx

import Link from 'next/link';
import React from 'react';

export default function HomePage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to the Sports Equipment Management System</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <Link href="./student/dashboard" className="block p-6 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
          Student Dashboard
        </Link>
        
        <Link href="./admin/dashboard" className="block p-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Admin Dashboard
        </Link>

        <Link href="/about" className="block p-6 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition">
          About Us
        </Link>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600">Manage and track sports equipment easily and efficiently.</p>
      </div>
    </div>
  );
}
