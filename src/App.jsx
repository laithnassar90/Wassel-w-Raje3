import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FindRidePage from "./pages/FindridePage";
import OfferRidePage from "./pages/OfferRidePage";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import RidesPage from "./pages/RidesPage";
import PaymentsPage from "./pages/PaymentsPage";
import NotificationsPage from "./pages/NotificationsPage";
import MyTipsPage from "./pages/MyTipsPage";
import MessagesPage from "./pages/MessagesPage";
import CarsPage from "./pages/CarsPage";
import SettingsPage from "./pages/SettingsPage";
import SessionsPage from "./pages/SessionsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/find-ride" element={<FindRidePage />} />
        <Route path="/offer-ride" element={<OfferRidePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/rides" element={<RidesPage />} />
        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/my-tips" element={<MyTipsPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/sessions" element={<SessionsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}