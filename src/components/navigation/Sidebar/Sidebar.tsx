import { SidebarHeader } from "@/components/navigation/Sidebar/components/SidebarHeader";
import { SidebarNavigation } from "@/components/navigation/Sidebar/components/SidebarNavigation";
import { SidebarFooter } from "@/components/navigation/Sidebar/components/SidebarFooter";

export const Sidebar = () => {
  return (
    <div className="fixed bg-white box-border caret-transparent h-full min-h-0 min-w-0 translate-x-[-100.0%] w-64 z-50 border-gray-300 border-r border-solid left-0 top-0 md:static md:min-h-[auto] md:min-w-[auto] md:transform-none md:z-auto">
      <div className="box-border caret-transparent flex flex-col h-full">
        <SidebarHeader />
        <SidebarNavigation />
        <SidebarFooter />
      </div>
    </div>
  );
};
