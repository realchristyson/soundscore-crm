"use client";

import ChapterShell from "../components/ChapterShell";
import Callout from "../components/Callout";
import Worksheet from "../components/Worksheet";
import ChapterDivider from "../components/ChapterDivider";
import ScalingDecisionTree from "../illustrations/ScalingDecisionTree";
import { getChapter } from "../chapters";

export default function Ch8() {
  const c = getChapter("ch8")!;
  return (
    <ChapterShell id="ch8" particleVariant="mixed">
      <Callout variant="insight">
        Every artist who burns money on ads has the same problem. They don&apos;t
        know what numbers actually matter.
      </Callout>

      <p>
        You logged into Ads Manager. You saw forty columns of data. You panicked.
        You clicked around for ten minutes, didn&apos;t understand any of it, and
        closed the tab. That&apos;s most artists. That&apos;s probably been you.
      </p>

      <p>
        Here&apos;s the truth nobody tells you. Out of all those columns, only
        four actually matter. The rest is noise designed to look impressive in
        case agencies need to charge you more. Once you learn these four
        numbers, the dashboard stops being scary and starts being useful.
      </p>

      <p>
        This chapter is the one that turns you into someone who actually grows.
        Most artists give up before they get here. The ones who finish this
        chapter and run the system for thirty days are the ones who put their
        bag up.
      </p>

      <ChapterDivider label="Section 1 — The four numbers" />

      <h2 className="read-h2">CPM, CTR, Cost per Result, Frequency</h2>

      <p>
        Memorize these four. Ignore everything else for now.
      </p>

      <p>
        <strong>CPM (Cost per 1,000 impressions).</strong> This tells you how
        expensive it is to put your ad in front of 1,000 people. If your CPM
        is climbing, your creative is getting stale or your audience is
        burnt out. If it&apos;s dropping, your ad is fresh and Meta wants to
        show it. For music ads in the US, $8-$15 CPM is normal. Above $25
        means something&apos;s wrong.
      </p>

      <p>
        <strong>CTR (Click-through rate).</strong> Out of the people who saw
        your ad, what percent clicked? This tells you if your hook works.
        A CTR over 1% is good. Over 2% is great. Under 0.5% means your
        creative isn&apos;t stopping the scroll.
      </p>

      <p>
        <strong>Cost per Result.</strong> This is your real ROI metric. If
        you&apos;re running a Video Views campaign, this is cost per video
        view. If you&apos;re running Traffic, it&apos;s cost per click. If
        you&apos;re running Engagement, it&apos;s cost per engagement.
        Whatever you optimized for — this is the price tag.
      </p>

      <p>
        <strong>Frequency.</strong> The average number of times one person has
        seen your ad. When this hits 3 or higher, your audience is burnt out
        and your CPM will start spiking. Time to refresh creative or expand
        audience.
      </p>

      <Callout variant="pro">
        Custom-column the dashboard. In Ads Manager, click Columns → Customize
        and build a view with just these four metrics plus &ldquo;Amount
        Spent.&rdquo; Save it as your default. Now every time you log in, you
        only see what matters.
      </Callout>

      <ChapterDivider label="Section 2 — Kill, leave, or scale" />

      <h2 className="read-h2">The three decisions you can make</h2>

      <p>
        Every ad you ever run will fall into one of three buckets. Kill it.
        Leave it alone. Or scale it. There&apos;s no fourth option.
      </p>

      <p>
        <strong>KILL the ad</strong> when after 3-5 days of running, your
        Cost per Result is way above what you can afford, your CTR is under
        0.5%, and your CPM is climbing. The numbers are bad and they&apos;re
        getting worse. Pull it. Don&apos;t feel bad. You learned what
        doesn&apos;t work, and that&apos;s data you can use.
      </p>

      <p>
        <strong>LEAVE the ad alone</strong> when the numbers are decent but
        not amazing. CTR around 1%. Cost per result is in your range. CPM
        stable. Meta&apos;s algorithm is still learning. Touching the ad
        right now resets the learning phase and you start over. Resist the
        urge. Sit on your hands. Check it again in 3 more days.
      </p>

      <p>
        <strong>SCALE the ad</strong> when after 5 full days, the numbers are
        good and stable. CTR over 1%. Cost per result low. CPM holding. Now
        we run the doubling formula. This is where most artists screw it up.
      </p>

      <Callout variant="watch">
        The biggest mistake new advertisers make is scaling too fast. They
        see a winning ad and triple the budget overnight. Meta&apos;s
        algorithm panics, the learning phase resets, and the ad that was
        working stops working. Slow is fast.
      </Callout>

      <ChapterDivider label="Section 3 — The doubling formula" />

      <h2 className="read-h2">How to scale without breaking it</h2>

      <p>
        This is the system. Run it exactly. Don&apos;t freestyle.
      </p>

      <p>
        <strong>Step 1.</strong> Run your ad at $5/day for 5 full days. Do
        not touch it. Do not pause. Do not edit the creative. Do not change
        the audience. 5 days of pure learning.
      </p>

      <p>
        <strong>Step 2.</strong> If after 5 days the numbers are good,
        duplicate the ad set and double the budget. The new copy runs at
        $10/day. Leave the original $5/day version running too. Yes, both at
        the same time. This is on purpose — it gives Meta two horses to
        race and protects you if the scaled version regresses.
      </p>

      <p>
        <strong>Step 3.</strong> Wait 3 more days. If the $10/day copy is
        still performing, duplicate again and double to $20/day.
      </p>

      <p>
        <strong>Step 4.</strong> Keep going at intervals — $20 to $50 to
        $100 to $200/day. Always wait at least 3 days between doublings.
        Always keep the lower-budget versions running until you&apos;re sure
        the higher-budget version has stabilized.
      </p>

      <ScalingDecisionTree />

      <p>
        Why doubling specifically? Meta&apos;s learning phase resets when
        you raise the budget more than ~50% at a time. Doubling stays just
        inside the algorithm&apos;s tolerance. Tripling resets everything
        and you waste another 5 days of learning.
      </p>

      <Callout variant="pro">
        Don&apos;t scale on weekends. Meta&apos;s algorithm behaves
        differently on Saturdays and Sundays — different audience behavior,
        different competition, different costs. Scale on Tuesday or
        Wednesday so the new budget gets full weekday data before the
        weekend hits.
      </Callout>

      <ChapterDivider label="Section 4 — Reading the dashboard like a pro" />

      <h2 className="read-h2">What the columns are really telling you</h2>

      <p>
        Once you have the four numbers tracked, here&apos;s how to read them
        as a story.
      </p>

      <p>
        <strong>If CPM is rising and CTR is dropping</strong> — your audience
        is burning out. Refresh the creative or expand the audience.
      </p>

      <p>
        <strong>If CPM is stable but Cost per Result is rising</strong> —
        your hook is working (people see and notice the ad) but it&apos;s not
        converting on the action you optimized for. Check the click
        destination. Is the Spotify page doing its job? Is the YouTube
        thumbnail strong?
      </p>

      <p>
        <strong>If CTR is high but Cost per Result is bad</strong> — same
        problem. People click but don&apos;t take action. The ad is great.
        The destination is failing.
      </p>

      <p>
        <strong>If Frequency is over 3 and CPM is climbing</strong> —
        time to expand audience. Stack lookalikes. Add a new geography.
        Widen the age range.
      </p>

      <p>
        <strong>If everything is good but spend isn&apos;t pacing</strong> —
        Meta can&apos;t find enough people in your audience at your bid.
        Widen the audience.
      </p>

      <ChapterDivider label="Section 5 — The 30-day commitment" />

      <h2 className="read-h2">Why 30 days, not 30 minutes</h2>

      <p>
        Here&apos;s the part most artists hate. The system needs 30 days to
        actually work. Not 3 days. Not a week. 30.
      </p>

      <p>
        Why? Because Meta&apos;s algorithm needs time to optimize. Because
        scaling has built-in waiting periods. Because the four numbers only
        become reliable signals after enough impressions have run. And
        because creative fatigue, audience expansion, and cost-per-result
        trends only become visible over weeks, not days.
      </p>

      <p>
        Most artists give up at day 6. They look at the dashboard, panic at
        a single bad day, kill everything, and decide ads &ldquo;don&apos;t
        work for them.&rdquo; That&apos;s not the algorithm failing — that&apos;s
        impatience failing.
      </p>

      <p>
        The artists who run this system for 30 days don&apos;t just hit their
        first 10,000 monthly listeners. They build the muscle to keep growing
        for the rest of their career.
      </p>

      <Callout variant="insight">
        $5/day × 30 days = $150 total. For $150, you get a real audience, real
        data, real creative wins, and a system you can repeat for the rest
        of your life as an artist. There is no other ad strategy in music
        with that ROI.
      </Callout>

      <ChapterDivider label="Section 6 — From here" />

      <h2 className="read-h2">You finished the book. Now run the play.</h2>

      <p>
        This is the system. It works. It&apos;s worked for thousands of
        independent artists who got tired of boosting and decided to run
        real ads instead.
      </p>

      <p>
        Run it for 30 days. Most artists won&apos;t. The ones who do become
        the artists who actually grow. That&apos;s the move.
      </p>

      <Worksheet
        chapterId="ch8"
        title="Chapter 8 Worksheet"
        fields={c.worksheetFields!}
        checkboxes={c.worksheetCheckboxes!}
      />
    </ChapterShell>
  );
}
