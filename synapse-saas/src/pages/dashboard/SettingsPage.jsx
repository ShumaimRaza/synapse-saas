import { useState } from "react";
import Toggle from "../../components/ui/Toggle";

const TABS = ["Profile", "Notifications", "Security", "Billing"];

function Section({ title, desc, children }) {
  return (
    <div className="bg-surface border border-border rounded-lg overflow-hidden">
      <div className="px-5 py-4 border-b border-border">
        <p className="text-sm font-semibold text-text">{title}</p>
        {desc && <p className="text-xs text-muted mt-0.5">{desc}</p>}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function Field({ label, desc, children }) {
  return (
    <div className="flex items-start justify-between gap-4 py-3 border-b border-border last:border-0">
      <div className="min-w-0">
        <p className="text-xs font-medium text-text">{label}</p>
        {desc && <p className="text-xs text-muted mt-0.5">{desc}</p>}
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  );
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Profile");
  const [profile, setProfile] = useState({
    name:    "Alex Park",
    email:   "alex@synapse.io",
    company: "Synapse Inc.",
    role:    "Frontend Engineer",
  });
  const [notifs, setNotifs] = useState({
    email:    true,
    push:     false,
    digest:   true,
    security: true,
  });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const setP = (key) => (e) => setProfile(p => ({ ...p, [key]: e.target.value }));
  const setN = (key) => () => setNotifs(n => ({ ...n, [key]: !n[key] }));

  const inputCls = `w-full px-3 py-2 rounded-md text-sm text-text
                    bg-bg border border-border
                    placeholder:text-subtle
                    focus:outline-none focus:border-accent
                    transition-colors duration-150`;

  return (
    <div className="flex flex-col gap-6 max-w-2xl mx-auto">

      {/* Tab strip */}
      <div className="flex gap-1 overflow-x-auto pb-1">
        {TABS.map(t => (
          <button key={t} onClick={() => setActiveTab(t)}
            className={`px-4 py-1.5 text-xs font-medium rounded-md whitespace-nowrap
                        transition-colors duration-150
                        ${activeTab === t
                          ? "bg-surface border border-border text-text"
                          : "text-muted hover:text-text hover:bg-surface/60"
                        }`}>
            {t}
          </button>
        ))}
      </div>

      {/* Profile tab */}
      {activeTab === "Profile" && (
        <>
          <Section title="Personal Information" desc="Update your name and contact details.">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { key: "name",    label: "Full name"   },
                { key: "email",   label: "Email"        },
                { key: "company", label: "Company"      },
                { key: "role",    label: "Job title"    },
              ].map(f => (
                <div key={f.key} className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-muted">{f.label}</label>
                  <input
                    value={profile[f.key]}
                    onChange={setP(f.key)}
                    className={inputCls}
                  />
                </div>
              ))}
            </div>
          </Section>

          <button onClick={handleSave}
            className="self-start px-4 py-2 text-sm font-medium text-white
                       bg-accent hover:bg-accent-dim rounded-md
                       transition-colors duration-150">
            {saved ? "Saved!" : "Save changes"}
          </button>
        </>
      )}

      {/* Notifications tab */}
      {activeTab === "Notifications" && (
        <Section title="Notification Preferences" desc="Choose how and when you get notified.">
          <Field label="Email notifications" desc="Receive updates and alerts via email.">
            <Toggle on={notifs.email}    onToggle={setN("email")}    />
          </Field>
          <Field label="Push notifications" desc="Browser push notifications.">
            <Toggle on={notifs.push}     onToggle={setN("push")}     />
          </Field>
          <Field label="Weekly digest" desc="A summary of activity every Monday.">
            <Toggle on={notifs.digest}   onToggle={setN("digest")}   />
          </Field>
          <Field label="Security alerts" desc="Login attempts and permission changes.">
            <Toggle on={notifs.security} onToggle={setN("security")} />
          </Field>
        </Section>
      )}

      {/* Security tab */}
      {activeTab === "Security" && (
        <>
          <Section title="Change Password" desc="Choose a strong password.">
            <div className="flex flex-col gap-4">
              {["Current password", "New password", "Confirm new password"].map((l, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-muted">{l}</label>
                  <input type="password" placeholder="••••••••" className={inputCls} />
                </div>
              ))}
              <button className="self-start px-4 py-2 text-sm font-medium text-white
                                 bg-accent hover:bg-accent-dim rounded-md
                                 transition-colors duration-150">
                Update password
              </button>
            </div>
          </Section>

          <Section title="Danger Zone" desc="Irreversible account actions.">
            <button className="px-4 py-2 text-xs font-medium text-red-400
                               bg-red-400/10 border border-red-400/20 rounded-md
                               hover:bg-red-400/20 transition-colors duration-150">
              Delete account
            </button>
          </Section>
        </>
      )}

      {/* Billing tab */}
      {activeTab === "Billing" && (
        <Section title="Current Plan" desc="You are on the Pro plan.">
          <div className="flex items-center justify-between py-2">
            <div>
              <p className="text-sm font-semibold text-text">Pro — $99/mo</p>
              <p className="text-xs text-muted mt-0.5">Renews Jan 1, 2027</p>
            </div>
            <button className="px-3 py-1.5 text-xs font-medium text-muted
                               border border-border rounded-md
                               hover:text-text hover:bg-border
                               transition-colors duration-150">
              Manage billing
            </button>
          </div>
        </Section>
      )}

    </div>
  );
}