"use client";

import ChapterShell from "../components/ChapterShell";
import Callout from "../components/Callout";
import Worksheet from "../components/Worksheet";
import ChapterDivider from "../components/ChapterDivider";
import { getChapter } from "../chapters";

export default function Ch4() {
  const c = getChapter("ch4")!;
  return (
    <ChapterShell id="ch4" particleVariant="green">
      <Callout variant="insight">
        Business Manager is the foundation. Ads Manager is the cockpit. Time to
        climb in.
      </Callout>

      <p>
        Once your Business Manager is live, you add an Ad Account inside it and
        plug in your billing. This is where Meta starts charging you — and
        where most artists get nervous and freeze.
      </p>

      <Callout variant="watch">
        Full chapter prose coming in the next pass. The structure and worksheet
        below are locked. Body content (billing thresholds, daily spending
        limits, the Campaigns / Ad Sets / Ads layout, Account Status indicators)
        is in progress.
      </Callout>

      <ChapterDivider label="Section 1 — The cockpit tour" />

      <h2 className="read-h2">What you&apos;ll do in this chapter</h2>

      <ol>
        <li>Add an Ad Account inside Business Manager</li>
        <li>Set up billing and payment method</li>
        <li>Understand your daily spending limit (and why Meta starts you low)</li>
        <li>Tour the Campaigns / Ad Sets / Ads dashboard</li>
        <li>Read the Account Status indicator</li>
      </ol>

      <Worksheet
        chapterId="ch4"
        title="Chapter 4 Worksheet"
        fields={c.worksheetFields!}
        checkboxes={c.worksheetCheckboxes!}
      />
    </ChapterShell>
  );
}
