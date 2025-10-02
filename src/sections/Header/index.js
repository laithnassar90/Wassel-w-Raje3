import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";
import { HeaderLogo } from "@/sections/Header/components/HeaderLogo";
import { HeaderActions } from "@/sections/Header/components/HeaderActions";

export const Header = () => {
  return (
    <header className="items-center bg-white box-border caret-transparent flex h-16 justify-between border-gray-300 px-6 border-b border-solid">
      <div className="items-center box-border caret-transparent gap-x-4 flex gap-y-4">
        <MobileMenuButton />
        <HeaderLogo />
      </div>
      <HeaderActions />
    </header>
  );
};
