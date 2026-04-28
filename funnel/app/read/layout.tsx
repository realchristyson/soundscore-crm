import type { Metadata } from "next";
import "./read.css";
import LenisProvider from "../components/LenisProvider";
import Sidebar from "./components/Sidebar";
import ProgressBar from "./components/ProgressBar";
import ThemeShell from "./components/ThemeShell";

export const metadata: Metadata = {
  title: "The $5/Day Method — Read",
  description: "The Meta Ads playbook for independent artists. By Chris Tyson.",
};

export default function ReadLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeShell>
      <LenisProvider>
        <div className="grain-overlay" aria-hidden />
        <ProgressBar />
        <Sidebar />
        <main className="read-shell">{children}</main>
      </LenisProvider>
    </ThemeShell>
  );
}
