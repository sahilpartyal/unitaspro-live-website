"use client";

const row1 = [
  { name: "TechVault",   bg: "bg-blue-50",    text: "text-blue-600",    dot: "bg-blue-400" },
  { name: "GrowthHQ",   bg: "bg-violet-50",  text: "text-violet-600",  dot: "bg-violet-400" },
  { name: "CloudNine",  bg: "bg-emerald-50", text: "text-emerald-600", dot: "bg-emerald-400" },
  { name: "AppForge",   bg: "bg-amber-50",   text: "text-amber-600",   dot: "bg-amber-400" },
  { name: "NexaBuild",  bg: "bg-rose-50",    text: "text-rose-600",    dot: "bg-rose-400" },
  { name: "ScaleBase",  bg: "bg-teal-50",    text: "text-teal-600",    dot: "bg-teal-400" },
  { name: "PixelCraft", bg: "bg-indigo-50",  text: "text-indigo-600",  dot: "bg-indigo-400" },
];

const row2 = [
  { name: "LaunchPath", bg: "bg-orange-50",  text: "text-orange-600",  dot: "bg-orange-400" },
  { name: "DataBridge", bg: "bg-cyan-50",    text: "text-cyan-600",    dot: "bg-cyan-400" },
  { name: "RetailNest", bg: "bg-lime-50",    text: "text-lime-600",    dot: "bg-lime-400" },
  { name: "SwiftStack", bg: "bg-pink-50",    text: "text-pink-600",    dot: "bg-pink-400" },
  { name: "CoreLogic",  bg: "bg-sky-50",     text: "text-sky-600",     dot: "bg-sky-400" },
  { name: "HiveCloud",  bg: "bg-fuchsia-50", text: "text-fuchsia-600", dot: "bg-fuchsia-400" },
  { name: "GridWorks",  bg: "bg-purple-50",  text: "text-purple-600",  dot: "bg-purple-400" },
];

function MarqueeRow({ items, reverse = false }: { items: typeof row1; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex gap-4" style={{
      animation: `marquee${reverse ? "Rev" : ""} 30s linear infinite`,
      width: "max-content",
    }}>
      {doubled.map((c, i) => (
        <div
          key={i}
          className={`${c.bg} shrink-0 flex items-center gap-2.5 pl-3 pr-5 py-2.5 rounded-2xl border border-white shadow-sm`}
        >
          <div className={`w-7 h-7 rounded-lg ${c.bg} border border-white shadow-sm flex items-center justify-center`}>
            <div className={`w-3 h-3 rounded-sm ${c.dot} opacity-60`}/>
          </div>
          <span className={`${c.text} font-bold text-sm tracking-tight`}>{c.name}</span>
        </div>
      ))}
    </div>
  );
}

export default function ClientLogos() {
  return (
    <section className="py-14 lg:py-16 overflow-hidden bg-white border-b border-gray-100">
      <style>{`
        @keyframes marquee    { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        @keyframes marqueeRev { from { transform: translateX(-50%) } to { transform: translateX(0) } }
      `}</style>

      <div className="container-main mb-8">
        <p className="text-center text-[11px] font-bold text-gray-400 uppercase tracking-[0.22em]">
          Trusted by businesses across 12+ countries
        </p>
      </div>

      <div className="flex flex-col gap-4 relative">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10"
          style={{ background: "linear-gradient(to right, white, transparent)" }}/>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10"
          style={{ background: "linear-gradient(to left, white, transparent)" }}/>
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}
