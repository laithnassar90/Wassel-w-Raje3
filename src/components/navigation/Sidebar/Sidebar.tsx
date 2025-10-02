import { SidebarHeader } from "@/components/navigation/Sidebar/components/SidebarHeader";
import { SidebarNavigation } from "@/components/navigation/Sidebar/components/SidebarNavigation";
import { SidebarFooter } from "@/components/navigation/Sidebar/components/SidebarFooter";

export const Sidebar = () => {
  return (
    <div className="hidden md:flex md:flex-col bg-white w-64 h-screen border-r border-gray-300">
      <SidebarHeader />
      <SidebarNavigation />
      <SidebarFooter />
    </div>
  );
};
