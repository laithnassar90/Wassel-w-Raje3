import { Header } from "@/sections/Header";
import { Dashboard } from "@/sections/Dashboard";

export const MainContent = () => {
  return (
    <div className="box-border caret-transparent flex basis-[0%] flex-col grow overflow-hidden">
      <Header />
      <Dashboard />
    </div>
  );
};
