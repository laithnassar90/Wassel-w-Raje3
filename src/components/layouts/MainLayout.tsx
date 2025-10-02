import { Sidebar } from "@/components/navigation/Sidebar";
import { MainContent } from "@/components/layouts/MainContent";

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex min-h-screen">
        <Sidebar />
        <MainContent />
      </div>
      <div
        role="region"
        aria-label="Notifications"
        className="fixed top-0 right-0 z-50 p-4"
      >
        <ol className="flex flex-col space-y-2 max-w-sm"></ol>
      </div>
    </div>
  );
};
