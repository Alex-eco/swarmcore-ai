import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "SwarmCore RF & Electronics — AI-агенты для разработки электроники",
  description: "Мультиагентная автоматизация инженерных задач: научные публикации, элементная база, расчёты и workflow для разработки СВЧ-устройств.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
