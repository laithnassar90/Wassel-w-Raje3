import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-slate-100">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-cyan-700">Wassel</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your trusted ridesharing platform. Find rides, offer rides, and connect with your community.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => navigate('/find-ride')}
              className="px-8 py-4 bg-cyan-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-cyan-800 transition-colors"
            >
              Find a Ride
            </button>
            <button 
              onClick={() => navigate('/offer-ride')}
              className="px-8 py-4 bg-white text-cyan-700 text-lg font-semibold rounded-lg shadow-lg border-2 border-cyan-700 hover:bg-cyan-50 transition-colors"
            >
              Offer a Ride
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-cyan-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy to Find</h3>
            <p className="text-gray-600">Quickly search and find rides that match your route and schedule.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-cyan-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
            <p className="text-gray-600">Verified users and secure payment system for your peace of mind.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-cyan-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Cost Effective</h3>
            <p className="text-gray-600">Share costs and save money while helping the environment.</p>
          </div>
        </div>

        {/* Quick Access */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Quick Access</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => navigate('/dashboard')}
              className="px-6 py-3 bg-white text-gray-700 rounded-lg shadow hover:shadow-md transition-shadow border"
            >
              Dashboard
            </button>
            <button 
              onClick={() => navigate('/profile')}
              className="px-6 py-3 bg-white text-gray-700 rounded-lg shadow hover:shadow-md transition-shadow border"
            >
              Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
