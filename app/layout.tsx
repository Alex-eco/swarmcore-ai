import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "SwarmCore — Multi-Agent AI & Agent Economic Security",
  description: "Infrastructure for coordinating autonomous AI agents, assessing execution costs and risks, and tracking verified outcomes.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
