"use client";

import ChapterShell from "../components/ChapterShell";
import Callout from "../components/Callout";
import Worksheet from "../components/Worksheet";
import ChapterDivider from "../components/ChapterDivider";
import { getChapter } from "../chapters";

export default function Ch3() {
  const c = getChapter("ch3")!;
  return (
    <ChapterShell id="ch3" particleVariant="green">
      <Callout variant="insight">
        Before you run a single ad, you need a Business Manager account. Skip
        it, and everything else gets messy fast.
      </Callout>

      <p>
        This chapter walks you through setting up Meta Business Manager from
        scratch — the foundation you build everything else on top of.
      </p>

      <Callout variant="watch">
        Full chapter prose coming in the next pass. The hook, structure, and
        worksheet below are locked. The body content (1,500+ words on
        business.facebook.com setup, Instagram + Facebook Page connection, why
        you need a separate business email, what &ldquo;Business Portfolio&rdquo;
        actually means) is in progress.
      </Callout>

      <ChapterDivider label="Section 1 — The 6 setup steps" />

      <h2 className="read-h2">What you&apos;ll do in this chapter</h2>

      <ol>
        <li>Create your Business Manager at business.facebook.com</li>
        <li>Enter your business info — name, your name, work email</li>
        <li>Tour the Business Manager Home dashboard</li>
        <li>Set up your business profile</li>
        <li>Connect your Instagram account</li>
        <li>Connect (or create) your Facebook Page</li>
      </ol>

      <p>
        When this chapter ships in full, every step will have screenshots, the
        exact buttons to click, and the &ldquo;why&rdquo; behind each setting so
        you don&apos;t just follow blindly — you understand the system.
      </p>

      <Worksheet
        chapterId="ch3"
        title="Chapter 3 Worksheet"
        fields={c.worksheetFields!}
        checkboxes={c.worksheetCheckboxes!}
      />
    </ChapterShell>
  );
}
