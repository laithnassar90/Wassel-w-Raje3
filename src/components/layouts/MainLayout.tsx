import { ReactNode, memo } from "react";
import { Sidebar } from "@/components/navigation/Sidebar";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = memo(({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex min-h-screen">
        <Sidebar />
<<<<<<< HEAD
        <main className="flex-1 p-6">
          {children}
        </main>
=======
        <MainContent />
>>>>>>> 8f136104 (Wassel r002)
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
});
