import Image from "next/image";
/* ─── per-app colour theme ─── */
const apps = [
  {
    name: "Rhino Origin",
    url: "https://rhino-origin.vercel.app/",
    description: "Core origin management platform",
    accent: "#f59e0b",
    shadow: "rgba(245,158,11,.18)",
    border: "rgba(245,158,11,.45)",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
  },
  {
    name: "Rhino Code",
    url: "https://rhino-product-code-description.vercel.app/",
    description: "Product code & descriptions",
    accent: "#10b981",
    shadow: "rgba(16,185,129,.18)",
    border: "rgba(16,185,129,.45)",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
  },
  {
    name: "Rhino Catalog",
    url: "https://rhinoautoglass.mx/",
    description: "Product catalog management",
    accent: "#8b5cf6",
    shadow: "rgba(139,92,246,.18)",
    border: "rgba(139,92,246,.45)",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
  },
  {
    name: "Rhino Stock",
    url: "https://rhino-stock.vercel.app/",
    description: "Inventory & stock tracking",
    accent: "#0ea5e9",
    shadow: "rgba(14,165,233,.18)",
    border: "rgba(14,165,233,.45)",
    iconBg: "bg-sky-500/10",
    iconColor: "text-sky-400",
  },
  {
    name: "Rhino Access",
    url: "https://rhino-access.vercel.app/",
    description: "User & permission management",
    accent: "#f43f5e",
    shadow: "rgba(244,63,94,.18)",
    border: "rgba(244,63,94,.45)",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-400",
  },
  {
    name: "Rhino Plan",
    url: "https://rhino-plan.vercel.app",
    description: "Plan the production",
    accent: "#6366f1",
    shadow: "rgba(99,102,241,.18)",
    border: "rgba(99,102,241,.45)",
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-400",
  },
];

/* ─── small stroke icons ─── */
function IconTarget({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function IconCode({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
function IconGrid({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}
function IconTrend({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}
function IconShield({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}
function IconCalendar({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

const icons = [IconTarget, IconCode, IconGrid, IconTrend, IconShield, IconCalendar];

/* ─── page ─── */
export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* ── animated background ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* grid */}
        <div className="absolute inset-0 bg-grid" />

        {/* rhino logo watermark */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/rhino-logo.png"
            alt=""
            width={480}
            height={480}
            className="opacity-[0.06]"
            priority
          />
        </div>

        {/* blobs */}
        <div
          className="blob-a absolute rounded-full bg-amber-500 opacity-[0.13]"
          style={{ top: "-180px", left: "-140px", width: "580px", height: "580px", filter: "blur(100px)" }}
        />
        <div
          className="blob-b absolute rounded-full bg-violet-500 opacity-[0.11]"
          style={{ bottom: "-120px", right: "-100px", width: "520px", height: "520px", filter: "blur(110px)" }}
        />
        <div
          className="blob-c absolute rounded-full bg-sky-500 opacity-[0.09]"
          style={{ top: "38%", left: "52%", width: "420px", height: "420px", filter: "blur(120px)" }}
        />
      </div>

      {/* ── layered content ── */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* header */}
        <header className="border-b border-slate-800/50 px-6 py-6">
          <div className="max-w-4xl mx-auto flex items-center gap-4">
            {/* logo */}
            <div className="relative shrink-0">
              <div
                className="absolute rounded-full bg-blue-600 opacity-30"
                style={{ inset: "-4px", filter: "blur(10px)" }}
              />
              <Image src="/rhino-logo.png" alt="Rhino" width={44} height={44} className="relative" priority />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-widest text-white uppercase">Rhino</h1>
              <p className="text-xs text-slate-500 tracking-widest uppercase">Automotive Glass</p>
            </div>
          </div>
        </header>

        {/* main */}
        <main className="flex-1 px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="gradient-heading text-4xl font-bold mb-2">
              App Launcher
            </h2>
            <p className="text-slate-500 mb-10">
              Access all Rhino internal applications from one place.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {apps.map((app, i) => {
                const Icon = icons[i];
                return (
                  <a
                    key={app.name}
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="app-card card-rise"
                    style={{
                      animationDelay: `${i * 0.09}s`,
                      "--card-accent": app.accent,
                      "--card-shadow": app.shadow,
                      "--card-border": app.border,
                    } as React.CSSProperties}
                  >
                    {/* icon row */}
                    <div className="flex items-start justify-between">
                      <div className={`relative z-10 w-12 h-12 rounded-xl ${app.iconBg} border border-white/10 flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${app.iconColor}`} />
                      </div>

                      {/* diagonal arrow */}
                      <svg className="card-arrow w-5 h-5 text-slate-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </div>

                    {/* text */}
                    <div className="relative z-10">
                      <h3 className="card-title text-base font-semibold text-white">
                        {app.name}
                      </h3>
                      <p className="text-sm text-slate-500 mt-0.5">
                        {app.description}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </main>

        {/* footer */}
        <footer className="border-t border-slate-800/50 px-6 py-5">
          <p className="max-w-4xl mx-auto text-xs text-slate-600 text-center">
            © 2026 Rhino Automotive Glass · Internal use only
          </p>
        </footer>
      </div>
    </div>
  );
}
