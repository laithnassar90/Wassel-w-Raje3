import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "./components/layouts/MainLayout";
import HomePage from "./pages/HomePage";
import { FindRide } from "./pages/FindridePage";
import OfferRidePage from "./pages/OfferRidePage";
import { Dashboard } from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import { ToastProvider } from "./components/ui/toast";

export default function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/find-ride" element={<FindRide />} />
            <Route path="/offer-ride" element={<OfferRidePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </MainLayout>
      </ToastProvider>
    </BrowserRouter>
  );
}
