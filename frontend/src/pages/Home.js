// Home.js
import React from 'react';

export default function Home() {
  return (
    <div className="px-6 py-12 text-gray-900">
      {/* HERO */}
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-[#1E3A8A]">Welcome to GEICO</h1>
        <p className="text-xl text-gray-700">
          Smart, simple, and secure insurance management—accessible 24/7 from any device.
        </p>
        {/* GIF */}
        <div className="flex justify-center">
          <img
            src="https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif"
            alt="Driving animation"
            className="w-64 h-40 object-cover rounded-lg shadow-lg animate-fade-in"
          />
        </div>
        {/* BUTTONS */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => window.location.href = '/claims'}
            className="px-6 py-3 bg-white border-2 border-[#1E3A8A] text-[#1E3A8A] font-medium rounded-md
                       hover:bg-[#1E3A8A] hover:text-white transform hover:scale-105 transition duration-300"
          >
            View Claims
          </button>
          <button
            onClick={() => window.location.href = '/signup'}
            className="px-6 py-3 bg-[#34D399] text-white font-medium rounded-md
                       hover:bg-[#2BBF86] transform hover:scale-105 transition duration-300"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* FEATURES GRID */}
      <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          ['24/7 Roadside Help', 'Help is just a tap away, anytime.'],
          ['Digital ID Cards', 'Securely stored, always accessible.'],
          ['Virtual Assistant', 'AI-powered answers on demand.'],
          ['Easy Photo Estimates', 'Submit damage estimates in minutes.'],
          ['Military Discounts', 'Special benefits for service members.'],
          ['Vehicle History', 'Stay updated with maintenance logs.']
        ].map(([title, desc]) => (
          <div
            key={title}
            className="p-5 bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-[#1E3A8A]">{title}</h3>
            <p className="mt-2 text-gray-600">{desc}</p>
          </div>
        ))}
      </div>

      {/* CALL‑TO‑ACTION */}
      <div className="mt-20 bg-[#E0F2FE] py-12 text-center rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800">Join the future of insurance</h2>
        <p className="mt-2 text-gray-600">Your policy. Your dashboard. Your way.</p>
        <button
          onClick={() => window.location.href = '/signup'}
          className="mt-6 px-8 py-3 bg-[#1E3A8A] text-white font-medium rounded-md
                     hover:bg-[#162D61] transform hover:scale-105 transition duration-300"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
