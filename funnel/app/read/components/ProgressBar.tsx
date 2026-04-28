"use client";

import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [scaleX, setScaleX] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const v = max > 0 ? h.scrollTop / max : 0;
      setScaleX(Math.min(1, Math.max(0, v)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return <div className="progress-bar" style={{ transform: `scaleX(${scaleX})` }} />;
}
