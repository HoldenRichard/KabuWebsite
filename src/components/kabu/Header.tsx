import { KabuLogo } from "./Logo";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8 sm:py-4">
        <a href="#top" className="flex items-center gap-2">
          <KabuLogo className="h-8 w-8" />
          <span className="text-lg font-bold tracking-tight text-foreground">Kabu</span>
        </a>
        <button
          onClick={() => scrollToId("final-cta")}
          className="rounded-lg bg-kabu-green px-4 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02] hover:bg-kabu-green-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kabu-green sm:px-5 sm:text-base"
        >
          <span className="sm:hidden">Join Beta</span>
          <span className="hidden sm:inline">Join the Beta</span>
        </button>
      </div>
    </header>
  );
}
