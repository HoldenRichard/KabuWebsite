import { FadeUp } from "./FadeUp";

export function FinalCTA() {
  return (
    <section id="final-cta" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <FadeUp>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Ready to start?
          </h2>
        </FadeUp>
        <FadeUp delay={80}>
          <a
            href="https://testflight.apple.com/join/n99rSFvg"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-kabu-green px-8 py-4 text-base font-bold text-white transition-transform duration-200 hover:scale-[1.02] hover:bg-kabu-green-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kabu-green sm:w-auto sm:text-lg"
          >
            Download on TestFlight
          </a>
          <p className="mt-3 text-sm text-kabu-muted">Free. iOS only. No credit card.</p>
        </FadeUp>
      </div>
    </section>
  );
}
