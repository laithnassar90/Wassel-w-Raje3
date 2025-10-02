import React from 'react';
import { Logo } from "@/components/ui/Logo";

export const WelcomeSection: React.FC = () => {
  return (
    <div className="p-6">
      <div className="flex items-center gap-4">
        <Logo size="sm" className="shadow-sm" />
        <div>
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold font-poppins bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-pink-700 leading-9">
              Welcome back!
            </h1>
            <span className="text-slate-500 text-2xl font-noto_sans_arabic leading-8">
              أهلاً وسهلاً
            </span>
          </div>
          <p className="text-gray-400 mt-2">
            Ready for your next journey with Wassel?
          </p>
        </div>
      </div>
    </div>
  );
};