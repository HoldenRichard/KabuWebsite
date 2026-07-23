import supportMd from "@/content/support.md?raw";
import { LegalPage } from "@/components/kabu/LegalPage";

export function Support() {
  return <LegalPage source={supportMd} />;
}
