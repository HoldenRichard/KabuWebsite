import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";

/*
 * Renders ratified legal/support copy from a markdown source imported with ?raw.
 * The .md files are verbatim payloads: this component only handles # / ## headings,
 * paragraphs, **bold** spans, and turns email addresses into mailto links.
 * It must never alter the words themselves.
 */

const EMAIL_SPLIT = /([\w.+-]+@[\w-]+(?:\.[\w-]+)+)/g;

function withEmailLinks(text: string, keyBase: string): ReactNode[] {
  return text.split(EMAIL_SPLIT).map((part, i) =>
    i % 2 === 1 ? (
      <a
        key={`${keyBase}-e${i}`}
        href={`mailto:${part}`}
        className="font-medium text-kabu-green hover:underline"
      >
        {part}
      </a>
    ) : (
      part
    ),
  );
}

function inline(text: string, keyBase: string): ReactNode[] {
  return text
    .split(/(\*\*[^*]+\*\*)/g)
    .filter(Boolean)
    .map((part, i) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={`${keyBase}-b${i}`} className="font-semibold text-foreground">
          {withEmailLinks(part.slice(2, -2), `${keyBase}-b${i}`)}
        </strong>
      ) : (
        withEmailLinks(part, `${keyBase}-t${i}`)
      ),
    );
}

type Block = { kind: "h1" | "h2" | "p" | "q"; text: string };

function parse(source: string): Block[] {
  const blocks: Block[] = [];
  let paragraph: string[] = [];
  const flush = () => {
    if (paragraph.length) {
      blocks.push({ kind: "p", text: paragraph.join(" ") });
      paragraph = [];
    }
  };
  for (const raw of source.split(/\r?\n/)) {
    const line = raw.trimEnd();
    if (line.startsWith("## ")) {
      flush();
      blocks.push({ kind: "h2", text: line.slice(3) });
    } else if (line.startsWith("# ")) {
      flush();
      blocks.push({ kind: "h1", text: line.slice(2) });
    } else if (/^\*\*[^*]+\*\*$/.test(line.trim())) {
      // A line that is entirely bold stands alone (Q&A question lines)
      flush();
      blocks.push({ kind: "q", text: line.trim() });
    } else if (line.trim() === "") {
      flush();
    } else {
      paragraph.push(line);
    }
  }
  flush();
  return blocks;
}

export function LegalPage({ source }: { source: string }) {
  const blocks = parse(source);
  return (
    <div className="min-h-screen bg-white text-foreground">
      <main className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
        <Link
          to="/"
          className="text-sm font-medium text-kabu-muted transition-colors duration-200 hover:text-foreground"
        >
          ← Back to home
        </Link>
        {blocks.map((b, i) =>
          b.kind === "h1" ? (
            <h1
              key={i}
              className="mt-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              {b.text}
            </h1>
          ) : b.kind === "h2" ? (
            <h2 key={i} className="mt-10 text-xl font-bold tracking-tight text-foreground">
              {b.text}
            </h2>
          ) : b.kind === "q" ? (
            <p key={i} className="mt-6 text-[15px] leading-relaxed">
              {inline(b.text, `q${i}`)}
            </p>
          ) : (
            <p key={i} className="mt-4 text-[15px] leading-relaxed text-kabu-muted">
              {inline(b.text, `p${i}`)}
            </p>
          ),
        )}
      </main>
      <Footer />
    </div>
  );
}
