"use client";

import ChapterShell from "../components/ChapterShell";
import Callout from "../components/Callout";
import Worksheet from "../components/Worksheet";
import ChapterDivider from "../components/ChapterDivider";
import BoostVsAdsManager from "../illustrations/BoostVsAdsManager";
import { getChapter } from "../chapters";

export default function Ch2() {
  const c = getChapter("ch2")!;
  return (
    <ChapterShell id="ch2" particleVariant="blue">
      <Callout variant="insight">
        The boost button and Meta Ads Manager look like the same tool. They are not. One is a nightlight. The other is a spotlight you can aim.
      </Callout>

      <p>Picture this. You walk into a dark club. You can&apos;t see anything. Someone hands you two devices.</p>

      <p>The first one is a small nightlight. It glows dim and orange. You can hold it up and see maybe three feet around you. Useful, kind of. But you can&apos;t aim it. You can&apos;t change the color. You can&apos;t make it brighter. You can&apos;t point it at the person you actually want to see.</p>

      <p>The second one is a tactical spotlight. It&apos;s heavier. It&apos;s harder to figure out at first. There are a few buttons. But once you learn it — you can light up the entire dance floor or pinpoint one face in the back. You can dim it, brighten it, change the beam. You can decide exactly who sees the light and who doesn&apos;t.</p>

      <p>That&apos;s boost vs Ads Manager.</p>

      <p>Same company. Same ad inventory. Two completely different tools. One is built so anyone can use it without thinking. The other is built so professionals can actually move money. <strong>You&apos;re a professional now. We&apos;re going to use the spotlight.</strong></p>

      <ChapterDivider label="Section 1 — Side by side" />

      <h2 className="read-h2">What you&apos;re actually choosing between</h2>

      <BoostVsAdsManager />

      <p>Look at the two interfaces side by side. The boost flow is one screen. One button. A slider for budget, a duration in days, and a fake &ldquo;estimated reach&rdquo; number that almost never matches reality. That&apos;s it.</p>

      <p>Ads Manager is a full dashboard. There are campaigns, ad sets, ads. There are metrics, breakdowns, custom columns. There&apos;s targeting, placement, optimization, and pixel control. It looks intimidating because it <em>is</em> bigger. But everything in there exists because professional buyers asked for it. Every box on that screen represents a decision the boost button makes for you in the worst possible way.</p>

      <Callout variant="watch">
        If a tool has fewer than five settings, that&apos;s not simplicity — that&apos;s a hostage situation. Whoever made the tool is making every decision <em>for</em> you, and they&apos;re not making them in your favor.
      </Callout>

      <ChapterDivider label="Section 2 — Targeting" />

      <h2 className="read-h2">Who sees your ad</h2>

      <p>Targeting is the single biggest difference between the two tools. Watch what happens.</p>

      <p>When you <strong>boost</strong>, your only real targeting options are: &ldquo;Automatic&rdquo; (Instagram picks for you, badly), &ldquo;people similar to your followers&rdquo; (Instagram looks at your bot-filled follower list and finds more bots), or you can pick a country and an age range. That&apos;s the depth.</p>

      <p>When you use <strong>Ads Manager</strong>, you can target by:</p>

      <ul style={{ marginLeft: "1.5rem", color: "var(--read-muted)", fontSize: 17, lineHeight: 1.8 }}>
        <li>Specific cities, zip codes, or radius pins on a map</li>
        <li>People who follow specific artists in your sound (Drake, Brent Faiyaz, Summer Walker — name them)</li>
        <li>People who recently engaged with music content</li>
        <li>People who have purchased from music-adjacent businesses</li>
        <li>Custom audiences from <em>your</em> website visitors, your video viewers, your email list</li>
        <li>Lookalike audiences built from your top 1% of fans</li>
        <li>People with specific interests like &ldquo;Apple Music&rdquo; or &ldquo;SoundCloud&rdquo; or &ldquo;hip-hop concerts&rdquo;</li>
      </ul>

      <p>That last bullet is the killer. With Ads Manager you can build an audience that looks <em>exactly</em> like your existing top fans, then tell Meta to find a million more people just like them. That feature alone, used right, is worth more than every boost you&apos;ll ever run.</p>

      <Callout variant="pro">
        My favorite indie artist setup: 1% Lookalike of pixel events from the last 30 days, in 5 specific cities where the artist&apos;s data shows real listeners. Cold audience, but warm in profile. CPMs of $2-4 all day.
      </Callout>

      <ChapterDivider label="Section 3 — Data" />

      <h2 className="read-h2">What you keep when the ad ends</h2>

      <p>Here&apos;s the part nobody tells you. When a boosted post ends, <strong>you get nothing.</strong> No data export. No audience saved for retargeting. No pixel data on which clickers actually converted. The boost is a fire that burns out. Everything is ash.</p>

      <p>When an Ads Manager campaign ends, <strong>you keep everything.</strong></p>

      <p>You keep a list of every person who watched 50% of your video. You keep a list of every person who clicked through to your landing page. You keep a list of every person who hit play on Spotify. You keep a list of every person who saved the song. All of those become custom audiences inside Meta — audiences you can show ads to again, for free, forever.</p>

      <p>That is the single most important concept in this whole book. <strong>Boosted dollars die. Ads Manager dollars compound.</strong></p>

      <p>The first time I ran a $300 cold campaign in Ads Manager for a client, we got about 1,800 video viewers in the 75% range. Three months later, we ran a different campaign — but only to those 1,800 people. The CPM was $0.80. The CTR was 11%. We got a flood of streams from people who already knew the artist. None of that would have been possible if the original campaign was a boost.</p>

      <Callout variant="insight">
        Every campaign you run in Ads Manager builds an asset. Every boost you run builds a memory.
      </Callout>

      <ChapterDivider label="Section 4 — Optimization" />

      <h2 className="read-h2">What the algorithm is solving for</h2>

      <p>This one&apos;s technical, but stay with me — it&apos;s the difference between &ldquo;feels like it works&rdquo; and &ldquo;actually works.&rdquo;</p>

      <p>When you boost a post, Meta optimizes for one objective by default: <strong>post engagement</strong>. That means likes, comments, and shares. The algorithm hunts for the cheapest possible interactions. It does not care if those people stream you. It does not care if those people are real fans. It just wants more thumbs to tap a heart for the lowest possible cost.</p>

      <p>In Ads Manager, you choose the objective. And the objective changes <em>everything</em> about who Meta shows your ad to. The same $50, with the same creative, will reach a completely different audience based on which objective you pick.</p>

      <p>Here are the objectives that matter for music:</p>

      <ul style={{ marginLeft: "1.5rem", color: "var(--read-muted)", fontSize: 17, lineHeight: 1.8 }}>
        <li><strong style={{ color: "var(--money-green-bright)" }}>Traffic:</strong> sends people to your Spotify, Apple Music, or landing page link.</li>
        <li><strong style={{ color: "var(--money-green-bright)" }}>Video Views:</strong> finds people who actually <em>watch</em> video, not just scroll past.</li>
        <li><strong style={{ color: "var(--money-green-bright)" }}>Conversions:</strong> the gold standard. Optimizes for a specific event on your landing page (pre-save, click to Spotify, email signup).</li>
      </ul>

      <p>If you set up a Conversions campaign optimized for &ldquo;Spotify play,&rdquo; the algorithm literally hunts down humans most likely to hit play on Spotify when they see your ad. <strong>That feature does not exist on the boost button.</strong> You can&apos;t access it. You can&apos;t even turn it on. The boost flow has one objective and won&apos;t let you change it.</p>

      <Callout variant="watch">
        If you&apos;re still boosting and your goal is streams — you&apos;re paying Meta to find you people who like to tap heart buttons. Not people who like to listen to music.
      </Callout>

      <ChapterDivider label="Section 5 — Why the button still exists" />

      <h2 className="read-h2">The cash machine</h2>

      <p>I covered this in Chapter 1, but it bears repeating because it&apos;s the truth that should make you angry enough to never go back.</p>

      <p>Meta keeps the boost button right there, big and blue, because <strong>it&apos;s their highest-margin product</strong>. The artist who hits boost is paying Meta a premium to deliver the worst possible result. The artist who learns Ads Manager is paying Meta less, getting more, and forcing the platform to compete for their continued spend.</p>

      <p>Meta makes its real money on people who don&apos;t know any better. That used to be you. Starting tomorrow, that&apos;s no longer you.</p>

      <ChapterDivider label="Section 6 — What's next" />

      <h2 className="read-h2">From here</h2>

      <p>Now you know the difference. The boost button is a slot machine. Ads Manager is a control panel. You don&apos;t need to be a marketing genius to use the control panel — you just need to learn the layout and follow the system in this book.</p>

      <p>Next chapter, we set up the actual tool. Business Manager. Pixel. Page connection. The boring stuff that, once it&apos;s done, is done forever. Twenty minutes of setup that will pay you back for the rest of your career as an artist.</p>

      <p>Stop boosting. Start setting up.</p>

      <Worksheet
        chapterId="ch2"
        title="Chapter 2 Worksheet"
        fields={c.worksheetFields!}
        checkboxes={c.worksheetCheckboxes!}
      />
    </ChapterShell>
  );
}
