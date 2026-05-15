import { useEffect, useRef, useState } from "react";
import { FadeUp } from "./FadeUp";

// Approx S&P 500 monthly closes Feb 2020 -> Dec 2020, normalized to 100 at start
const POINTS: { m: string; v: number }[] = [
  { m: "Feb", v: 100 },
  { m: "Mar 23", v: 66 }, // -34%
  { m: "Apr", v: 78 },
  { m: "May", v: 84 },
  { m: "Jun", v: 90 },
  { m: "Jul", v: 96 },
  { m: "Aug", v: 102 }, // recovered
  { m: "Sep", v: 100 },
  { m: "Oct", v: 99 },
  { m: "Nov", v: 109 },
  { m: "Dec", v: 116 }, // +16%
];

const W = 600;
const H = 240;
const PAD = 24;

function buildPath() {
  const minV = 60;
  const maxV = 120;
  return POINTS.map((p, i) => {
    const x = PAD + (i / (POINTS.length - 1)) * (W - PAD * 2);
    const y = H - PAD - ((p.v - minV) / (maxV - minV)) * (H - PAD * 2);
    return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(" ");
}

function CountUp({ to, suffix = "", duration = 1200 }: { to: number; suffix?: string; duration?: number }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);
  const sign = to > 0 ? "+" : "";
  return <span className="tabular-nums">{sign}{v.toFixed(0)}{suffix}</span>;
}

export function Scenario() {
  const [revealed, setRevealed] = useState(false);
  const [choice, setChoice] = useState<string | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (!revealed) return;
    const el = pathRef.current;
    if (!el) return;
    const length = el.getTotalLength();
    el.style.strokeDasharray = `${length}`;
    el.style.strokeDashoffset = `${length}`;
    el.getBoundingClientRect(); // reflow
    el.style.transition = "stroke-dashoffset 1500ms ease-out";
    el.style.strokeDashoffset = "0";
  }, [revealed]);

  function handle(c: string) {
    setChoice(c);
    setRevealed(true);
  }

  function reset() {
    setRevealed(false);
    setChoice(null);
  }

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <FadeUp>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What would you do?
          </h2>
        </FadeUp>

        <FadeUp delay={80}>
          <div className="mt-8 rounded-2xl border border-black/5 bg-kabu-soft p-6 sm:p-8">
            <p className="text-base leading-relaxed text-foreground sm:text-lg">
              It's <span className="font-bold">February 2020</span>. You have{" "}
              <span className="font-bold text-kabu-green">$10,000</span>. The market just dropped{" "}
              <span className="font-bold">10%</span> in a single day.
            </p>
          </div>
        </FadeUp>

        {!revealed ? (
          <FadeUp delay={160}>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["Buy the dip", "Sell everything", "Hold steady"].map((c) => (
                <button
                  key={c}
                  onClick={() => handle(c)}
                  className="rounded-lg border-2 border-foreground bg-white px-5 py-4 text-sm font-bold text-foreground transition-transform duration-200 hover:scale-[1.02] hover:bg-foreground hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kabu-green"
                >
                  {c}
                </button>
              ))}
            </div>
          </FadeUp>
        ) : (
          <div className="mt-6 animate-in fade-in duration-500">
            <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm sm:p-6">
              <div className="mb-3 flex items-center justify-between text-xs text-kabu-muted">
                <span>S&amp;P 500 · Feb–Dec 2020</span>
                <span>Your choice: <span className="font-semibold text-foreground">{choice}</span></span>
              </div>
              <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full">
                {[0, 1, 2, 3].map((i) => (
                  <line
                    key={i}
                    x1={PAD}
                    x2={W - PAD}
                    y1={PAD + (i * (H - PAD * 2)) / 3}
                    y2={PAD + (i * (H - PAD * 2)) / 3}
                    stroke="black"
                    strokeOpacity="0.06"
                  />
                ))}
                <path
                  ref={pathRef}
                  d={buildPath()}
                  fill="none"
                  stroke="oklch(0.74 0.19 145)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* End dot */}
                <circle
                  cx={PAD + (W - PAD * 2)}
                  cy={H - PAD - ((116 - 60) / 60) * (H - PAD * 2)}
                  r="4"
                  fill="oklch(0.74 0.19 145)"
                />
              </svg>
              <div className="mt-2 flex justify-between px-2 text-[10px] text-kabu-muted">
                <span>Feb</span><span>Mar</span><span>Jun</span><span>Sep</span><span>Dec</span>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-black/5 bg-kabu-soft p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-kabu-muted">
                What actually happened
              </div>
              <p className="mt-2 text-base leading-relaxed text-foreground">
                The market fell another <span className="font-bold">24%</span> before bottoming on March 23.
                By August it had fully recovered. Year-end:{" "}
                <span className="font-bold text-kabu-green"><CountUp to={16} suffix="%" /></span>.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg border border-black/5 bg-white p-4">
                  <div className="text-[11px] font-semibold uppercase text-kabu-muted">If you held</div>
                  <div className="mt-1 text-2xl font-bold text-kabu-green"><CountUp to={16} suffix="%" /></div>
                </div>
                <div className="rounded-lg border border-black/5 bg-white p-4">
                  <div className="text-[11px] font-semibold uppercase text-kabu-muted">If you bought the dip</div>
                  <div className="mt-1 text-2xl font-bold text-kabu-green"><CountUp to={47} suffix="%" /></div>
                  <div className="text-[10px] text-kabu-muted">on the additional shares</div>
                </div>
                <div className="rounded-lg border border-black/5 bg-white p-4">
                  <div className="text-[11px] font-semibold uppercase text-kabu-muted">If you sold</div>
                  <div className="mt-1 text-2xl font-bold text-foreground">−<CountUp to={10} suffix="%" /></div>
                  <div className="text-[10px] text-kabu-muted">locked-in loss</div>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-foreground p-5 text-white">
              <span className="text-sm font-medium">
                Want 12 more scenarios like this in your pocket?
              </span>
              <div className="flex gap-2">
                <button
                  onClick={reset}
                  className="rounded-md border border-white/20 px-3 py-2 text-xs font-medium hover:bg-white/10"
                >
                  Reset
                </button>
                <button
                  onClick={() => document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })}
                  className="rounded-md bg-kabu-green px-4 py-2 text-sm font-bold text-white transition-transform duration-200 hover:scale-[1.02] hover:bg-kabu-green-hover"
                >
                  Join the Beta →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
