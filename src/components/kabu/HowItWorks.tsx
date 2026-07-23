import { FadeUp } from "./FadeUp";

const STEPS = [
  {
    n: "1",
    title: "Take a 2-minute placement quiz",
    body: "5 questions tell us what you already know. No starting from scratch if you don't have to.",
  },
  {
    n: "2",
    title: "Learn by doing, then test under pressure",
    body: "Bite-sized lessons unlock historical market scenarios. Trade through the 2020 crash without knowing it's the 2020 crash.",
  },
  {
    n: "3",
    title: "Unlock the paper trading sandbox",
    body: "Earn $25,000 in virtual money after Unit 4. Practice trading real markets with zero risk.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeUp>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How Kabu works
          </h2>
        </FadeUp>
        <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
          {STEPS.map((s, i) => (
            <FadeUp key={s.n} delay={i * 100}>
              <div className="h-full rounded-2xl border border-black/5 bg-kabu-soft p-6 sm:p-7">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-kabu-green text-sm font-bold text-white">
                  {s.n}
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-kabu-muted">{s.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
