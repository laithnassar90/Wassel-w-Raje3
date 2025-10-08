import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-6">
      <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-6">The page you're looking for doesn't exist.</p>
      <button 
        onClick={() => navigate('/dashboard')}
        className="px-6 py-3 bg-cyan-700 text-white rounded-lg hover:bg-cyan-800 transition-colors"
      >
        Go to Dashboard
      </button>
    </div>
  );
};

export default NotFoundPage;
