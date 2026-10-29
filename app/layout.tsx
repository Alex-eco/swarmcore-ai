import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "SwarmCore — AI-агенты для замены электронных компонентов",
  description: "Поиск альтернатив электронным компонентам, сравнение даташитов, оценка рисков совместимости и рекомендации для проверки инженером.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
