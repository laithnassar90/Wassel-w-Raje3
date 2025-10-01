import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "./layout/MainLayout";

// Pages (lazy loaded from src/pages)
const HomePage = lazy(() => import("./pages/HomePage"));
const RidesPage = lazy(() => import("./pages/RidesPage"));
const SessionsPage = lazy(() => import("./pages/SessionsPage"));
const NotificationsPage = lazy(() => import("./pages/NotificationsPage"));
const CarsPage = lazy(() => import("./pages/CarsPage"));
const Settings = lazy(() => import("./pages/Settings"));
const Profile = lazy(() => import("./pages/Profile"));
const Payments = lazy(() => import("./pages/Payments"));
const OfferRide = lazy(() => import("./pages/OfferRide"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const MyTips = lazy(() => import("./pages/MyTips"));
const Messages = lazy(() => import("./pages/Messages"));
const Findride = lazy(() => import("./pages/Findride"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

// App Component
const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        {/* Suspense fallback while lazy pages load */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rides" element={<RidesPage />} />
            <Route path="/sessions" element={<SessionsPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/cars" element={<CarsPage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/offer-ride" element={<OfferRide />} />
            <Route path="/my-tips" element={<MyTips />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/find-ride" element={<Findride />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
};

export default App;
