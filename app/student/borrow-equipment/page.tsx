// app/(student)/borrow-equipment/page.tsx

'use client';

import React, { useState, useEffect } from 'react';

interface Equipment {
  id: number;
  name: string;
  description: string;
  condition: string;
  quantity: number;
  imageUrl: string;
}

const BorrowEquipment: React.FC = () => {
  const [equipmentList, setEquipmentList] = useState<Equipment[]>([]);
  const [selectedEquipment, setSelectedEquipment] = useState<number | null>(null);
  const [requestMessage, setRequestMessage] = useState<string>('');

  useEffect(() => {
    // Fetch the available equipment list from the API
    fetch('/api/equipment/list')
      .then((response) => response.json())
      .then((data) => setEquipmentList(data));
  }, []);

  const handleRequestBorrow = async () => {
    if (selectedEquipment) {
      const response = await fetch('/api/equipment/borrow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ equipmentId: selectedEquipment }),
      });

      if (response.ok) {
        setRequestMessage('Your request has been submitted successfully!');
      } else {
        setRequestMessage('Failed to submit request. Please try again later.');
      }
    } else {
      setRequestMessage('Please select an item to borrow.');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Borrow Equipment</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {equipmentList.map((equipment) => (
          <div
            key={equipment.id}
            className={`border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer ${
              selectedEquipment === equipment.id ? 'border-blue-500' : 'border-gray-300'
            }`}
            onClick={() => setSelectedEquipment(equipment.id)}
          >
            <img src={equipment.imageUrl} alt={equipment.name} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-semibold">{equipment.name}</h2>
            <p className="text-gray-600">{equipment.description}</p>
            <p className="text-sm text-gray-500">Condition: {equipment.condition}</p>
            <p className="text-sm text-gray-500">Available Quantity: {equipment.quantity}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <button
          onClick={handleRequestBorrow}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Request to Borrow
        </button>
        {requestMessage && <p className="mt-4 text-lg text-gray-700">{requestMessage}</p>}
      </div>
    </div>
  );
};

export default BorrowEquipment;
