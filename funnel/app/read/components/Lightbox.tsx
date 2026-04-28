"use client";

import { ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function ScreenshotFrame({ children, caption }: { children: ReactNode; caption?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.figure
        className="screenshot-frame"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        onClick={() => setOpen(true)}
      >
        {children}
        {caption && (
          <figcaption
            style={{
              padding: "0.75rem 1rem",
              borderTop: "1px solid var(--read-line)",
              fontSize: 13,
              color: "var(--read-muted)",
              fontFamily: "var(--font-jetbrains), monospace",
              letterSpacing: "0.04em",
            }}
          >
            {caption}
          </figcaption>
        )}
      </motion.figure>

      <AnimatePresence>
        {open && (
          <motion.div
            className="lightbox"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              style={{ cursor: "default" }}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ScreenshotFrame;
