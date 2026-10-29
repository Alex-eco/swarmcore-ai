import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "SwarmCore — AI-агенты для замены и валидации компонентов",
  description: "AI-агенты для поиска замен электронным компонентам, сравнения даташитов, проверки совместимости и подготовки отчётов валидации для инженера.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
