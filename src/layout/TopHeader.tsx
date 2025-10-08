import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const TopHeader: React.FC = () => {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-sm border-b border-border">
      {/* Logo */}
      <Link to="/">
        <Logo size="sm" />
      </Link>

      {/* Actions */}
      <nav className="flex items-center gap-6">
        <Link to="/trips" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
          My Trips
        </Link>
        <Link to="/profile" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
          Profile
        </Link>
        <button
          className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
          aria-label="Menu"
        >
          <Menu className="h-6 w-6 text-foreground" />
        </button>
      </nav>
    </header>
  );
};

export default TopHeader;
