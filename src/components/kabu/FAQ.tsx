import { useState } from "react";
import { FadeUp } from "./FadeUp";

const FAQS: { q: string; a: string }[] = [
  {
    q: "Is this real money?",
    a: "No. Kabu uses virtual money to teach. You'll never deposit a cent.",
  },
  {
    q: "Do I need to know anything about investing first?",
    a: "No. Kabu starts with 'What is a stock?' and builds from there.",
  },
  {
    q: "Is it free?",
    a: "Yes. The beta is free. We may add optional premium scenario packs later, but the core learning experience will always be free.",
  },
  {
    q: "When will it be on the App Store?",
    a: "Soon. The beta runs on TestFlight while we polish based on early user feedback.",
  },
  {
    q: "What's the minimum age?",
    a: "There's no age gate. Kabu is built for 18–22-year-olds, but if you're 13 and curious about the market, you're exactly who we want on the app.",
  },
  {
    q: "Will Kabu give me stock tips?",
    a: "No. Kabu is an education app, not a trading platform. We don't recommend stocks. Ever.",
  },
  {
    q: "How long are the lessons?",
    a: "Most are under 3 minutes. Designed for between-class breaks.",
  },
  { q: "Android version?", a: "iOS first. Android is on the roadmap once we hit our beta goals." },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-black/10">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kabu-green"
      >
        <span className="text-base font-semibold text-foreground sm:text-lg">{q}</span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center text-kabu-green transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div
        className="grid overflow-hidden transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pr-10 text-sm leading-relaxed text-kabu-muted sm:text-base">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section className="bg-kabu-soft py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <FadeUp>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Questions you're probably about to ask
          </h2>
        </FadeUp>
        <FadeUp delay={80}>
          <div className="mt-8 border-t border-black/10">
            {FAQS.map((f) => (
              <Item key={f.q} {...f} />
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
