// app/(student)/dashboard/page.tsx

import Link from 'next/link';
import React from 'react';

export default function StudentDashboard() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="./borrow-equipment" legacyBehavior>
          <a className="block p-6 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-600 transition">
            Borrow Equipment
          </a>
        </Link>
        {/* Add other dashboard links and content here */}
      </div>
    </div>
  );
}