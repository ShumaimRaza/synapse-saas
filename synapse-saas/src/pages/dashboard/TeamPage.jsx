import { UserPlus } from "lucide-react";
import { teamMembers } from "../../data/mockData";
import Avatar from "../../components/ui/Avatar";

const STATUS_DOT = {
  online:  "bg-emerald-400",
  away:    "bg-amber-400",
  offline: "bg-subtle",
};

const STATUS_LABEL = {
  online:  "Online",
  away:    "Away",
  offline: "Offline",
};

export default function TeamPage() {
  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display font-semibold text-text">Team</h2>
          <p className="text-xs text-muted mt-0.5">{teamMembers.length} members</p>
        </div>
        
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamMembers.map((m, i) => (
          <div key={i} className="bg-surface border border-border rounded-lg p-4
                                   flex items-center gap-3">
            {/* Avatar with status dot */}
            <div className="relative shrink-0">
              <Avatar initials={m.avatar} hex={m.hex} size={40} />
              <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full
                                border-2 border-surface ${STATUS_DOT[m.status]}`} />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-text truncate">{m.name}</p>
              <p className="text-xs text-muted truncate">{m.role}</p>
              <p className="text-xs text-muted truncate mt-0.5">{m.email}</p>
            </div>

            {/* Status label */}
            <span className={`text-[11px] font-medium shrink-0
              ${m.status === "online" ? "text-emerald-400" :
                m.status === "away"   ? "text-amber-400"   : "text-muted"}`}>
              {STATUS_LABEL[m.status]}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}