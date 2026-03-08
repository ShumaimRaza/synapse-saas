import { useState } from "react";
import { Plus, X } from "lucide-react";
import { projects as initialProjects } from "../../data/mockData";
import Avatar      from "../../components/ui/Avatar";
import Badge       from "../../components/ui/Badge";
import ProgressBar from "../../components/ui/ProgressBar";

const STATUS_VARIANT = {
  active:   "success",
  review:   "info",
  paused:   "warning",
  complete: "default",
};

const ACCENT_COLORS = [
  "#6366f1", "#818cf8", "#34d399", "#fbbf24", "#f87171", "#a78bfa",
];

const EMPTY_FORM = {
  name:   "",
  owner:  "",
  due:    "",
  status: "active",
  hex:    "#6366f1",
};

function NewProjectModal({ onClose, onAdd }) {
  const [form,  setForm]  = useState(EMPTY_FORM);
  const [error, setError] = useState("");

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.owner.trim() || !form.due.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    onAdd({
      id:       Date.now(),
      name:     form.name.trim(),
      owner:    form.owner.trim(),
      due:      form.due,
      status:   form.status,
      hex:      form.hex,
      progress: 0,
      avatar:   form.owner.trim().split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase(),
    });
    onClose();
  };

  const inputCls = `w-full px-3 py-2 rounded-md text-sm text-text
                    bg-bg border border-border placeholder:text-subtle
                    focus:outline-none focus:border-accent transition-colors duration-150`;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 z-50" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className="bg-surface border border-border rounded-lg w-full max-w-md shadow-xl"
             onClick={e => e.stopPropagation()}>

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <p className="font-display font-semibold text-sm text-text">New project</p>
            <button onClick={onClose}
              className="w-7 h-7 flex items-center justify-center rounded-md
                         text-muted hover:text-text hover:bg-border
                         transition-colors duration-150">
              <X size={15} />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-4">

            {error && (
              <div className="px-3 py-2 rounded-md bg-red-400/10 border border-red-400/20
                              text-red-400 text-xs">
                {error}
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-muted">Project name</label>
              <input value={form.name} onChange={set("name")}
                     placeholder="e.g. API Gateway v3" className={inputCls} />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-muted">Owner</label>
              <input value={form.owner} onChange={set("owner")}
                     placeholder="e.g. Alex Park" className={inputCls} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-muted">Due date</label>
                <input value={form.due} onChange={set("due")}
                       placeholder="e.g. Jan 30" className={inputCls} />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-muted">Status</label>
                <select value={form.status} onChange={set("status")}
                  className={inputCls + " cursor-pointer"}>
                  <option value="active">Active</option>
                  <option value="review">Review</option>
                  <option value="paused">Paused</option>
                </select>
              </div>
            </div>

            {/* Colour picker */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-muted">Colour</label>
              <div className="flex gap-2">
                {ACCENT_COLORS.map(hex => (
                  <button key={hex} type="button"
                    onClick={() => setForm(f => ({ ...f, hex }))}
                    className="w-6 h-6 rounded-full border-2 transition-all duration-150"
                    style={{
                      backgroundColor: hex,
                      borderColor: form.hex === hex ? "#fff" : "transparent",
                    }} />
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-1">
              <button type="button" onClick={onClose}
                className="flex-1 py-2 text-sm text-muted rounded-md border border-border
                           hover:text-text hover:bg-border transition-colors duration-150">
                Cancel
              </button>
              <button type="submit"
                className="flex-1 py-2 text-sm font-medium text-white rounded-md
                           bg-accent hover:bg-accent-dim transition-colors duration-150">
                Create project
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}

export default function ProjectsPage() {
  const [projectList, setProjectList] = useState(initialProjects);
  const [modalOpen,   setModalOpen]   = useState(false);

  const handleAdd = (newProject) => {
    setProjectList(prev => [newProject, ...prev]);
  };

  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display font-semibold text-text">Projects</h2>
          <p className="text-xs text-muted mt-0.5">{projectList.length} total projects</p>
        </div>
        <button onClick={() => setModalOpen(true)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium
                     text-white bg-accent hover:bg-accent-dim rounded-md
                     transition-colors duration-150">
          <Plus size={13} /> New project
        </button>
      </div>

      {/* Table */}
      <div className="bg-surface border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm" style={{ minWidth: 560 }}>
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-xs font-medium text-muted px-4 py-3">Project</th>
                <th className="text-left text-xs font-medium text-muted px-4 py-3">Owner</th>
                <th className="text-left text-xs font-medium text-muted px-4 py-3">Status</th>
                <th className="text-left text-xs font-medium text-muted px-4 py-3">Due</th>
                <th className="text-left text-xs font-medium text-muted px-4 py-3 w-36">Progress</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {projectList.map((p) => (
                <tr key={p.id} className="hover:bg-bg transition-colors duration-150">
                  <td className="px-4 py-3">
                    <p className="font-medium text-text text-xs">{p.name}</p>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Avatar initials={p.avatar} hex={p.hex} size={24} />
                      <span className="text-xs text-muted">{p.owner}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant={STATUS_VARIANT[p.status]}>
                      {p.status.charAt(0).toUpperCase() + p.status.slice(1)}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-xs text-muted">{p.due}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <ProgressBar value={p.progress} hex={p.hex} />
                      <span className="text-xs text-muted w-8 shrink-0">{p.progress}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <NewProjectModal
          onClose={() => setModalOpen(false)}
          onAdd={handleAdd}
        />
      )}

    </div>
  );
}