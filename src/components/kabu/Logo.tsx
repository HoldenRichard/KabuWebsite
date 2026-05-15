import logo from "@/assets/kabu-logo.png";

export function KabuLogo({ className = "h-8 w-8" }: { className?: string }) {
  return <img src={logo} alt="Kabu logo" className={className} />;
}
