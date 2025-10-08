import React from "react";
import WelcomeSection from "./components/WelcomeSection";
import StatsCards from "./components/StatsCards";
import ActionCards from "./components/ActionCards";
import RecentActivity from "./components/RecentActivity";

const DashboardSection: React.FC = () => {
  return (
    <div className="p-4 space-y-6">
      <WelcomeSection />
      <StatsCards />
      <ActionCards />
      <RecentActivity />
    </div>
  );
};

export default DashboardSection;
