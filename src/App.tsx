<<<<<<< HEAD
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "./layout/MainLayout";

// Pages (lazy loaded from the new domain structure for better performance)
// Pages are now located under src/domains/{feature}/pages
const HomePage = lazy(() => import("./domains/home/pages/HomePage"));
const RidesPage = lazy(() => import("./domains/rides/pages/RidesPage"));
const SessionsPage = lazy(() => import("./domains/sessions/pages/SessionsPage"));
const NotificationsPage = lazy(() => import("./domains/notifications/pages/NotificationsPage"));
const CarsPage = lazy(() => import("./domains/cars/pages/CarsPage"));
const NotFoundPage = lazy(() => import("./domains/shared/pages/NotFoundPage")); // Assuming a 'shared' domain for generic pages

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
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
};

export default App;
=======
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
>>>>>>> 6090fceb (Initial commit of all components)
