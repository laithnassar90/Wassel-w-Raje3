import { EnhancedWelcomeSection } from "./components/EnhancedWelcomeSection";
import { StatsCards } from "./components/StatsCards";
import { ActionCards } from "./components/ActionCards";
import { RecentActivity } from "./components/RecentActivity";

const DashboardSection: React.FC = () => (
  <div className="p-4 space-y-6">
    <EnhancedWelcomeSection />
    <StatsCards />
    <ActionCards />
    <RecentActivity />
  </div>
);

export default DashboardSection;
