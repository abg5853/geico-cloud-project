// frontend/src/pages/AllClaims.js
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

/** List view of all claims */
export function AllClaims() {
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    fetch('http://18.204.75.139:3000/api/claims')
      .then(r => r.json())
      .then(setClaims)
      .catch(console.error);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">All Claims</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {claims.map(c => (
          <Link
            key={c.claimId}
            to={`/all-claims/${c.claimId}`}
            className="block p-4 bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-blue-600">Claim #{c.claimId}</h2>
            <p className="mt-1"><strong>Status:</strong> {c.status}</p>
            <p><strong>Agent:</strong> {c.assignedAgent}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

/** Detail view for a single claim */
export function ClaimDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [claim, setClaim] = useState(null);

  useEffect(() => {
    fetch('http://18.204.75.139:3000/api/claims')
      .then(r => r.json())
      .then(list => setClaim(list.find(c => c.claimId === Number(id))))
      .catch(console.error);
  }, [id]);

  if (!claim) return <div className="p-6">Loading…</div>;

  // Example service codes
  const serviceCodes = [
    { date: '04/01/2025', code: '0250', details: 'Pharmacy – General', unit: 1, amount: 62 },
    { date: '04/03/2025', code: '0450', details: 'Emergency Room', unit: 1, amount: 1974 },
    { date: '04/05/2025', code: '0554T', details: 'Fracture Risk Assessment', unit: 1, amount: 282 },
  ];
  const total = serviceCodes.reduce((sum, s) => sum + s.amount * s.unit, 0);

  return (
    <div className="p-6 space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold">Claim #{claim.claimId}</h1>
      <p><strong>Status:</strong> {claim.status}</p>
      <p><strong>Agent:</strong> {claim.assignedAgent}</p>

      <div className="mt-6 bg-white p-4 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-2">Service Code Details</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-2 py-1">Date</th>
              <th className="px-2 py-1">Code</th>
              <th className="px-2 py-1">Details</th>
              <th className="px-2 py-1">Unit</th>
              <th className="px-2 py-1">Amount</th>
            </tr>
          </thead>
          <tbody>
            {serviceCodes.map((s,i) => (
              <tr key={i} className={i % 2 ? 'bg-gray-50' : ''}>
                <td className="px-2 py-1">{s.date}</td>
                <td className="px-2 py-1">{s.code}</td>
                <td className="px-2 py-1">{s.details}</td>
                <td className="px-2 py-1">{s.unit}</td>
                <td className="px-2 py-1">${s.amount}</td>
              </tr>
            ))}
            <tr className="font-semibold">
              <td colSpan="4" className="px-2 py-1 text-right">Total</td>
              <td className="px-2 py-1">${total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
