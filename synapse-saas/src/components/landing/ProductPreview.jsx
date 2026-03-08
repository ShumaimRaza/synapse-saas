import { useState } from "react";
import { BarChart2, FolderKanban, Users } from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} from "recharts";
import { revenueData } from "../../data/mockData";

const TABS = [
  { Icon: BarChart2,    label: "Analytics",    desc: "Track every metric that matters with live dashboards and custom reports."          },
  { Icon: FolderKanban, label: "Projects",     desc: "Kanban, timeline, and table views. Assign tasks, set deadlines, ship faster."      },
  { Icon: Users,        label: "Team",         desc: "Invite your team, set roles, and collaborate in real-time across every project."   },
];

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-bg border border-border rounded-md px-3 py-2 text-xs">
      <p className="text-muted mb-1">{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color }} className="font-medium">
          {p.name}: ${(p.value / 1000).toFixed(0)}k
        </p>
      ))}
    </div>
  );
}

export default function ProductPreview() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 px-5 border-t border-border">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="max-w-xl mb-12">
          <p className="text-xs font-medium text-accent uppercase tracking-widest mb-3">
            Product
          </p>
          <h2 className="font-display font-bold text-text leading-tight mb-3"
              style={{ fontSize: "clamp(22px, 3vw, 34px)" }}>
            See it in action
          </h2>
          <p className="text-muted text-sm leading-relaxed">
            A product your team will actually use. Built for speed,
            not for demos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Tab list */}
          <div className="flex flex-col gap-1">
            {TABS.map((tab, i) => (
              <button key={i} onClick={() => setActive(i)}
                className={`flex items-start gap-3 p-4 rounded-lg text-left
                            transition-colors duration-150
                            ${active === i
                              ? "bg-surface border border-border"
                              : "hover:bg-surface/60"
                            }`}>
                <div className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 mt-0.5
                                 ${active === i ? "bg-accent/10 text-accent" : "bg-border text-muted"}`}>
                  <tab.Icon size={16} />
                </div>
                <div>
                  <p className={`text-sm font-medium mb-1 ${active === i ? "text-text" : "text-muted"}`}>
                    {tab.label}
                  </p>
                  <p className="text-xs text-muted leading-relaxed">{tab.desc}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Chart preview */}
          <div className="bg-surface border border-border rounded-lg p-5">
            <div className="flex items-center justify-between mb-1">
              <p className="text-xs text-muted">Revenue vs Expenses</p>
              <span className="text-xs text-accent font-medium">+18.4% this month</span>
            </div>
            <p className="font-display font-bold text-text text-2xl mb-5">$42,000</p>
            <div style={{ height: 200 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%"   stopColor="#6366f1" stopOpacity={0.25} />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity={0}    />
                    </linearGradient>
                    <linearGradient id="expGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%"   stopColor="#34d399" stopOpacity={0.15} />
                      <stop offset="100%" stopColor="#34d399" stopOpacity={0}    />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#222736" />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#64748b" }} axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip content={<ChartTooltip />} />
                  <Area type="monotone" dataKey="revenue"  name="Revenue"  stroke="#6366f1" strokeWidth={2} fill="url(#revGrad)" />
                  <Area type="monotone" dataKey="expenses" name="Expenses" stroke="#34d399" strokeWidth={2} fill="url(#expGrad)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}