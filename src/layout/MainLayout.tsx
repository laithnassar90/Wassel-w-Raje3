import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/ui/button/button";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-indigo-600">Wassel</Link>
        <div className="flex items-center gap-4">
          <Link to="/find-ride">Find a Ride</Link>
          <Link to="/offer-ride">Offer a Ride</Link>
          {loading ? (
            <div>Loading...</div>
          ) : user ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <span>Welcome, {user.name}</span>
              <Button onClick={handleLogout} size="sm">Logout</Button>
            </>
          ) : (
            <Link to="/sessions">Login</Link>
          )}
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 p-6">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} Wassel. All rights reserved.
      </footer>
    </div>
  );
};

export default MainLayout;
