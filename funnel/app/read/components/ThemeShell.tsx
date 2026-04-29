"use client";

import { ReactNode, useEffect, useState } from "react";

export default function ThemeShell({ children }: { children: ReactNode }) {
  const [light, setLight] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem("read.theme");
    if (saved === "light") setLight(true);
  }, []);

  const toggle = () => {
    setLight((v) => {
      const next = !v;
      if (typeof window !== "undefined") {
        window.localStorage.setItem("read.theme", next ? "light" : "dark");
      }
      return next;
    });
  };

  return (
    <div className={`read-root ${light ? "light" : "dark"}`}>
      <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
        {light ? "DARK" : "LIGHT"}
      </button>
      {children}
    </div>
  );
}
