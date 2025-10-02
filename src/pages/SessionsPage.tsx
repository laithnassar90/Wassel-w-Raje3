import React from "react";
import { NewLogin } from "../sessions/components/new-login/NewLogin";

const SessionsPage: React.FC = () => {
  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <div className="w-full max-w-sm">
        <NewLogin />
      </div>
    </div>
  );
};

export default SessionsPage;
