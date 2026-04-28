"use client";

import ChapterShell from "../components/ChapterShell";
import Callout from "../components/Callout";
import Worksheet from "../components/Worksheet";
import ChapterDivider from "../components/ChapterDivider";
import MoneyMath from "../illustrations/MoneyMath";
import CountUp from "../../components/CountUp";
import { getChapter } from "../chapters";

export default function Ch1() {
  const c = getChapter("ch1")!;
  return (
    <ChapterShell id="ch1" particleVariant="blue">
      <Callout variant="watch">
        When you hit Boost, Instagram doesn&apos;t help you grow. They help themselves get paid. Most artists don&apos;t know this — and that&apos;s the point.
      </Callout>

      <p>You&apos;ve done it. I&apos;ve done it. Every artist reading this has done it.</p>

      <p>You drop a song. The video&apos;s clean. You feel like this is the one. You post it. It does <em>okay</em> — a few likes, your homies say &ldquo;hard&rdquo; in the comments, and then it dies. So you do what Instagram practically begs you to do. You tap that little blue button under the post. Boost. $50. Done.</p>

      <p>For the next three days you watch the like count climb. 200 likes. 400. 800. It feels like something. Your phone buzzes. Strangers liked your video. Some of them even commented &ldquo;🔥&rdquo; or a string of emojis you don&apos;t recognize.</p>

      <p>And then it ends. The boost runs out. The likes stop. You check Spotify. <strong>Same monthly listeners.</strong> You check your DMs. <strong>No new fans.</strong> You check your bank account. <strong>$50 gone.</strong></p>

      <p>You shrug. You tell yourself the song just wasn&apos;t it. You start working on the next one. And in three weeks, you do it all again.</p>

      <ChapterDivider label="Section 1 — What boosting actually does" />

      <h2 className="read-h2">What you&apos;re really paying for</h2>

      <p>Here&apos;s what happens behind the scenes when you hit boost. Instagram takes your $50 and shows your post to a giant, random pool of people. By default, it&apos;s &ldquo;people similar to your followers.&rdquo; That sounds smart. It&apos;s not.</p>

      <p>Your followers are mostly your friends, your cousin, that girl you went to high school with, and three bots. Instagram looks at that group and says, &ldquo;cool, find me more people like that.&rdquo; So now your ad is shown to the cousins of your friends, the high school classmates of that girl, and more bots.</p>

      <p>The platform is optimizing for one thing: <strong>likes</strong>. Because that&apos;s the only metric the boost tool tracks. So Instagram doesn&apos;t go find people who stream music. Or people who follow indie hip-hop artists. Or people who actually buy songs and merch. It just finds the cheapest possible eyeballs that will hit a heart button.</p>

      <Callout variant="insight">
        The boost button optimizes for <strong>likes per dollar</strong>. Not streams. Not fans. Not money. Just a tiny red heart, because that&apos;s the only thing it knows how to count.
      </Callout>

      <p>So yeah, you got <CountUp to={400} /> likes. Congratulations. You also got zero of the things that actually move your career forward.</p>

      <ChapterDivider label="Section 2 — Why it FEELS like it works" />

      <h2 className="read-h2">The dopamine trap</h2>

      <p>Here&apos;s why this scam keeps working on artists like us. <strong>It feels good.</strong></p>

      <p>You watch the like count tick up in real time. Your phone lights up with notifications. Your post sits at the top of your profile looking like it&apos;s &ldquo;popping.&rdquo; If anyone scrolls through your page they&apos;ll see <CountUp to={1200} /> likes on a video and think you&apos;re moving.</p>

      <p>Instagram engineered that feeling. They literally hired neuroscientists to figure out which colors, sounds, and timings hit your brain hardest. The boost flow is one of the most addictive products on the planet. It&apos;s designed to feel like winning even when you&apos;re losing.</p>

      <p>And artists are especially vulnerable. We&apos;re creative people. We&apos;re emotional. We need the win. We need someone — anyone — to tell us the song is good. The boost button gives you 400 strangers saying &ldquo;yes&rdquo; in the form of a like. Your brain doesn&apos;t care that they&apos;re fake-engaged. It just feels the yes.</p>

      <p><strong>That&apos;s the trap.</strong> You&apos;re not paying for marketing. You&apos;re paying for a feeling.</p>

      <Callout variant="watch">
        If you can&apos;t tell me what 100 of those likers&apos; usernames were, what playlists they save songs to, or what city they live in — you didn&apos;t buy fans. You bought a screenshot.
      </Callout>

      <ChapterDivider label="Section 3 — Why it's NOT working" />

      <h2 className="read-h2">The five things you didn&apos;t get</h2>

      <p>Let&apos;s line it up. Here&apos;s what your $50 boost did <em>not</em> give you.</p>

      <p><strong>1. Real fans.</strong> A real fan saves your song. Adds it to a playlist. Shares it with a friend. Comes back next time you drop. Boosted likes do none of that. They&apos;re drive-by hearts from people who will never see your name again.</p>

      <p><strong>2. Streams.</strong> Likes on Instagram do not become streams on Spotify. There is no link between the two. None. A boost is not a stream-getting tool. It was never built to be one.</p>

      <p><strong>3. ROI.</strong> If you&apos;re selling shows, merch, or trying to flip those listeners into paid streams — boosting can&apos;t track any of it. The button doesn&apos;t even let you put a tracking pixel on your website. So even if one of those 400 likers somehow bought a ticket, you&apos;d never know which ad did it.</p>

      <p><strong>4. Usable data.</strong> This is the one that hurts. When you boost, all the data — who clicked, who watched, who actually engaged — stays inside Instagram. You can&apos;t pull it out. You can&apos;t retarget those people later. You can&apos;t build a custom audience from them. The data <em>belongs to Meta</em>. You just rent the result for 3 days.</p>

      <p><strong>5. A foundation.</strong> Every $50 boost is a fresh start. Nothing compounds. Nothing builds. You can boost 100 posts in a row and on post 101, you&apos;re starting from zero. That&apos;s by design.</p>

      <ChapterDivider label="Section 4 — The math" />

      <h2 className="read-h2">$50 vs $50</h2>

      <p>Let me show you what those two paths look like side by side. Same $50. Same artist. Same song.</p>

      <MoneyMath />

      <p><strong>$50 boosted</strong> gets you, on average, 4 to 6 likes per dollar in a low-quality audience. That&apos;s 200 to 300 likes from people you can&apos;t track and will never see again. <strong>0 confirmed streams. 0 saved songs. $0 in measurable return.</strong></p>

      <p><strong>$50 in Ads Manager</strong>, set up correctly, gets you about <CountUp to={8000} suffix="+" /> reach. Real impressions to people who match a music-listening profile. With a pixel on your landing page you can see who clicked through. Who streamed. Who saved. Who came back the next week. <strong>You build an audience. You learn what hooks work. You keep the data forever.</strong></p>

      <p>Same $50. Two completely different outcomes. One is a slot machine. The other is a system.</p>

      <Callout variant="pro">
        I&apos;ve had clients spend $300 on a boost and get zero new monthly listeners. The same $300 in Ads Manager, run on a 5-day test, has pulled 2,000+ new monthly listeners. <strong>Same money. Same song. 1,000x return.</strong>
      </Callout>

      <ChapterDivider label="Section 5 — Why the button exists" />

      <h2 className="read-h2">Follow the money</h2>

      <p>So if boosting is so bad, why does Instagram keep pushing it? Why is it the biggest button on the app? Why does Meta send you push notifications begging you to boost a post that did okay organically?</p>

      <p>One word: <strong>margin.</strong></p>

      <p>Boosted posts have higher profit margins for Meta than properly run ads. Here&apos;s why. When you use Ads Manager, Meta is forced to spend your money efficiently. The platform competes against itself to get you cheap CPMs and good results, because if it doesn&apos;t, you turn the ad off and they stop earning.</p>

      <p>When you hit boost, none of that pressure exists. There&apos;s no dashboard for you to check. No CPM to compare. No CTR to evaluate. The boost just runs. You get a screenshot of likes. Meta keeps the difference between what your ad <em>actually</em> cost them to deliver and what they charged you. <strong>That gap is way bigger on a boost than on a real ad.</strong></p>

      <p>Add to that the fact that Instagram users on the boost flow rarely turn the campaign off early. With Ads Manager, sophisticated buyers kill bad ads in 24 hours. With boost, artists let the full 3 days run because they don&apos;t know what to look for.</p>

      <p>Meta makes more money per dollar on a boosted post than on almost any other product they sell. That&apos;s not a coincidence. That&apos;s the design.</p>

      <Callout variant="insight">
        The boost button is not a marketing tool for you. It&apos;s a profit margin tool for Meta. The fact that it&apos;s easy and feels good is the bait.
      </Callout>

      <ChapterDivider label="Section 6 — The way out" />

      <h2 className="read-h2">Tomorrow morning</h2>

      <p>Here&apos;s what&apos;s gonna happen tomorrow. You&apos;re gonna post a new song or a clip. It&apos;s gonna get a few likes. Then it&apos;s gonna stall. And right when it stalls, your phone is going to buzz with a notification: &ldquo;Your post is doing better than 80% of your other posts. Boost it now to keep the momentum going.&rdquo;</p>

      <p>Your finger is going to twitch toward that little blue button. Your brain is going to whisper, &ldquo;just $50, just this one time, the post is already doing well, it&apos;ll be different this time.&rdquo;</p>

      <p><strong>Don&apos;t do it.</strong></p>

      <p>I don&apos;t care if the post is on fire. I don&apos;t care if your manager is yelling at you to put money behind it. I don&apos;t care if a verified account just commented &ldquo;💯.&rdquo; Don&apos;t hit boost.</p>

      <p>Save that $50. Read the next chapter. By the time you finish this book, you&apos;ll know exactly where to put it instead — and that $50 will be the first dollar that actually compounds for you instead of disappearing.</p>

      <p>The boost button is the past. You&apos;re building a future.</p>

      <Worksheet
        chapterId="ch1"
        title="Chapter 1 Worksheet"
        fields={c.worksheetFields!}
        checkboxes={c.worksheetCheckboxes!}
      />
    </ChapterShell>
  );
}
