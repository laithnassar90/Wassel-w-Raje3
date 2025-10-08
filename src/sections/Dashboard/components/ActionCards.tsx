import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ActionCards: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition-shadow">
        <div className="p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-xl bg-gradient-to-r from-teal-600 to-slate-500">
              <img
                src="https://c.animaapp.com/mfzum9yxwZ0GbV/assets/icon-13.svg"
                alt="Find a Ride"
                className="h-6 w-6 text-white"
              />
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-lg font-semibold font-poppins text-neutral-800">
                Find a Ride
              </h3>
              <p className="text-gray-400">Search for available rides</p>
            </div>
            <button 
              onClick={() => navigate('/find-ride')}
              className="ml-4 px-4 py-2 h-9 bg-cyan-700 text-white text-sm font-medium rounded-lg shadow hover:bg-cyan-700/90 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition-shadow">
        <div className="p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-xl bg-gradient-to-r from-teal-600 to-slate-500">
              <img
                src="https://c.animaapp.com/mfzum9yxwZ0GbV/assets/icon-14.svg"
                alt="Offer a Ride"
                className="h-6 w-6 text-white"
              />
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-lg font-semibold font-poppins text-neutral-800">
                Offer a Ride
              </h3>
              <p className="text-gray-400">Share your journey</p>
            </div>
            <button 
              onClick={() => navigate('/offer-ride')}
              className="ml-4 px-4 py-2 h-9 bg-cyan-700 text-white text-sm font-medium rounded-lg shadow hover:bg-cyan-700/90 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};