import { WelcomeSection, StatsCards, ActionCards, RecentActivity } from "@/sections/Dashboard";

export const Dashboard = () => {
  return (
    <main className="box-border caret-transparent basis-[0%] grow overflow-auto p-4 space-y-6">
      <WelcomeSection />
      <StatsCards />
      <ActionCards />
      <RecentActivity />
    </main>
  );
};
