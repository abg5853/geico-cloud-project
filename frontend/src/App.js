import React from 'react'
import { useAuth } from 'react-oidc-context'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Claims from './pages/Claims'
import { AllClaims, ClaimDetail } from './pages/AllClaims'
import Notifications from './pages/Notifications'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ChatBubble from './components/ChatBubble'

function App() {
  const auth = useAuth()

  // 1. while loading / error
  if (auth.isLoading) return <div className="p-8 text-center">Loading…</div>
  if (auth.error)   return <div className="p-8 text-center text-red-600">Error: {auth.error.message}</div>

  return (
    <BrowserRouter>
      <div className="relative min-h-screen flex flex-col bg-[#e8f4f8]">

        {/* NAVBAR */}
        <nav className="bg-[#cdedf6] shadow">
          <div className="container mx-auto flex items-center justify-between p-4">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              GEICO Cloud
            </Link>

            <div className="flex items-center space-x-4">
              <Link to="/"         className="text-gray-700 hover:text-gray-900">Home</Link>
              <Link to="/about"    className="text-gray-700 hover:text-gray-900">About</Link>
              <Link to="/claims"   className="text-gray-700 hover:text-gray-900">My Claim</Link>
              <Link to="/all-claims" className="text-gray-700 hover:text-gray-900">All Claims</Link>
              <Link to="/notifications" className="text-gray-700 hover:text-gray-900">Notifications</Link>

              {auth.isAuthenticated ? (
                <>
                  <span className="text-gray-700">Hi, {auth.user?.profile.email}</span>
                  <button
                    onClick={() => auth.removeUser()}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <button
                  onClick={() => auth.signinRedirect()}
                  className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </nav>

        {/* MAIN CONTENT */}
        <main className="flex-grow container mx-auto px-6 py-8">
          <Routes>
            <Route path="/"               element={<Home />} />
            <Route path="/about"          element={<About />} />
            <Route path="/claims"         element={<Claims />} />
            <Route path="/all-claims"     element={<AllClaims />} />
            <Route path="/all-claims/:id" element={<ClaimDetail />} />
            <Route path="/notifications"  element={<Notifications />} />
            <Route path="/login"          element={<Login />} />
            <Route path="/signup"         element={<Signup />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <footer className="bg-[#cdedf6] text-center py-6">
          © 2025 GEICO Cloud. All rights reserved.
        </footer>

        {/* CHAT BUBBLE */}
        <ChatBubble />
      </div>
    </BrowserRouter>
  )
}

export default App
