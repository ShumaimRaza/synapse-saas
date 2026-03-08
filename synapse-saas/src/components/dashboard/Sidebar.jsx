import { useState, useEffect } from "react";
import {
  LayoutDashboard, BarChart2, FolderKanban,
  Users, Settings, ChevronLeft, ChevronRight, LogOut,
} from "lucide-react";

const NAV_ITEMS = [
  { key: "dashboard", label: "Dashboard", Icon: LayoutDashboard },
  { key: "analytics", label: "Analytics",  Icon: BarChart2       },
  { key: "projects",  label: "Projects",   Icon: FolderKanban    },
  { key: "team",      label: "Team",       Icon: Users           },
  { key: "settings",  label: "Settings",   Icon: Settings        },
];

export default function Sidebar({
  activePage,
  setActivePage,
  onLogout,
  // mobile drawer props
  isMobile  = false,
  drawerOpen = false,
  onClose,
}) {
  const [collapsed, setCollapsed] = useState(false);

  // Always expand on mobile drawer
  const isCollapsed = isMobile ? false : collapsed;

  // Close drawer on route change (mobile)
  const handleNav = (key) => {
    setActivePage(key);
    if (isMobile && onClose) onClose();
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isMobile && drawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={onClose}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={`
          flex flex-col bg-surface border-r border-border
          transition-all duration-200 shrink-0 z-40
          ${isMobile
            ? `fixed top-0 left-0 h-full w-56
               ${drawerOpen ? "translate-x-0" : "-translate-x-full"}
               transition-transform duration-200`
            : `relative h-screen sticky top-0
               ${isCollapsed ? "w-16" : "w-52"}`
          }
        `}
      >
        {/* Logo */}
        <div className={`h-14 flex items-center border-b border-border shrink-0
                         ${isCollapsed ? "justify-center px-0" : "px-4 gap-2"}`}>
          <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center shrink-0">
            <span className="text-white font-display font-bold text-sm">S</span>
          </div>
          {!isCollapsed && (
            <span className="font-display font-semibold text-sm text-text">Synapse</span>
          )}
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-2 py-3 flex flex-col gap-0.5 overflow-y-auto">
          {NAV_ITEMS.map(({ key, label, Icon }) => {
            const active = activePage === key;
            return (
              <button
                key={key}
                onClick={() => handleNav(key)}
                title={isCollapsed ? label : undefined}
                className={`flex items-center rounded-md text-sm transition-colors duration-150
                            ${isCollapsed ? "justify-center w-10 h-10 mx-auto" : "gap-2.5 px-3 py-2 w-full"}
                            ${active
                              ? "bg-accent/10 text-accent"
                              : "text-muted hover:bg-border hover:text-text"
                            }`}
              >
                <Icon size={16} className="shrink-0" />
                {!isCollapsed && <span>{label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Bottom — logout + collapse */}
        <div className="px-2 py-3 border-t border-border flex flex-col gap-1 shrink-0">
          <button
            onClick={onLogout}
            title={isCollapsed ? "Log out" : undefined}
            className={`flex items-center rounded-md text-sm text-muted
                        hover:bg-border hover:text-text transition-colors duration-150
                        ${isCollapsed ? "justify-center w-10 h-10 mx-auto" : "gap-2.5 px-3 py-2 w-full"}`}
          >
            <LogOut size={16} className="shrink-0" />
            {!isCollapsed && <span>Log out</span>}
          </button>

          {/* Collapse toggle — desktop only */}
          {!isMobile && (
            <button
              onClick={() => setCollapsed(v => !v)}
              title={collapsed ? "Expand" : "Collapse"}
              className={`flex items-center rounded-md text-sm text-muted
                          hover:bg-border hover:text-text transition-colors duration-150
                          ${isCollapsed ? "justify-center w-10 h-10 mx-auto" : "gap-2.5 px-3 py-2 w-full"}`}
            >
              {collapsed
                ? <ChevronRight size={16} className="shrink-0" />
                : <><ChevronLeft size={16} className="shrink-0" /><span>Collapse</span></>
              }
            </button>
          )}
        </div>
      </aside>
    </>
  );
}