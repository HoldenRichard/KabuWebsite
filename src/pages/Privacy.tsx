import privacyMd from "@/content/privacy.md?raw";
import { LegalPage } from "@/components/kabu/LegalPage";

export function Privacy() {
  return <LegalPage source={privacyMd} />;
}
