import React, { createContext, useContext, useState } from "react";

type Lang = "en" | "ja";

const LangContext = createContext<{
  lang: Lang;
  toggleLang: () => void;
}>({
  lang: "en",
  toggleLang: () => {},
});

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = () => setLang((prev) => (prev === "en" ? "ja" : "en"));

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);

export function translate<T>(text: { en: T; ja: T }): T {
  const { lang } = useLang();
  return text[lang];
};

export function T(en: string, ja: string ): string {
  const { lang } = useLang();
  return lang === "en" ? en : ja
};
