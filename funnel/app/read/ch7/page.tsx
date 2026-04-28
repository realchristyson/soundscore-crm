"use client";

import ChapterShell from "../components/ChapterShell";
import Callout from "../components/Callout";
import Worksheet from "../components/Worksheet";
import ChapterDivider from "../components/ChapterDivider";
import { getChapter } from "../chapters";

export default function Ch7() {
  const c = getChapter("ch7")!;
  return (
    <ChapterShell id="ch7" particleVariant="mixed">
      <Callout variant="insight">
        This is where most artists never go. It&apos;s also where the magic
        lives. Lookalike audiences are how you scale.
      </Callout>

      <p>
        A Lookalike Audience is Meta&apos;s algorithm finding people who behave
        like your best fans — even if they&apos;ve never heard of you.
      </p>

      <Callout variant="watch">
        Full chapter prose coming in the next pass. Hook, framework, and
        worksheet below are locked. Body content (Custom Audiences first, the
        1%-10% slider, why this beats interest targeting, the &ldquo;stacking&rdquo;
        technique) is in progress.
      </Callout>

      <ChapterDivider label="Section 1 — The secret weapon" />

      <h2 className="read-h2">What you&apos;ll do in this chapter</h2>

      <ol>
        <li>Build a Custom Audience from IG engagers, video viewers, or profile visitors</li>
        <li>Create your first Lookalike from that source</li>
        <li>Pick a Lookalike % — start with 1-3%</li>
        <li>Use the Lookalike as the audience in a new ad set</li>
        <li>Stack 1% + 3% + 5% lookalikes for broader reach with quality</li>
      </ol>

      <Worksheet
        chapterId="ch7"
        title="Chapter 7 Worksheet"
        fields={c.worksheetFields!}
        checkboxes={c.worksheetCheckboxes!}
      />
    </ChapterShell>
  );
}
