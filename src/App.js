import React, { useEffect, useState } from 'react';

function App() {
  const [claims, setClaims] = useState([]);

useEffect(() => {
  fetch("http://18.204.75.139:3000/api/claims")
    .then((res) => res.json())
    .then((data) => {
      console.log("✅ Claims received:", data); // <-- add this
      setClaims(data);
    })
    .catch((err) => console.error("❌ Error fetching claims:", err));
	}, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        🚗 GEICO Claim Viewer
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {claims.map(claim => (
          <div key={claim.claimId} className="bg-white shadow-lg rounded-xl p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Claim #{claim.claimId}
            </h2>
            <p className="text-sm text-gray-500">
              Status: {claim.status}
            </p>
            <p className="text-sm text-gray-500">
              Agent: {claim.assignedAgent}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
