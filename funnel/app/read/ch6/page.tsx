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
        Open your laptop. Open Ads Manager. Pull up the post you picked in
        Chapter 5. Have your debit card info ready in case Meta asks for
        verification. We are launching your first ad in this chapter, live,
        as you read.
      </p>

      <p>
        This chapter is longer than the others on purpose. There are a lot
        of decisions to make. Don&apos;t rush. Once you hit Publish, the ad
        runs. So let&apos;s do it right.
      </p>

      <ChapterDivider label="Step 1, Click Create" />

      <h2 className="read-h2">Open the campaign builder</h2>

      <p>
        At the top left of Ads Manager, you&apos;ll see a green button that
        says <strong>+ Create</strong>. Click it. A new window opens. This is
        the campaign builder. From here, you&apos;ll set up the campaign,
        the ad set, and the ad. All in one flow.
      </p>

      <p>
        The first thing it asks is{" "}
        <strong>Choose a campaign objective</strong>. This is the goal of the
        whole campaign. What do you want Meta to optimize for?
      </p>

      <p>
        Here are your options in plain English.
      </p>

      <ul>
        <li>
          <strong>Awareness.</strong> Meta shows your ad to as many people as
          possible. Cheap reach, low quality. For brand campaigns. Skip it
          for now.
        </li>
        <li>
          <strong>Traffic.</strong> Meta finds people who&apos;ll click your
          link. Great for sending people to your Spotify or YouTube. Use this
          when you want streams.
        </li>
        <li>
          <strong>Engagement.</strong> Meta finds people who&apos;ll like,
          comment, save, or share your post. Best for building a warm
          audience. Use this for your first campaign.
        </li>
        <li>
          <strong>Leads.</strong> Meta gets you email signups. Skip it for
          now.
        </li>
        <li>
          <strong>App Promotion.</strong> Only for app developers. Skip it.
        </li>
        <li>
          <strong>Sales.</strong> For online stores selling products. Skip
          it for now.
        </li>
      </ul>

      <p>
        For your first campaign, pick <strong>Engagement</strong>. We&apos;ll
        run Traffic later. Engagement is cheaper and builds the warm audience
        pool that we&apos;ll use to make Lookalikes in Chapter 7.
      </p>

      <p>
        Click <strong>Continue</strong>.
      </p>

      <Callout variant="pro">
        Some artists go straight to Traffic to push streams on day one.
        That&apos;s a fine move once you have data. For your first campaign,
        Engagement is better because it&apos;s 3 to 5 times cheaper per
        result. Cheap engagement now = bigger custom audience later =
        better Lookalikes for the rest of your career.
      </Callout>

      <ChapterDivider label="Step 2, Set the campaign budget" />

      <h2 className="read-h2">Why $5/day, not $50</h2>

      <p>
        After you pick Engagement, Meta drops you into the campaign settings
        page. Name your campaign. Use something clear like{" "}
        <strong>Engagement, Test 1, [your song name]</strong>. You&apos;ll
        thank yourself later when you have ten campaigns running and need to
        find this one.
      </p>

      <p>
        Scroll down. You&apos;ll see <strong>Campaign Budget</strong>. There
        are two choices.
      </p>

      <p>
        <strong>Daily Budget.</strong> You set how much you want to spend
        per day. Meta spends roughly that amount every 24 hours, give or
        take 25%. Some days $4, some days $6, evens out to $5/day. Pick
        this one.
      </p>

      <p>
        <strong>Lifetime Budget.</strong> You set a total over the whole
        campaign run. Meta spreads it out. Lifetime is good for short
        promos with a hard end date, like a launch week. Skip it for now.
      </p>

      <p>
        Set the daily budget to <strong>$5</strong>. Type 5 in the box. Hit
        Tab.
      </p>

      <p>
        Why $5/day? Three reasons.
      </p>

      <p>
        <strong>One, low risk.</strong> Five bucks a day means even if you
        forget about the ad for a month, you spent $150. Survivable.
      </p>

      <p>
        <strong>Two, the algorithm needs time to learn.</strong> Meta
        optimizes by showing your ad to a bunch of different people, watching
        who responds, then narrowing down. That learning phase eats data.
        $5/day gives Meta enough budget to run thousands of impressions per
        week without burning your savings.
      </p>

      <p>
        <strong>Three, scaling math.</strong> $5/day is the floor of a system
        we use to scale up. We&apos;ll cover that in Chapter 8. Trust me.
        Five is the move.
      </p>

      <p>
        Click <strong>Next</strong>. You&apos;re now in the Ad Set builder.
      </p>

      <ChapterDivider label="Step 3, Build your audience" />

      <h2 className="read-h2">Who sees your ad</h2>

      <p>
        This is where most ads win or lose. The audience.
      </p>

      <p>
        At the top of the Ad Set page, you&apos;ll see a section called{" "}
        <strong>Audience controls</strong>. Underneath it,{" "}
        <strong>Locations</strong>, <strong>Age</strong>,{" "}
        <strong>Gender</strong>, and <strong>Detailed Targeting</strong>.
      </p>

      <p>
        <strong>Locations.</strong> Click the box. Type{" "}
        <strong>United States</strong>. Hit enter. That&apos;s your starting
        location. Don&apos;t add other countries yet. US-only first. You can
        always expand later.
      </p>

      <p>
        Why US first? Because US ad spend is more expensive but the data is
        cleaner. Once you know your post works in the US, expanding to
        Canada, UK, and Australia is cheap. Other countries get you cheap
        engagement but bot-heavy.
      </p>

      <p>
        <strong>Age.</strong> Set this to <strong>18 to 35</strong>. That&apos;s
        the core music-buying audience for hip-hop and R&amp;B. You can
        widen later. Start tight.
      </p>

      <p>
        <strong>Gender.</strong> Leave it on <strong>All</strong>. Don&apos;t
        narrow by gender unless you have a clear reason. Most artists narrow
        too aggressively. Trust the data, not your guess.
      </p>

      <p>
        <strong>Detailed Targeting.</strong> Click the box. Start typing in
        artists or interests that match your sound. Examples:
      </p>

      <ul>
        <li>Hip hop music</li>
        <li>R&amp;B music</li>
        <li>Drake (the artist)</li>
        <li>Brent Faiyaz</li>
        <li>Summer Walker</li>
        <li>SZA</li>
        <li>Apple Music</li>
        <li>SoundCloud</li>
      </ul>

      <p>
        Pick 5 to 10 of these. Don&apos;t pick 30. The narrower you go, the
        cheaper your CPM but the smaller the pool. 5 to 10 is the sweet
        spot.
      </p>

      <Callout variant="insight">
        Pick artists you actually sound like, not your favorites. If you
        sound like Brent Faiyaz, target Brent fans. Don&apos;t target Drake
        fans because Drake is the biggest. You&apos;re trying to find people
        who already like the kind of music you make.
      </Callout>

      <p>
        Below Detailed Targeting, you&apos;ll see a checkbox for{" "}
        <strong>Advantage+ Audience</strong>. Turn it on. This lets Meta&apos;s
        algorithm find people similar to your targeted interests, not just
        the exact people who match. For new ad accounts, this is the move.
        Meta learns faster when it has wiggle room.
      </p>

      <ChapterDivider label="Step 4, Pick your placements" />

      <h2 className="read-h2">Where your ad shows up</h2>

      <p>
        Scroll down. You&apos;ll see a section called{" "}
        <strong>Placements</strong>. This is where Meta shows your ad. Feed,
        Reels, Stories, Marketplace, and a bunch of others.
      </p>

      <p>
        You have two choices.
      </p>

      <p>
        <strong>Advantage+ Placements (recommended).</strong> Meta picks the
        best placement for each user. If a user spends more time in Reels,
        your ad shows in Reels. If they spend more time in Feed, your ad
        shows in Feed. Meta is way better at this than you. Pick this.
      </p>

      <p>
        <strong>Manual Placements.</strong> You pick which placements your
        ad shows on. Useful when you have a vertical Reel that won&apos;t
        look good in the Feed format. For your first ad, skip this.
      </p>

      <p>
        Leave Advantage+ Placements selected. Click <strong>Next</strong>.
      </p>

      <ChapterDivider label="Step 5, Build the ad creative" />

      <h2 className="read-h2">The post becomes the ad</h2>

      <p>
        Now you&apos;re in the Ad builder. This is where the post you picked
        in Chapter 5 becomes a live ad.
      </p>

      <p>
        At the top, name the ad. Use something like{" "}
        <strong>[Song Name], Reel, Test 1</strong>.
      </p>

      <p>
        Scroll down to <strong>Identity</strong>. Pick your{" "}
        <strong>Facebook Page</strong> and <strong>Instagram account</strong>.
        These are the two we connected in Chapter 3. They should already show
        up. If they don&apos;t, go back to Chapter 3 and finish that setup.
      </p>

      <p>
        Scroll down to <strong>Ad setup</strong>. There&apos;s a button that
        says <strong>Use Existing Post</strong>. Click it.
      </p>

      <p>
        A list of all your recent Instagram posts appears. Find the post you
        picked in Chapter 5. Click it. That&apos;s now your ad creative. The
        caption, the video, the music, all of it carries over.
      </p>

      <Callout variant="pro">
        Using an existing post (instead of uploading new creative) saves all
        your organic likes, saves, and comments on the ad. People trust ads
        that already have engagement. It&apos;s called &ldquo;social
        proof.&rdquo; A new upload starts at zero. An existing post comes
        loaded.
      </Callout>

      <p>
        Scroll down to <strong>Destination</strong>. This is where the click
        sends people. You have a few choices.
      </p>

      <ul>
        <li>
          <strong>Instagram profile.</strong> Best for follower growth.
        </li>
        <li>
          <strong>Website URL.</strong> Send to your Spotify, YouTube, or
          link-in-bio page (like Linktree, Beacons, or Hoo.be).
        </li>
        <li>
          <strong>Messenger.</strong> Skip it.
        </li>
      </ul>

      <p>
        For your first ad, pick <strong>Website URL</strong> and paste your
        link-in-bio link. That way one click takes them to a hub where they
        can pick Spotify, Apple, YouTube, all of it.
      </p>

      <p>
        Last thing. <strong>Call to Action button</strong>. Pick{" "}
        <strong>Listen Now</strong>. Other options work, but Listen Now is
        the highest-converting CTA for music ads.
      </p>

      <ChapterDivider label="Step 6, Hit Publish" />

      <h2 className="read-h2">The hardest button to press</h2>

      <p>
        At the bottom of the Ad builder, click <strong>Review and
        Publish</strong>. Meta shows you a preview of how your ad will look
        in Feed, Reels, and Stories. Scroll through. Make sure nothing looks
        broken.
      </p>

      <p>
        If everything looks good, click <strong>Publish</strong>.
      </p>

      <p>
        Meta puts your ad in review. Usually takes 15 minutes to 24 hours
        before it goes live. While you wait, your account dashboard shows{" "}
        <strong>In Review</strong>. Once it switches to{" "}
        <strong>Active</strong>, your ad is live.
      </p>

      <Callout variant="watch">
        Now the hard part. Don&apos;t touch the ad for 48 hours. Don&apos;t
        edit the audience. Don&apos;t change the budget. Don&apos;t pause it
        and unpause it. Every change resets Meta&apos;s learning phase. The
        algorithm needs at least 48 hours of clean data to start optimizing.
        Resist the urge. Walk away.
      </Callout>

      <ChapterDivider label="3 campaign templates to copy" />

      <h2 className="read-h2">Use these as your starting points</h2>

      <p>
        Now that you launched your first one, here are three templates you
        can copy for the rest of your career. Each one has a specific job.
      </p>

      <div
        style={{
          display: "grid",
          gap: "1.25rem",
          margin: "1.5rem 0 2rem",
        }}
      >
        <div
          style={{
            padding: "1.5rem",
            borderRadius: 10,
            border: "1px solid rgba(0,255,127,0.35)",
            background:
              "linear-gradient(180deg, rgba(0,255,127,0.06), rgba(0,0,0,0.4))",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 11,
              letterSpacing: "0.4em",
              color: "var(--money-green-bright)",
              textTransform: "uppercase",
              marginBottom: 8,
              fontWeight: 700,
            }}
          >
            Template 1, Engagement Campaign
          </div>
          <div
            style={{
              fontFamily: "var(--font-anton)",
              fontSize: 22,
              marginBottom: 12,
            }}
          >
            Building the warm audience
          </div>
          <p style={{ margin: 0 }}>
            Objective: Engagement. Budget: $5/day. Audience: US, 18, 35,
            interests in 5 to 10 sound-alike artists, Advantage+ Audience on.
            Placements: Advantage+. Creative: your strongest organic post.
            Goal: cheap engagement, builds the custom audience pool for later
            Lookalikes.
          </p>
        </div>

        <div
          style={{
            padding: "1.5rem",
            borderRadius: 10,
            border: "1px solid rgba(30,136,255,0.4)",
            background:
              "linear-gradient(180deg, rgba(30,136,255,0.06), rgba(0,0,0,0.4))",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 11,
              letterSpacing: "0.4em",
              color: "var(--meta-blue-bright)",
              textTransform: "uppercase",
              marginBottom: 8,
              fontWeight: 700,
            }}
          >
            Template 2, Traffic Campaign
          </div>
          <div
            style={{
              fontFamily: "var(--font-anton)",
              fontSize: 22,
              marginBottom: 12,
            }}
          >
            Driving streams
          </div>
          <p style={{ margin: 0 }}>
            Objective: Traffic. Budget: $5 to $10/day. Audience: same as
            Engagement template. Placements: Advantage+. Creative: same post
            as Engagement. Destination: link-in-bio with Spotify and YouTube.
            CTA: Listen Now. Goal: streams and clicks.
          </p>
        </div>

        <div
          style={{
            padding: "1.5rem",
            borderRadius: 10,
            border: "1px solid",
            borderImage:
              "linear-gradient(90deg, var(--meta-blue-bright), var(--money-green-bright)) 1",
            background:
              "linear-gradient(180deg, rgba(0,255,127,0.04), rgba(0,0,0,0.4))",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 11,
              letterSpacing: "0.4em",
              background:
                "linear-gradient(90deg, var(--meta-blue-bright), var(--money-green-bright))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textTransform: "uppercase",
              marginBottom: 8,
              fontWeight: 700,
            }}
          >
            Template 3, Video Views Campaign
          </div>
          <div
            style={{
              fontFamily: "var(--font-anton)",
              fontSize: 22,
              marginBottom: 12,
            }}
          >
            Building retargeting pools
          </div>
          <p style={{ margin: 0 }}>
            Objective: Video Views. Budget: $5/day. Audience: broader than
            Engagement, US plus Canada plus UK, 18, 40. Placements: Reels
            only (Manual). Creative: your strongest video. Goal: cheap views
            so you can retarget the people who watched 50%+ later. This is
            the secret weapon for Lookalikes in Chapter 7.
          </p>
        </div>
      </div>

      <p>
        Most artists run all three at once after a month or two. For now,
        the Engagement campaign you just launched is enough. Let it run.
        Move to Chapter 7.
      </p>

      <ChapterDivider label="What you just did" />

      <h2 className="read-h2">Your first ad is live</h2>

      <p>
        You launched a real Meta ad. With a real budget. With real targeting.
        With real data tracking. You did everything the boost button skipped.
        And you did it for $5/day.
      </p>

      <p>
        Now wait. The next 48 hours, Meta is learning. After 5 days, the
        numbers stabilize. Don&apos;t touch the ad. Don&apos;t panic if day
        one looks weird. Day one is always weird.
      </p>

      <p>
        Next chapter, we go deeper. Lookalike Audiences. The single feature
        that turns a $5/day account into a real growth machine.
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
