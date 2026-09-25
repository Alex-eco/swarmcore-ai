import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SwarmCore — Multi-Agent AI & Swarm Intelligence",
  description: "Researching the coordination layer for autonomous AI agents across cloud and edge environments.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
