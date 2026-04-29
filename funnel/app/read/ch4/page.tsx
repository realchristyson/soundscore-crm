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
        Business Manager is the foundation. Ads Manager is the cockpit. Time
        to climb in.
      </Callout>

      <p>
        Same rule as last chapter. Open your laptop. Have your Business
        Manager tab already loaded. Have your debit card ready. We&apos;re
        adding the Ad Account that&apos;s actually going to spend money on
        your behalf.
      </p>

      <p>
        This chapter takes about 15 minutes. By the end, you&apos;ll have a
        live Ad Account, billing locked in, and a daily limit set. You&apos;ll
        also know how to read the Ads Manager dashboard so it stops looking
        like a foreign language.
      </p>

      <ChapterDivider label="Step 1, Add an Ad Account" />

      <h2 className="read-h2">Create the cockpit</h2>

      <p>
        Open your Business Manager. On the left menu, click{" "}
        <strong>Settings</strong>. Inside Settings, click{" "}
        <strong>Accounts</strong>, then click{" "}
        <strong>Ad Accounts</strong>. You&apos;ll see a blue button that says{" "}
        <strong>Add</strong>.
      </p>

      <p>
        Click Add. A small menu pops up with three choices.
      </p>

      <p>
        <strong>Add an Ad Account.</strong> Pick this one if you already have
        an old Ad Account from before. Most new artists don&apos;t. Skip it.
      </p>

      <p>
        <strong>Request Access.</strong> Pick this one if someone else
        (manager, label, agency) already runs ads for you and you want to
        link their account to yours. Most new artists don&apos;t need this
        either. Skip it.
      </p>

      <p>
        <strong>Create a New Ad Account.</strong> This is the one. Click it.
      </p>

      <p>
        A new window opens. It asks for an Ad Account name (use your artist
        name plus the word &ldquo;Ads,&rdquo; like &ldquo;Lil Example
        Ads&rdquo;), a time zone (pick the one you live in, this can never
        be changed), and a currency (pick USD if you&apos;re in the US). Hit{" "}
        <strong>Next</strong>.
      </p>

      <p>
        It asks who the Ad Account is for. Pick <strong>My business</strong>.
        Hit <strong>Create</strong>.
      </p>

      <p>
        Done. You have an Ad Account. It&apos;s sitting there empty, with no
        billing yet. We fix that next.
      </p>

      <Callout variant="watch">
        Be careful with the time zone. Once you save it, Meta will not let
        you change it later. If you live in Atlanta, pick Eastern Time. If
        you&apos;re in LA, pick Pacific Time. Wrong time zone means your
        daily reports cut off at the wrong hour every night and your data
        gets confusing.
      </Callout>

      <ChapterDivider label="Step 2, Add your payment method" />

      <h2 className="read-h2">Plug in your card</h2>

      <p>
        Inside your new Ad Account, look for{" "}
        <strong>Billing &amp; Payments</strong> on the left menu. Click it.
        Click <strong>Payment Methods</strong>. Click{" "}
        <strong>Add Payment Method</strong>.
      </p>

      <p>You have a few options.</p>

      <p>
        <strong>Debit or credit card.</strong> The simplest move. Meta
        accepts Visa, Mastercard, American Express, and Discover. Use a card
        that&apos;s not your everyday card. Pull a fresh debit card you only
        use for music business. Helps you track ad spend without it getting
        mixed up with your groceries.
      </p>

      <p>
        <strong>PayPal.</strong> Works fine. Slightly slower if Meta needs to
        verify you. Use it if you&apos;re not comfortable putting a card on
        Meta&apos;s servers.
      </p>

      <p>
        <strong>Bank account direct.</strong> Skip this. Too many issues with
        holds and verification. Stick with a card.
      </p>

      <p>
        Type in the card number, expiration date, security code, and billing
        zip code. Hit <strong>Save</strong>. Meta might charge a small test
        amount (usually $1) to verify the card. That money comes back in a
        few days. Don&apos;t panic if you see it.
      </p>

      <ChapterDivider label="Step 3, Understand how Meta charges you" />

      <h2 className="read-h2">The billing threshold</h2>

      <p>
        Meta doesn&apos;t charge you every day. They use something called a{" "}
        <strong>billing threshold</strong>. Here&apos;s how it works in plain
        English.
      </p>

      <p>
        When you start running ads, Meta lets you spend up to a certain dollar
        amount before they charge your card. For brand new accounts, that
        threshold usually starts at $25. So you spend $25 worth of ads, then
        Meta hits your card for $25. Then you get a new threshold. Often
        $50. Spend $50, get charged $50. Then $250. Then $750.
      </p>

      <p>
        Why does this matter? Two reasons.
      </p>

      <p>
        One. It means you might run ads for a few days and not see any
        charges yet. That&apos;s normal. Meta is just waiting to hit your
        threshold before billing you.
      </p>

      <p>
        Two. As your account proves it pays on time, the threshold grows.
        That&apos;s a good thing. It means Meta trusts you. As you scale up,
        you don&apos;t want your card hit ten times a day.
      </p>

      <Callout variant="insight">
        Meta also bills on the 1st of every month no matter what. So even if
        you didn&apos;t hit your threshold, on the 1st they sweep whatever
        you spent in the last month. Plan around it. Don&apos;t let your
        card go empty on the 1st.
      </Callout>

      <ChapterDivider label="Step 4, Set your daily spending limit" />

      <h2 className="read-h2">Cap your max spend</h2>

      <p>
        Inside Billing &amp; Payments, look for{" "}
        <strong>Account Spending Limit</strong>. This is different from your
        daily campaign budget. This is the total cap across your whole
        account.
      </p>

      <p>
        For your first 30 days, set this to <strong>$200</strong>. That way,
        even if something goes wrong (you forget to pause an ad, you set the
        wrong budget, Meta glitches), you can&apos;t spend more than $200.
        It&apos;s a safety net.
      </p>

      <p>
        Once you&apos;ve been running ads for a month and you trust the
        system, you can raise this limit. Or remove it. For now, keep it at
        $200.
      </p>

      <p>
        Click <strong>Save</strong>.
      </p>

      <ChapterDivider label="Step 5, Tour the Ads Manager dashboard" />

      <h2 className="read-h2">Campaigns, Ad Sets, Ads</h2>

      <p>
        At the top of your screen, click <strong>Ads Manager</strong>. This
        takes you out of Settings and into the dashboard where you actually
        run campaigns. It&apos;s the most important page in this entire book.
      </p>

      <p>
        At the top of the dashboard, you&apos;ll see three tabs side by
        side. <strong>Campaigns</strong>. <strong>Ad Sets</strong>.{" "}
        <strong>Ads</strong>. Get used to these three words. Every ad you
        ever run lives in one of these three tabs.
      </p>

      <p>
        Here&apos;s what each tab actually means.
      </p>

      <p>
        <strong>Campaigns.</strong> The top level. A campaign holds your goal.
        Like &ldquo;get more video views&rdquo; or &ldquo;send people to my
        Spotify.&rdquo; One campaign, one goal.
      </p>

      <p>
        <strong>Ad Sets.</strong> The middle level. An ad set sits inside a
        campaign and holds your audience and budget. So if your campaign goal
        is &ldquo;video views,&rdquo; the ad set says &ldquo;show this to
        people in Atlanta who like Brent Faiyaz, $5/day.&rdquo;
      </p>

      <p>
        <strong>Ads.</strong> The bottom level. An ad sits inside an ad set
        and is the actual creative. The video. The picture. The caption. The
        link. One ad set can hold multiple ads, so you can test different
        creatives against the same audience.
      </p>

      <p>
        Think of it like this. Campaign is the why. Ad Set is the who and
        how much. Ad is the what they see.
      </p>

      <Callout variant="pro">
        When you&apos;re looking at any of those three tabs, the columns to
        the right show you the data. Spend, results, cost per result, CTR.
        Click on any campaign to drill down into its ad sets. Click on any
        ad set to drill down into its ads. Up and down levels.
      </Callout>

      <ChapterDivider label="Step 6, Read the Account Status" />

      <h2 className="read-h2">Green is good. Yellow is fine. Red is panic.</h2>

      <p>
        At the top right of your Ads Manager, you&apos;ll see a small status
        indicator next to your account name. It tells you the health of your
        account.
      </p>

      <p>
        <strong>Active.</strong> Green. Everything is good. You can run ads.
      </p>

      <p>
        <strong>Pending Review.</strong> Yellow. Meta is checking something
        about your account. Usually billing or identity. Wait a day or two.
        It clears on its own most of the time.
      </p>

      <p>
        <strong>Disabled.</strong> Red. Meta shut your account down. This
        happens to everyone at some point. It&apos;s usually a wrong category
        or a music sample they think is copyrighted. Click the disabled
        notice and request a review. Most disables get reversed within 24 to
        48 hours.
      </p>

      <Callout variant="watch">
        If you get disabled, don&apos;t panic and don&apos;t make a new
        account. Making a new account when you&apos;re disabled gets you
        permanently banned. Just request the review and wait. The review
        button is right there on the disabled notice.
      </Callout>

      <ChapterDivider label="What you just did" />

      <h2 className="read-h2">You have a real Ad Account</h2>

      <p>
        Most artists pay $500 or more to hire someone to do what you just
        did. You did it in 15 minutes for free. Add that to the wins list.
      </p>

      <p>
        Right now, you have a Business Manager with your IG and FB Page
        attached, an Ad Account with billing set up, a $200 spending cap so
        you can&apos;t bleed money, and a clear understanding of how the
        Campaigns, Ad Sets, Ads structure works.
      </p>

      <p>
        Next chapter, we don&apos;t open Ads Manager. We open Instagram.
        Because before we run a single ad, we need to pick the right post.
        Running ads on weak content is the fastest way to burn $5/day. We&apos;re
        going to use a system to find the post that&apos;s already working
        and turn it into your first winning ad.
      </p>

      <Worksheet
        chapterId="ch4"
        title="Chapter 4 Worksheet"
        fields={c.worksheetFields!}
        checkboxes={c.worksheetCheckboxes!}
      />
    </ChapterShell>
  );
}
