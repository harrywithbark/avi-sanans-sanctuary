import { useEffect, useState } from "react";

export function VancouverClock() {
  const [time, setTime] = useState<string>(() => formatNow());
  useEffect(() => {
    const id = setInterval(() => setTime(formatNow()), 30_000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase text-[#0D1B2A]/70">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-soft-pulse" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
      </span>
      <span>
        Avi's Desk is Active · Vancouver{" "}
        <span className="text-[#0D1B2A] font-medium tabular-nums">{time}</span>
      </span>
    </div>
  );
}

function formatNow() {
  try {
    return new Intl.DateTimeFormat("en-CA", {
      timeZone: "America/Vancouver",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date());
  } catch {
    return "--:--";
  }
}
