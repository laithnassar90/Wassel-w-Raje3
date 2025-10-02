import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layouts/MainLayout";
import HomePage from "./pages/HomePage";
import { FindRide } from "./pages/FindridePage";
import OfferRidePage from "./pages/OfferRidePage";
import { Dashboard } from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/find-ride" element={<FindRide />} />
          <Route path="/offer-ride" element={<OfferRidePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
