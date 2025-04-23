// frontend/src/pages/Claims.js
import React, { useState } from 'react';
import useAuthRedirect from '../hooks/useAuthRedirect';
export default function Claims() {
  useAuthRedirect();
  const [access, setAccess] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ claimId: '', lastName: '' });
  const [claimData, setClaimData] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://18.204.75.139:3000/api/claims');
      const data = await res.json();
      const match = data.find(
        c =>
          c.claimId.toString() === form.claimId.trim() &&
          c.assignedAgent.toLowerCase() === form.lastName.trim().toLowerCase()
      );
      if (match) {
        setClaimData(match);
        setAccess(true);
      } else setError('No matching claim found.');
    } catch {
      setError('Error fetching claims.');
    }
  };

  return (
    <div className="min-h-screen bg-[#cdedf6] flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">🔐 Access Your Claim</h1>
      {!access ? (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
          {/* Claim ID */}
          <label className="block mb-2">Claim ID</label>
          <input
            name="claimId"
            value={form.claimId}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            required
          />
          {/* Last Name */}
          <label className="block mb-2">Last Name (Agent’s last name)</label>
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            required
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
            View Claim
          </button>
        </form>
      ) : (
        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Claim #{claimData.claimId}</h2>
          <p className="mb-2"><strong>Status:</strong> {claimData.status}</p>
          <p className="mb-4"><strong>Agent:</strong> {claimData.assignedAgent}</p>
          <button
            className="w-full bg-gray-300 p-2 rounded"
            onClick={() => {
              setAccess(false);
              setForm({ claimId: '', lastName: '' });
            }}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}
