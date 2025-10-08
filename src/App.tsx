import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { MainLayout } from "./components/layouts/MainLayout";
import { ToastProvider } from "./components/ui/toast";

const HomePage = lazy(() => import("./pages/HomePage"));
const FindRide = lazy(() => import("./pages/FindridePage").then(m => ({ default: m.FindRide })));
const OfferRidePage = lazy(() => import("./pages/OfferRidePage"));
const Dashboard = lazy(() => import("./pages/DashboardPage").then(m => ({ default: m.Dashboard })));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

export default function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <MainLayout>
          <Suspense fallback={<div className="flex items-center justify-center h-64">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/find-ride" element={<FindRide />} />
              <Route path="/offer-ride" element={<OfferRidePage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </MainLayout>
      </ToastProvider>
    </BrowserRouter>
  );
}
