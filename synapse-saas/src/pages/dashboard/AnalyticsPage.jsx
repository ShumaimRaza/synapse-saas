import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell,
} from "recharts";
import { userGrowthData, revenueData, taskData } from "../../data/mockData";
import CustomTooltip from "../../components/ui/CustomTooltip";

const SUMMARY = [
  { label: "Page Views",     value: "128,400", change: "+9%"  },
  { label: "Avg. Session",   value: "4m 12s",  change: "+5%"  },
  { label: "Bounce Rate",    value: "38.2%",   change: "-3%"  },
  { label: "Conversions",    value: "1,240",   change: "+21%" },
];

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto">

      {/* Summary row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {SUMMARY.map((s, i) => (
          <div key={i} className="bg-surface border border-border rounded-lg p-4">
            <p className="text-xs text-muted mb-2">{s.label}</p>
            <p className="font-display font-bold text-lg text-text">{s.value}</p>
            <p className={`text-xs mt-1 ${s.change.startsWith("+") ? "text-emerald-400" : "text-red-400"}`}>
              {s.change} vs last month
            </p>
          </div>
        ))}
      </div>

      {/* Main charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        {/* User growth area */}
        <div className="bg-surface border border-border rounded-lg p-5">
          <p className="text-xs text-muted mb-1">User Growth</p>
          <p className="font-display font-bold text-text text-lg mb-4">Total Users</p>
          <div style={{ height: 200 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={userGrowthData}>
                <defs>
                  <linearGradient id="ugGrad2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%"   stopColor="#6366f1" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity={0}    />
                  </linearGradient>
                  <linearGradient id="newGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%"   stopColor="#34d399" stopOpacity={0.2} />
                    <stop offset="100%" stopColor="#34d399" stopOpacity={0}   />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#222736" />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#64748b" }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="users" name="Total"  stroke="#6366f1" strokeWidth={2} fill="url(#ugGrad2)" />
                <Area type="monotone" dataKey="new"   name="New"    stroke="#34d399" strokeWidth={2} fill="url(#newGrad)"  />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Revenue bar */}
        <div className="bg-surface border border-border rounded-lg p-5">
          <p className="text-xs text-muted mb-1">Revenue vs Expenses</p>
          <p className="font-display font-bold text-text text-lg mb-4">Monthly Breakdown</p>
          <div style={{ height: 200 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#222736" />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#64748b" }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip content={<CustomTooltip prefix="$" />} />
                <Bar dataKey="revenue"  name="Revenue"  fill="#6366f1" radius={[3, 3, 0, 0]} />
                <Bar dataKey="expenses" name="Expenses" fill="#334155" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Task breakdown */}
      <div className="bg-surface border border-border rounded-lg p-5">
        <p className="text-sm font-semibold text-text mb-5">Task Status Breakdown</p>
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <div style={{ width: 160, height: 160, flexShrink: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={taskData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={72}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {taskData.map((entry, i) => (
                    <Cell key={i} fill={entry.hex} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col gap-3 flex-1">
            {taskData.map((d, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: d.hex }} />
                  <span className="text-sm text-muted">{d.name}</span>
                </div>
                <span className="text-sm font-medium text-text">{d.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}