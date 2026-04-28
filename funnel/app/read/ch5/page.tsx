"use client";

import ChapterShell from "../components/ChapterShell";
import Callout from "../components/Callout";
import Worksheet from "../components/Worksheet";
import ChapterDivider from "../components/ChapterDivider";
import { getChapter } from "../chapters";

export default function Ch5() {
  const c = getChapter("ch5")!;
  return (
    <ChapterShell id="ch5" particleVariant="green">
      <Callout variant="insight">
        You don&apos;t run ads on weak content. Period. The fastest way to burn
        $5/day is to put it behind a video nobody likes organically.
      </Callout>

      <p>
        This chapter is about picking the right post — the one piece of content
        that already has the signals proving people want more.
      </p>

      <Callout variant="watch">
        Full chapter prose coming in the next pass. Hook, framework, and
        worksheet below are locked. Body content (3-Metric Test, why like
        count is a trap, how to find Save Rate / Watch Time / Profile Visits in
        Instagram insights, the 5/3/1 Rule) is in progress.
      </Callout>

      <ChapterDivider label="Section 1 — The 3-Metric Test" />

      <h2 className="read-h2">What actually matters when picking a post</h2>

      <ol>
        <li>
          <strong>Save Rate</strong> — saves are the strongest signal. People
          want to come back to this.
        </li>
        <li>
          <strong>Watch Time</strong> — past 50% means your hook actually works.
        </li>
        <li>
          <strong>Profile Visits</strong> — the post is making people curious
          about <em>you</em>, not just the post.
        </li>
      </ol>

      <p>
        The 5/3/1 Rule: look at your last 5 posts. Pick the 3 with the best
        save rate. From those, pick the 1 with the highest watch time. That is
        your first ad.
      </p>

      <Worksheet
        chapterId="ch5"
        title="Chapter 5 Worksheet"
        fields={c.worksheetFields!}
        checkboxes={c.worksheetCheckboxes!}
      />
    </ChapterShell>
  );
}
