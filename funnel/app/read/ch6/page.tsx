"use client";

import ChapterShell from "../components/ChapterShell";
import Callout from "../components/Callout";
import Worksheet from "../components/Worksheet";
import ChapterDivider from "../components/ChapterDivider";
import { getChapter } from "../chapters";

export default function Ch6() {
  const c = getChapter("ch6")!;
  return (
    <ChapterShell id="ch6" particleVariant="mixed">
      <Callout variant="insight">
        This is the chapter where you actually launch. Take your time. Follow
        each step. Don&apos;t skip ahead.
      </Callout>

      <p>
        The numbers on the dashboard aren&apos;t lying to you. You just
        haven&apos;t learned how to read them yet. After this chapter, that
        changes.
      </p>

      <Callout variant="watch">
        Full chapter prose coming in the next pass. Hook, structure, and
        worksheet below are locked. Body content (Choose Objective, $5/day
        budget setup, audience targeting with Advantage+, placements, ad
        creative, plus 3 inline campaign templates: Engagement / Traffic /
        Video Views) is in progress.
      </Callout>

      <ChapterDivider label="Section 1 — Launching your first $5/day" />

      <h2 className="read-h2">What you&apos;ll do in this chapter</h2>

      <ol>
        <li>Create Campaign → Choose Objective (recommend Engagement or Video Views for first-timers)</li>
        <li>Set your daily budget — why $5/day is the move</li>
        <li>Audience targeting — locations, age 18-35, interests</li>
        <li>Placements — let Advantage+ do the work</li>
        <li>Ad creative — primary text, headline, CTA, where the click goes</li>
      </ol>

      <p>
        After you hit publish, walk away. Don&apos;t touch it for 48 hours.
        Meta&apos;s algorithm needs time to learn. Resist the urge to mess
        with it.
      </p>

      <Worksheet
        chapterId="ch6"
        title="Chapter 6 Worksheet"
        fields={c.worksheetFields!}
        checkboxes={c.worksheetCheckboxes!}
      />
    </ChapterShell>
  );
}
