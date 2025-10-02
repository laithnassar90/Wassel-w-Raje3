import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/ui/input/input";
import { Button } from "@/ui/button/button";
import { Label } from "@/ui/label/label";
import { login } from "@/services/api";

export const NewLogin: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("password");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button onClick={handleLogin} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </Button>
    </div>
  );
};
