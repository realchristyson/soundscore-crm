"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { loadWorksheet, saveWorksheet } from "./worksheetStore";

type Props = {
  chapterId: string;
  fields: string[];
  checkboxes?: string[];
  title?: string;
};

export default function Worksheet({ chapterId, fields, checkboxes = [], title = "Your Worksheet" }: Props) {
  const [vals, setVals] = useState<string[]>(() => fields.map(() => ""));
  const [checks, setChecks] = useState<boolean[]>(() => checkboxes.map(() => false));
  const [toast, setToast] = useState(false);

  useEffect(() => {
    const ws = loadWorksheet(chapterId);
    if (ws) {
      setVals(fields.map((_, i) => ws.fields[i] ?? ""));
      setChecks(checkboxes.map((_, i) => ws.checks[i] ?? false));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapterId]);

  const onSave = () => {
    saveWorksheet(chapterId, { fields: vals, checks, savedAt: Date.now() });
    setToast(true);
    setTimeout(() => setToast(false), 2000);
  };

  return (
    <motion.div
      className="worksheet"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5 }}
    >
      <h3>{title}</h3>
      <div className="worksheet-sub">Your answers save automatically in this browser.</div>

      {fields.map((label, i) => (
        <div key={i}>
          <label htmlFor={`${chapterId}-f${i}`}>{label}</label>
          {label.length > 60 ? (
            <textarea
              id={`${chapterId}-f${i}`}
              rows={3}
              value={vals[i]}
              onChange={(e) => setVals((v) => v.map((x, j) => (j === i ? e.target.value : x)))}
            />
          ) : (
            <input
              type="text"
              id={`${chapterId}-f${i}`}
              value={vals[i]}
              onChange={(e) => setVals((v) => v.map((x, j) => (j === i ? e.target.value : x)))}
            />
          )}
        </div>
      ))}

      {checkboxes.map((label, i) => (
        <label key={i} className="check-row">
          <input
            type="checkbox"
            checked={checks[i]}
            onChange={(e) => setChecks((c) => c.map((x, j) => (j === i ? e.target.checked : x)))}
          />
          <span>{label}</span>
        </label>
      ))}

      <button className="save-btn" onClick={onSave}>
        Save Answers
      </button>

      {toast && (
        <motion.div
          className="toast"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          ✓ Saved
        </motion.div>
      )}
    </motion.div>
  );
}
