import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/ui/button/button";
import { Logo } from "@/components/ui/Logo";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-slate-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Logo size="xl" />
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Welcome to <span className="text-primary">Wassel</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your trusted ridesharing platform. Find rides, offer rides, and connect with your community.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={() => navigate('/find-ride')}
              size="lg"
              className="text-lg px-8 py-6 h-auto"
            >
              Find a Ride
            </Button>
            <Button 
              onClick={() => navigate('/offer-ride')}
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 h-auto"
            >
              Offer a Ride
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy to Find</h3>
            <p className="text-gray-600">Quickly search and find rides that match your route and schedule.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
            <p className="text-gray-600">Verified users and secure payment system for your peace of mind.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Cost Effective</h3>
            <p className="text-gray-600">Share costs and save money while helping the environment.</p>
          </div>
        </div>

        {/* Quick Access */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-8">Quick Access</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => navigate('/dashboard')}
              variant="secondary"
            >
              Dashboard
            </Button>
            <Button 
              onClick={() => navigate('/profile')}
              variant="secondary"
            >
              Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
