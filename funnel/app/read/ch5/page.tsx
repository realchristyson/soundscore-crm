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
        You don&apos;t run ads on weak content. Period. The fastest way to
        burn $5/day is to put it behind a video nobody likes organically.
      </Callout>

      <p>
        Read this part on your phone. Have Instagram open in a second tab.
        Open your insights as we go. Every step in this chapter is something
        you do live, on your own posts, with your own data.
      </p>

      <p>
        Picking the right post is the most underrated step in this whole
        book. Most artists get excited and run their newest video as their
        first ad because it&apos;s their newest video. Wrong move. Newest
        doesn&apos;t mean strongest. We&apos;re going to use a system to find
        your strongest piece of content. The one that&apos;s already proven
        people care.
      </p>

      <p>
        That&apos;s the post we put $5/day behind.
      </p>

      <ChapterDivider label="The trap" />

      <h2 className="read-h2">Why like count is a lie</h2>

      <p>
        Likes are the cheapest signal on Instagram. Anyone will tap a heart
        for free. Bots tap hearts. People who&apos;ll never stream you tap
        hearts. Your cousin&apos;s ex tap hearts. A high like count tells you
        almost nothing about whether anyone actually likes your music.
      </p>

      <p>
        Most artists pick their ad creative by like count. They scroll their
        own feed, find the post with the most likes, and boost it. Wrong
        signal. They wonder why the boost didn&apos;t turn into streams.
        Because likes don&apos;t turn into streams.
      </p>

      <p>
        We&apos;re going to ignore likes completely. Three numbers matter
        instead. Save Rate, Watch Time, and Profile Visits. These are the
        signals that tell you the truth about your content.
      </p>

      <ChapterDivider label="Number 1, Save Rate" />

      <h2 className="read-h2">Saves are the strongest signal</h2>

      <p>
        A save is when someone taps the little bookmark icon under your post
        so they can come back to it later. Saves are rare. Saves are deep.
        When someone saves your post, they&apos;re saying &ldquo;I want to
        listen to this again.&rdquo; That&apos;s the closest signal you can
        get to &ldquo;I want to be a fan.&rdquo;
      </p>

      <p>
        Here&apos;s how to find saves on your post.
      </p>

      <p>
        On your phone, open Instagram. Go to your profile. Tap any post.
        Under the post, on the bottom left, you&apos;ll see{" "}
        <strong>View Insights</strong>. Tap it.
      </p>

      <p>
        A page slides up with a bunch of numbers. Look for the row that says{" "}
        <strong>Saves</strong>. That number is your raw save count.
      </p>

      <p>
        Now do the math. Save Rate equals saves divided by total reach. So if
        a post got 50 saves and reached 5,000 people, your save rate is 1%.
      </p>

      <p>What&apos;s a good save rate?</p>

      <ul>
        <li>
          <strong>Below 0.5%</strong>, weak. The post didn&apos;t hit. Move
          on.
        </li>
        <li>
          <strong>0.5% to 1%</strong>, decent. Worth considering.
        </li>
        <li>
          <strong>1% to 2%</strong>, strong. This is ad creative material.
        </li>
        <li>
          <strong>Above 2%</strong>, fire. Run ads to it immediately.
        </li>
      </ul>

      <Callout variant="pro">
        Saves matter way more on Reels than on regular posts. If you&apos;re
        running ads to a Reel (you should be), filter for save rate above
        1%. That&apos;s where the magic is. Carousels save easier than Reels
        because of the &ldquo;come back to read part 2&rdquo; effect, so for
        carousels, look for 2% or higher.
      </Callout>

      <ChapterDivider label="Number 2, Watch Time" />

      <h2 className="read-h2">Did they actually watch it?</h2>

      <p>
        Watch Time tells you the percent of your video that the average
        person watched. If your video is 30 seconds long and people watch on
        average 15 seconds, your watch time is 50%.
      </p>

      <p>
        Here&apos;s why this number is gold. It tells you if your hook works.
        Your hook is the first 3 seconds of your video. If watch time is
        below 50%, people are scrolling away before they even hear the song.
        Your hook is broken. Don&apos;t spend ad money on a video with a
        broken hook. You&apos;re paying Meta to watch people leave.
      </p>

      <p>
        Here&apos;s how to find Watch Time. Open Insights on a video post.
        Scroll down past Saves. Look for{" "}
        <strong>Average Watch Time</strong> or{" "}
        <strong>Average Time Watched</strong>. It shows in seconds. Divide by
        your video length.
      </p>

      <p>What&apos;s a good watch time?</p>

      <ul>
        <li>
          <strong>Below 30%</strong>, broken hook. Skip it.
        </li>
        <li>
          <strong>30% to 50%</strong>, the hook is okay but not great.
        </li>
        <li>
          <strong>50% to 70%</strong>, hook works. Strong ad candidate.
        </li>
        <li>
          <strong>Above 70%</strong>, the hook is fire. People are watching
          your whole video.
        </li>
      </ul>

      <Callout variant="watch">
        Don&apos;t use watch time on photos or carousels. It only matters for
        videos and Reels. For photos, lean on Save Rate and Profile Visits
        instead.
      </Callout>

      <ChapterDivider label="Number 3, Profile Visits" />

      <h2 className="read-h2">Did the post make them curious about YOU?</h2>

      <p>
        Profile Visits is exactly what it sounds like. The number of people
        who saw your post and tapped your username to go to your profile.
        That tap is huge. They&apos;re saying &ldquo;wait, who is this
        person, let me check the rest of their stuff.&rdquo;
      </p>

      <p>
        That moment is where fans get made.
      </p>

      <p>
        Here&apos;s how to find Profile Visits. Open Insights on any post.
        Look for the row that says <strong>Profile Visits</strong>. The
        number tells you how many people clicked through to your profile from
        that single post.
      </p>

      <p>
        For a post to be ad-worthy, you want Profile Visits to be at least 1%
        of total reach. So if a post reached 5,000 people, you want at least
        50 profile visits coming from it. More is better.
      </p>

      <Callout variant="insight">
        A post with high Saves but low Profile Visits is a song people like
        but don&apos;t care about you yet. A post with high Profile Visits is
        building you a fanbase. The best ad creative does both. Save Rate
        plus Profile Visits is the killer combo.
      </Callout>

      <ChapterDivider label="The 5/3/1 Rule" />

      <h2 className="read-h2">How to actually pick your post</h2>

      <p>
        Here&apos;s the system. It&apos;s called the 5/3/1 Rule and it works
        every time.
      </p>

      <p>
        <strong>Step 1, look at your last 5 posts.</strong> Open Instagram.
        Go to your profile. Tap on each of your last 5 posts and check the
        Insights for each one. Write down the Save Rate, Watch Time
        (if it&apos;s a video), and Profile Visits for each.
      </p>

      <p>
        <strong>Step 2, pick the 3 with the best Save Rate.</strong> Out of
        those 5 posts, three of them will have the strongest save rate. Throw
        the other two out.
      </p>

      <p>
        <strong>Step 3, from those 3, pick the 1 with the highest Watch
        Time.</strong> Out of the three save-rate winners, the one with the
        best watch time is your first ad.
      </p>

      <p>
        That&apos;s it. That&apos;s your first ad creative. You don&apos;t
        guess. You don&apos;t go with the post you personally love. You go
        with the post the data is telling you to run.
      </p>

      <ChapterDivider label="What if your numbers are all bad?" />

      <h2 className="read-h2">When none of your posts pass</h2>

      <p>
        If you ran the 5/3/1 Rule and every single one of your last 5 posts
        had a save rate under 0.5% and watch time under 30%, your content
        isn&apos;t ready. That&apos;s not a bad thing to find out. Better to
        find out now than after burning $150.
      </p>

      <p>
        Here&apos;s what to do.
      </p>

      <p>
        <strong>Post 5 more pieces of content this week.</strong> Try
        different hooks. Try different intros. Show your face. Show the
        process of making the song. Tell a story. Just keep posting.
      </p>

      <p>
        <strong>Look at the data again next week.</strong> If even one of
        those new posts hits a save rate above 1%, that&apos;s your ad.
      </p>

      <p>
        Don&apos;t skip this step. Running ads to dead content burns money.
        Posting better content first is free.
      </p>

      <Callout variant="pro">
        The fastest way to fix bad numbers is fixing your hook. The first 3
        seconds of every video are 80% of the result. Try opening with a
        question (&ldquo;ever wondered what a love song from 2030 sounds
        like?&rdquo;), a strong visual (a close-up, fast movement), or a
        snippet of the chorus instead of the verse. Test 3 different hooks
        on 3 different posts and the winner becomes your template.
      </Callout>

      <ChapterDivider label="What you just did" />

      <h2 className="read-h2">You have your first ad creative</h2>

      <p>
        You stopped guessing. You used data. Out of every post you&apos;ve
        ever made, you now know which one is the strongest piece of content
        in your catalog. That post is going to work harder for you than the
        last 50 boosts combined.
      </p>

      <p>
        Don&apos;t move on until you&apos;ve actually picked your post. Open
        Instagram. Open your insights. Run the 5/3/1 Rule right now. Write
        down which post you picked. Save the link. We&apos;ll need it in the
        next chapter when we launch your first $5/day campaign.
      </p>

      <p>
        Next up, we go back to Ads Manager and turn this post into a real
        running ad. Step by step.
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
