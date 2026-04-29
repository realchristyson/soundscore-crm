import { CHAPTERS } from "../chapters";

const KEY = (id: string) => `read.worksheet.${id}`;

export type SavedWorksheet = {
  fields: string[];
  checks: boolean[];
  savedAt: number;
};

export function loadWorksheet(id: string): SavedWorksheet | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY(id));
    return raw ? (JSON.parse(raw) as SavedWorksheet) : null;
  } catch {
    return null;
  }
}

export function saveWorksheet(id: string, data: SavedWorksheet) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY(id), JSON.stringify(data));
  window.dispatchEvent(new Event("worksheet-saved"));
}

export function isChapterComplete(id: string) {
  const ws = loadWorksheet(id);
  if (!ws) return false;
  const hasField = ws.fields.some((f) => f && f.trim().length > 0);
  const hasCheck = ws.checks.some(Boolean);
  return hasField || hasCheck;
}

export function downloadAllAnswers() {
  if (typeof window === "undefined") return;
  const lines: string[] = [];
  lines.push("THE $5/DAY METHOD — MY WORKSHEET ANSWERS");
  lines.push("By Chris Tyson");
  lines.push("Saved on: " + new Date().toLocaleString());
  lines.push("=" .repeat(50));
  lines.push("");

  for (const c of CHAPTERS) {
    if (!c.worksheetFields && !c.worksheetCheckboxes) continue;
    const ws = loadWorksheet(c.id);
    lines.push(`CHAPTER ${c.num ?? ""}: ${c.title.toUpperCase()}`);
    lines.push("-".repeat(40));
    if (!ws) {
      lines.push("(not yet completed)");
      lines.push("");
      continue;
    }
    (c.worksheetFields ?? []).forEach((label, i) => {
      lines.push(`Q: ${label}`);
      lines.push(`A: ${ws.fields[i] || "(blank)"}`);
      lines.push("");
    });
    (c.worksheetCheckboxes ?? []).forEach((label, i) => {
      const checked = ws.checks[i] ? "[X]" : "[ ]";
      lines.push(`${checked} ${label}`);
    });
    lines.push("");
  }

  const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "5-day-method-worksheet.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
