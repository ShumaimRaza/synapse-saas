import { useState, useEffect } from "react";
import Sidebar    from "../components/dashboard/Sidebar";
import TopNavbar  from "../components/dashboard/TopNavbar";

import DashboardHome  from "../pages/dashboard/DashboardHome";
import AnalyticsPage  from "../pages/dashboard/AnalyticsPage";
import ProjectsPage   from "../pages/dashboard/ProjectPage";
import TeamPage       from "../pages/dashboard/TeamPage";
import SettingsPage   from "../pages/dashboard/SettingsPage";

const PAGES = {
  dashboard: DashboardHome,
  analytics: AnalyticsPage,
  projects:  ProjectsPage,
  team:      TeamPage,
  settings:  SettingsPage,
};

export default function DashboardLayout({ onLogout }) {
  const [activePage,  setActivePage]  = useState("dashboard");
  const [drawerOpen,  setDrawerOpen]  = useState(false);
  const [isMobile,    setIsMobile]    = useState(window.innerWidth < 768);

  useEffect(() => {
    const h = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setDrawerOpen(false);
    };
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = (isMobile && drawerOpen) ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobile, drawerOpen]);

  const PageComponent = PAGES[activePage] ?? DashboardHome;

  return (
    <div className="flex h-screen bg-bg overflow-hidden">

      {/* Sidebar — sticky desktop / drawer mobile */}
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        onLogout={onLogout}
        isMobile={isMobile}
        drawerOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />

      {/* Main column */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <TopNavbar
          activePage={activePage}
          onMenuOpen={() => setDrawerOpen(true)}
        />
        <main className="flex-1 overflow-y-auto px-5 py-6">
          <PageComponent />
        </main>
      </div>

    </div>
  );
}