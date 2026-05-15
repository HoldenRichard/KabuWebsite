import { useEffect, useState } from "react";
import { KabuLogo } from "./Logo";

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[300px]">
      <div className="relative rounded-[2.75rem] border-[10px] border-black bg-black shadow-[0_30px_80px_-30px_rgba(0,0,0,0.3)]">
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
        <div className="relative h-[620px] overflow-hidden rounded-[2rem] bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}

function LearnPathScreen() {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    let n = 0;
    const id = setInterval(() => {
      n += 1;
      setStreak(n);
      if (n >= 5) clearInterval(id);
    }, 220);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex h-full flex-col bg-white">
      <div className="flex items-center justify-between px-5 pt-6 text-xs text-kabu-muted">
        <span>12:04</span>
        <span>●●●</span>
      </div>
      <div className="flex items-center justify-between px-5 pt-3">
        <div className="text-base font-semibold text-foreground">Learn</div>
        <div className="flex items-center gap-1 rounded-full bg-kabu-soft px-2.5 py-1 text-xs font-semibold text-foreground">
          <span aria-hidden>🔥</span>
          <span className="tabular-nums">{streak}</span>
        </div>
      </div>
      <div className="px-5 pt-1 text-[10px] text-kabu-muted">
        2 days until your next streak freeze
      </div>

      <div className="relative mt-4 flex-1">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 260 420"
          preserveAspectRatio="none"
        >
          <path
            d="M130 20 C 90 80, 170 140, 130 200 C 90 260, 170 320, 130 400"
            fill="none"
            stroke="oklch(0.74 0.19 145)"
            strokeWidth="3"
            strokeDasharray="6 6"
          />
        </svg>

        <div className="absolute left-1/2 top-[28px] -translate-x-1/2">
          <div className="kabu-pulse flex h-14 w-14 items-center justify-center rounded-full bg-kabu-green text-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
          </div>
        </div>

        <div className="absolute left-4 top-[110px] right-4 rounded-xl border border-black/5 bg-kabu-soft p-3">
          <div className="text-[10px] font-semibold uppercase tracking-wide text-kabu-muted">Unit 2</div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-foreground">How markets work</span>
            <span className="text-[10px] text-kabu-muted">0/15 ★</span>
          </div>
        </div>

        <div className="absolute left-1/2 top-[210px] -translate-x-1/2 rotate-45 h-12 w-12 rounded-md bg-kabu-green flex items-center justify-center">
          <svg className="-rotate-45" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M5 12l5 5L20 7" /></svg>
        </div>
        <div className="absolute right-6 top-[218px] text-[11px] font-medium text-foreground">The 2020 Crash</div>

        <div className="absolute left-1/2 top-[300px] -translate-x-1/2 h-12 w-12 rounded-full bg-kabu-green flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M5 12l5 5L20 7" /></svg>
        </div>
        <div className="absolute left-1/2 top-[358px] -translate-x-1/2 text-[10px] text-kabu-green font-medium">★★</div>
      </div>

      <div className="border-t border-black/5 px-6 py-3 flex justify-between text-[10px] text-kabu-muted">
        <span className="text-kabu-green font-semibold">Learn</span>
        <span>Scenarios</span>
        <span>Progress</span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:py-24">
        <div className="order-1">
          <KabuLogo className="mb-8 h-16 w-16 sm:h-20 sm:w-20" />
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Learn the stock market before you risk a dollar.
          </h1>
          <p className="mt-5 text-base text-kabu-muted sm:text-lg">
            The free, fun way to learn investing.
          </p>
          <div className="mt-8">
            <button
              onClick={() => document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-lg bg-kabu-green px-7 py-3.5 text-base font-semibold text-white transition-transform duration-200 hover:scale-[1.02] hover:bg-kabu-green-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kabu-green"
            >
              Join the Beta
            </button>
            <p className="mt-3 text-xs text-kabu-muted">Free. iOS only. Currently in beta.</p>
          </div>
        </div>
        <div className="order-2 flex justify-center lg:justify-end">
          <PhoneFrame>
            <LearnPathScreen />
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
}
