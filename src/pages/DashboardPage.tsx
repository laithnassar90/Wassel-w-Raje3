import { WelcomeSection, StatsCards, ActionCards, RecentActivity } from "@/sections/Dashboard";

export const Dashboard = () => {
  return (
    <main className="flex-1 overflow-auto p-4 space-y-6 min-h-screen">
      <WelcomeSection />
      <StatsCards />
      <ActionCards />
      <RecentActivity />
    </main>
  );
};

export default Dashboard;
