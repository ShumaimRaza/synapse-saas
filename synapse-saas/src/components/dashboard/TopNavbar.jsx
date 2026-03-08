import { useState, useRef, useEffect } from "react";
import { Bell, Menu } from "lucide-react";
import { activityFeed } from "../../data/mockData";
import Avatar from "../ui/Avatar";

const PAGE_TITLES = {
  dashboard: "Dashboard",
  analytics:  "Analytics",
  projects:   "Projects",
  team:       "Team",
  settings:   "Settings",
};

// Use first 4 feed items as notifications
const NOTIFICATIONS = activityFeed.slice(0, 4);

export default function TopNavbar({ activePage, onMenuOpen }) {
  const [notifOpen, setNotifOpen] = useState(false);
  const notifRef = useRef(null);

  // Close notif dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setNotifOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="h-14 bg-surface border-b border-border
                        flex items-center justify-between px-4 gap-4 shrink-0 sticky top-0 z-20">

      {/* Left — mobile menu + page title */}
      <div className="flex items-center gap-3 min-w-0">
        {/* Mobile hamburger */}
        <button
          onClick={onMenuOpen}
          className="md:hidden flex items-center justify-center w-8 h-8 rounded-md
                     text-muted hover:text-text hover:bg-border
                     transition-colors duration-150"
        >
          <Menu size={17} />
        </button>

        <h1 className="font-display font-semibold text-sm text-text truncate">
          {PAGE_TITLES[activePage] ?? "Dashboard"}
        </h1>
      </div>

      {/* Right — notifications, avatar */}
      <div className="flex items-center gap-2 shrink-0">        {/* Notifications */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => setNotifOpen(v => !v)}
            className="relative w-8 h-8 flex items-center justify-center rounded-md
                       text-muted hover:text-text hover:bg-border
                       transition-colors duration-150"
          >
            <Bell size={16} />
            {/* Unread dot */}
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-accent" />
          </button>

          {/* Dropdown */}
          {notifOpen && (
            <div className="absolute right-0 top-10 w-72 bg-surface border border-border
                            rounded-lg shadow-lg overflow-hidden z-50">
              <div className="px-4 py-2.5 border-b border-border flex items-center justify-between">
                <p className="text-xs font-semibold text-text">Notifications</p>
                <button className="text-xs text-accent hover:text-accent/80 transition-colors duration-150">
                  Mark all read
                </button>
              </div>
              <div className="flex flex-col divide-y divide-border">
                {NOTIFICATIONS.map((n, i) => (
                  <div key={i} className="px-4 py-3 hover:bg-bg transition-colors duration-150 cursor-pointer">
                    <p className="text-xs text-text mb-0.5">{n.text}</p>
                    <p className="text-[11px] text-muted">{n.time}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User avatar */}
        <Avatar initials="AP" hex="#6366f1" size={30} />
      </div>
    </header>
  );
}