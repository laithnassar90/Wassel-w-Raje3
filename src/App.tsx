import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AnimaLayout } from "./components/layouts/AnimaLayout";
import { ToastProvider } from "./components/ui/toast";

const HomePage = lazy(() => import("./pages/HomePage"));
const FindRide = lazy(() => import("./pages/FindridePage"));
const OfferRidePage = lazy(() => import("./pages/OfferRidePage"));
const Dashboard = lazy(() => import("./pages/DashboardPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const MessagesPage = lazy(() => import("./pages/MessagesPage"));
const PaymentsPage = lazy(() => import("./pages/PaymentsPage"));
const RidesPage = lazy(() => import("./pages/RidesPage"));
const SettingsPage = lazy(() => import("./pages/SettingsPage"));
const NotificationsPage = lazy(() => import("./pages/NotificationsPage"));
const MyTipsPage = lazy(() => import("./pages/MyTipsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

export default function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <AnimaLayout>
          <Suspense fallback={<div className="flex items-center justify-center h-64">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/find-ride" element={<FindRide />} />
              <Route path="/offer-ride" element={<OfferRidePage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/rides" element={<RidesPage />} />
              <Route path="/messages" element={<MessagesPage />} />
              <Route path="/payments" element={<PaymentsPage />} />
              <Route path="/notifications" element={<NotificationsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/tips" element={<MyTipsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </AnimaLayout>
      </ToastProvider>
    </BrowserRouter>
  );
}
