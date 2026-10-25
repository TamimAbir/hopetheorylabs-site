"use client";

import { useContent, useLang, type Lang } from "./LanguageProvider";

export function LanguageToggle() {
  const content = useContent();
  const { lang, setLang } = useLang();

  return (
    <span role="group" aria-label={content.header.language} className="inline-flex items-center gap-0.5 rounded-md border border-paper/15 p-0.5 text-xs font-medium">
      <button
        type="button"
        aria-pressed={lang === "en"}
        onClick={() => setLang("en")}
        className={`min-h-9 rounded px-2 uppercase tracking-widest transition-colors ${
          lang === "en" ? "bg-paper/10 text-paper" : "text-paper/50 hover:text-paper"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        lang="bn"
        aria-pressed={lang === "bn"}
        onClick={() => setLang("bn")}
        className={`min-h-9 rounded px-2 font-bangla transition-colors ${
          lang === "bn" ? "bg-paper/10 text-paper" : "text-paper/50 hover:text-paper"
        }`}
      >
        বাংলা
      </button>
    </span>
  );
}
