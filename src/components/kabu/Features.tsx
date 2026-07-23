import { FadeUp } from "./FadeUp";
import paperTradingImg from "@/assets/kabu-paper-trading.png";
import progressImg from "@/assets/kabu-progress.png";

function PhoneMock({ children, label }: { children?: React.ReactNode; label: string }) {
  return (
    <div className="relative mx-auto w-[240px] sm:w-[280px]">
      <div className="rounded-[2.5rem] border-[10px] border-black bg-black shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]">
        <div className="relative h-[590px] overflow-hidden rounded-[1.75rem] bg-white">
          {children ?? (
            <div className="flex h-full items-center justify-center text-xs text-kabu-muted">
              {label}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function LessonScreen() {
  return (
    <div className="flex h-full flex-col p-5">
      <div className="text-[10px] font-semibold uppercase tracking-wider text-kabu-muted">
        Unit 1 · Lesson 3
      </div>
      <h4 className="mt-2 text-lg font-bold text-foreground leading-tight">What's a P/E ratio?</h4>
      <p className="mt-3 text-xs leading-relaxed text-kabu-muted">
        It's a stock's price divided by its earnings per share. High P/E = investors expect growth.
        Low P/E = a bargain or a warning.
      </p>
      <div className="mt-5 text-xs font-semibold text-foreground">
        Apple trades at $180. EPS is $6. What's the P/E?
      </div>
      <div className="mt-3 space-y-2">
        {["15", "30", "60"].map((v, i) => (
          <div
            key={v}
            className={`rounded-lg border p-3 text-sm font-medium ${
              i === 1
                ? "border-kabu-green bg-kabu-green/10 text-foreground"
                : "border-black/10 text-foreground"
            }`}
          >
            {v}
          </div>
        ))}
      </div>
      <div className="mt-auto rounded-lg bg-kabu-green py-3 text-center text-sm font-semibold text-white">
        Check
      </div>
    </div>
  );
}

function ImageScreen({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="h-full w-full object-cover object-top" />;
}

const FEATURES = [
  {
    title: "Learn by doing",
    body: "Bite-sized lessons in plain language. No jargon, no textbooks, no condescension. If we use a term, we define it inline.",
    mock: <LessonScreen />,
    label: "Lesson",
    reverse: false,
  },
  {
    title: "Trade with virtual money",
    body: "Run a $25K paper-trading portfolio against real market data. Buy, sell, and watch your P&L move day by day — without risking a dollar of your own. Build the muscle before the money's on the line.",
    mock: <ImageScreen src={paperTradingImg} alt="Kabu paper trading portfolio screen" />,
    label: "Paper trading",
    reverse: true,
  },
  {
    title: "Stay hooked",
    body: "Levels (Newcomer → Owner), XP, streaks, daily challenges, and badges. Track your scenarios, lessons, and stars as you climb. Build the habit before you build the portfolio.",
    mock: <ImageScreen src={progressImg} alt="Kabu progress and gamification screen" />,
    label: "Progress",
    reverse: false,
  },
];

export function Features() {
  return (
    <section className="bg-kabu-soft py-16 sm:py-24">
      <div className="mx-auto max-w-6xl space-y-20 px-5 sm:px-8 sm:space-y-28">
        {FEATURES.map((f) => (
          <FadeUp key={f.title}>
            <div
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                f.reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {f.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-kabu-muted">{f.body}</p>
              </div>
              <div className="flex justify-center">
                <PhoneMock label={f.label}>{f.mock}</PhoneMock>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
