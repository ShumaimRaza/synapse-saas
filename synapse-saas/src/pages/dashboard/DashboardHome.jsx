import { TrendingUp, Users, FolderKanban, DollarSign } from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  ResponsiveContainer, BarChart, Bar, Tooltip,
} from "recharts";
import { userGrowthData, revenueData, activityFeed, projects } from "../../data/mockData";
import CustomTooltip from "../../components/ui/CustomTooltip";
import ProgressBar   from "../../components/ui/ProgressBar";
import Avatar        from "../../components/ui/Avatar";

const STATS = [
  { label: "Total Users",    value: "24,800", change: "+12%",  Icon: Users,         hex: "#6366f1" },
  { label: "Revenue",        value: "$89,400", change: "+18%", Icon: DollarSign,    hex: "#34d399" },
  { label: "Active Projects",value: "142",     change: "+4%",  Icon: FolderKanban,  hex: "#818cf8" },
  { label: "Growth Rate",    value: "24.5%",   change: "+2%",  Icon: TrendingUp,    hex: "#fbbf24" },
];

const STATUS_CLASSES = {
  active:   "bg-emerald-400/10 text-emerald-400",
  review:   "bg-indigo-400/10  text-indigo-400",
  paused:   "bg-amber-400/10   text-amber-400",
  complete: "bg-blue-400/10    text-blue-400",
};

export default function DashboardHome() {
  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto">

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((s, i) => (
          <div key={i} className="bg-surface border border-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-muted">{s.label}</p>
              <div className="w-7 h-7 rounded-md flex items-center justify-center"
                   style={{ backgroundColor: s.hex + "18", color: s.hex }}>
                <s.Icon size={14} />
              </div>
            </div>
            <p className="font-display font-bold text-xl text-text mb-1">{s.value}</p>
            <p className="text-xs text-emerald-400">{s.change} this month</p>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        {/* User growth */}
        <div className="bg-surface border border-border rounded-lg p-5">
          <p className="text-xs text-muted mb-1">User Growth</p>
          <p className="font-display font-bold text-text text-lg mb-4">6,000 users</p>
          <div style={{ height: 180 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={userGrowthData}>
                <defs>
                  <linearGradient id="ugGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%"   stopColor="#6366f1" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity={0}    />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#222736" />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#64748b" }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="users" name="Users" stroke="#6366f1" strokeWidth={2} fill="url(#ugGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Monthly revenue */}
        <div className="bg-surface border border-border rounded-lg p-5">
          <p className="text-xs text-muted mb-1">Monthly Revenue</p>
          <p className="font-display font-bold text-text text-lg mb-4">$42,000</p>
          <div style={{ height: 180 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#222736" />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#64748b" }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip content={<CustomTooltip prefix="$" />} />
                <Bar dataKey="revenue" name="Revenue" fill="#6366f1" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        {/* Recent projects */}
        <div className="bg-surface border border-border rounded-lg p-5">
          <p className="text-sm font-semibold text-text mb-4">Recent Projects</p>
          <div className="flex flex-col gap-3">
            {projects.slice(0, 4).map((p, i) => (
              <div key={i} className="flex items-center gap-3">
                <Avatar initials={p.avatar} hex={p.hex} size={30} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs font-medium text-text truncate">{p.name}</p>
                    <p className="text-xs text-muted shrink-0 ml-2">{p.progress}%</p>
                  </div>
                  <ProgressBar value={p.progress} hex={p.hex} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity feed */}
        <div className="bg-surface border border-border rounded-lg p-5">
          <p className="text-sm font-semibold text-text mb-4">Recent Activity</p>
          <div className="flex flex-col divide-y divide-border">
            {activityFeed.map((a, i) => (
              <div key={i} className="flex items-start gap-3 py-2.5 first:pt-0 last:pb-0">
                <div className="w-6 h-6 rounded-full shrink-0 mt-0.5 flex items-center justify-center"
                     style={{ backgroundColor: a.hex + "18" }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: a.hex }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-text leading-relaxed">{a.text}</p>
                  <p className="text-[11px] text-muted mt-0.5">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}