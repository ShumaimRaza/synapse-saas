export const userGrowthData = [
  { month: "Jan", users: 1200, new: 340 },
  { month: "Feb", users: 1800, new: 600 },
  { month: "Mar", users: 2400, new: 620 },
  { month: "Apr", users: 2900, new: 500 },
  { month: "May", users: 3600, new: 700 },
  { month: "Jun", users: 4200, new: 600 },
  { month: "Jul", users: 5100, new: 900 },
  { month: "Aug", users: 6000, new: 890 },
];

export const revenueData = [
  { month: "Jan", revenue: 12000, expenses: 8000  },
  { month: "Feb", revenue: 18000, expenses: 9500  },
  { month: "Mar", revenue: 22000, expenses: 10000 },
  { month: "Apr", revenue: 19000, expenses: 9000  },
  { month: "May", revenue: 28000, expenses: 12000 },
  { month: "Jun", revenue: 32000, expenses: 13500 },
  { month: "Jul", revenue: 38000, expenses: 14000 },
  { month: "Aug", revenue: 42000, expenses: 15000 },
];

export const taskData = [
  { name: "Completed",   value: 68, hex: "#34d399" },
  { name: "In Progress", value: 22, hex: "#818cf8" },
  { name: "Pending",     value: 10, hex: "#475569" },
];

export const activityFeed = [
  { icon: "UserPlus",      hex: "#818cf8", text: "Sarah Chen joined the team",               time: "2m ago"  },
  { icon: "CheckCircle2",  hex: "#34d399", text: "Project 'Nova Dashboard' marked complete", time: "14m ago" },
  { icon: "FolderKanban",  hex: "#818cf8", text: "New project 'API Gateway v2' created",     time: "1h ago"  },
  { icon: "MessageSquare", hex: "#fbbf24", text: "15 new comments on Design System",         time: "2h ago"  },
  { icon: "TrendingUp",    hex: "#34d399", text: "Revenue milestone $50k reached",           time: "3h ago"  },
  { icon: "Shield",        hex: "#f87171", text: "Security audit completed",                 time: "5h ago"  },
];

export const projects = [
  { id: 1, name: "Nova Dashboard",    owner: "Alex Park",    status: "active",   due: "Dec 15", progress: 72,  avatar: "AP", hex: "#818cf8" },
  { id: 2, name: "API Gateway v2",    owner: "Sarah Chen",   status: "review",   due: "Dec 20", progress: 88,  avatar: "SC", hex: "#6366f1" },
  { id: 3, name: "Mobile SDK",        owner: "James Wu",     status: "active",   due: "Jan 5",  progress: 45,  avatar: "JW", hex: "#34d399" },
  { id: 4, name: "Analytics Engine",  owner: "Priya Sharma", status: "paused",   due: "Jan 12", progress: 31,  avatar: "PS", hex: "#fbbf24" },
  { id: 5, name: "Design System 3.0", owner: "Lena Torres",  status: "complete", due: "Nov 30", progress: 100, avatar: "LT", hex: "#a78bfa" },
  { id: 6, name: "Auth Microservice", owner: "Tom Nguyen",   status: "active",   due: "Jan 20", progress: 60,  avatar: "TN", hex: "#f87171" },
];

export const teamMembers = [
  { name: "Alex Park",    role: "Frontend Engineer",  status: "online",  email: "alex@synapse.io",  avatar: "AP", hex: "#818cf8" },
  { name: "Sarah Chen",   role: "Full-Stack Dev",     status: "online",  email: "sarah@synapse.io", avatar: "SC", hex: "#6366f1" },
  { name: "James Wu",     role: "Backend Engineer",   status: "away",    email: "james@synapse.io", avatar: "JW", hex: "#34d399" },
  { name: "Priya Sharma", role: "Data Scientist",     status: "offline", email: "priya@synapse.io", avatar: "PS", hex: "#fbbf24" },
  { name: "Lena Torres",  role: "UI/UX Designer",     status: "online",  email: "lena@synapse.io",  avatar: "LT", hex: "#a78bfa" },
  { name: "Tom Nguyen",   role: "DevOps Engineer",    status: "away",    email: "tom@synapse.io",   avatar: "TN", hex: "#f87171" },
];

export const features = [
  { icon: "Zap",       title: "Blazing Fast",        hex: "#818cf8", desc: "Sub-50ms API responses globally with edge-optimized infrastructure and intelligent caching."  },
  { icon: "Shield",    title: "Enterprise Security",  hex: "#34d399", desc: "SOC 2 Type II certified with end-to-end encryption, SSO, and granular RBAC controls."        },
  { icon: "BarChart2", title: "Deep Analytics",       hex: "#6366f1", desc: "Real-time dashboards, custom funnels, cohort analysis and AI-powered anomaly detection."     },
  { icon: "Globe",     title: "Global Scale",         hex: "#fbbf24", desc: "Deploy to 35+ regions worldwide. 99.99% uptime SLA backed by our reliability guarantee."     },
  { icon: "Code2",     title: "Developer First",      hex: "#f87171", desc: "Fully typed SDKs in 12 languages, GraphQL & REST APIs, webhooks, and CLI tooling."           },
  { icon: "Layers",    title: "Modular Platform",     hex: "#a78bfa", desc: "Pick exactly the modules you need. Compose and extend with our plugin marketplace."          },
];

export const testimonials = [
  { name: "Mia Hoffmann", role: "CTO",             company: "Luminary AI",  avatar: "MH", hex: "#818cf8", rating: 5, quote: "Synapse cut our infrastructure costs by 40% while tripling our deployment frequency. The developer experience is unmatched." },
  { name: "Raj Patel",    role: "VP Engineering",  company: "Velocity Corp", avatar: "RP", hex: "#6366f1", rating: 5, quote: "We migrated 200+ microservices in one weekend. The tooling is the best I've used in 15 years of building distributed systems." },
  { name: "Aiko Tanaka",  role: "Head of Product", company: "Orbit Labs",   avatar: "AT", hex: "#34d399", rating: 5, quote: "The analytics platform alone is worth the investment. We discovered three major friction points in the first week." },
];

export const pricingPlans = [
  {
    name: "Starter", price: 29, period: "mo", highlight: false, cta: "Start free trial",
    desc: "Perfect for indie developers and small projects.",
    features: ["Up to 5 projects", "10k API calls/mo", "Basic analytics", "Community support", "1 team member"],
  },
  {
    name: "Pro", price: 99, period: "mo", highlight: true, cta: "Get started",
    desc: "For growing teams that need power and flexibility.",
    features: ["Unlimited projects", "1M API calls/mo", "Advanced analytics", "Priority support", "25 members", "Custom domains", "Audit logs", "SSO integration"],
  },
  {
    name: "Enterprise", price: "Custom", period: "", highlight: false, cta: "Contact sales",
    desc: "Tailored solutions for large organizations.",
    features: ["Everything in Pro", "Unlimited API calls", "Dedicated infrastructure", "24/7 SLA support", "Unlimited members", "Custom contracts", "On-prem option", "White-labeling"],
  },
];