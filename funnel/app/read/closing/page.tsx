"use client";

import ChapterShell from "../components/ChapterShell";
import Callout from "../components/Callout";
import ConfettiCelebration from "../components/ConfettiCelebration";

export default function Closing() {
  return (
    <ChapterShell id="closing" particleVariant="mixed">
      <ConfettiCelebration />

      <Callout variant="insight">
        You started this book hitting the boost button and praying. You finished
        it knowing how to run real Meta Ads at $5/day. That&apos;s not a small
        upgrade. That&apos;s a different career.
      </Callout>

      <p>
        Take a second. Acknowledge it. Most artists who buy a book like this
        don&apos;t even open it. The ones who open it skim. The ones who
        actually finish, like you just did, are in the rare 5%. You earned a
        round of applause for that alone.
      </p>

      <h2 className="read-h2">But here&apos;s the truth</h2>

      <p>
        Reading the system isn&apos;t running the system. Knowing the four
        numbers isn&apos;t the same as watching them every morning. Setting up
        a Lookalike isn&apos;t the same as scaling one for thirty days.
      </p>

      <p>
        This book gave you the playbook. The next thirty days are about
        actually running the play. $5/day. Five days of learning. Three days
        between doublings. Real numbers. Real fans. No shortcuts.
      </p>

      <p>
        You&apos;ll mess up. The first ad you scale will probably regress at
        $20/day. Your first lookalike won&apos;t hit. Your CPM will spike on
        a random Tuesday and you&apos;ll have no idea why. That&apos;s normal.
        That&apos;s the work. Push through.
      </p>

      <h2 className="read-h2">If you want the next level</h2>

      <p>
        $5/day is the start. Once you&apos;re running real ads and seeing real
        growth, the question becomes, how do you scale this beyond $5/day
        without burning your savings? How do you fund $1,000/day campaigns?
        How do you build the credit and the capital to run this like a real
        music business?
      </p>

      <p>
        That&apos;s what Music Funding Academy is for. It&apos;s where artists
        who are ready to graduate from $5/day go to learn the financial side
        of the music business, credit repair, business funding, advanced ad
        strategy, and the community of artists who are actually doing it.
      </p>

      <p>
        If you ran this book&apos;s system for a week and it clicked, MFA is
        the next step. Not for everyone. Not right away. But when you&apos;re
        ready, the door is open.
      </p>

      <p>
        Until then, run the play. Keep it $5/day. Build slow. Build right.
      </p>

      <p style={{ marginTop: "2rem" }}>
        Talk soon.
        <br />
        <strong>, Chris</strong>
      </p>

      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <a
          href="https://www.musicfundingacademy.com/skool"
          target="_blank"
          rel="noreferrer"
          className="closing-cta"
        >
          Ready For The Next Level? → Join Music Funding Academy
        </a>
      </div>
    </ChapterShell>
  );
}
