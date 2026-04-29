"use client";

import ChapterShell from "../components/ChapterShell";
import Callout from "../components/Callout";
import Worksheet from "../components/Worksheet";
import ChapterDivider from "../components/ChapterDivider";
import { getChapter } from "../chapters";

export default function Ch3() {
  const c = getChapter("ch3")!;
  return (
    <ChapterShell id="ch3" particleVariant="green">
      <Callout variant="insight">
        Before you run a single ad, you need a Business Manager account. Skip
        this, and everything else gets messy fast.
      </Callout>

      <p>
        Read this chapter with your laptop open. Not your phone. Your laptop.
        Every step in this chapter is something you do live as you read. By the
        time you finish, your Business Manager will be set up. Don&apos;t just
        read it. Do it.
      </p>

      <p>
        This part is boring. I&apos;m not going to lie to you. Setting up
        accounts is never the fun part. But this is also the part most artists
        skip. They open Ads Manager, get confused, and quit. The artists who
        actually grow are the ones who set the foundation right. That&apos;s
        what we&apos;re doing today.
      </p>

      <p>
        It takes about 20 minutes. Once it&apos;s done, it&apos;s done forever.
      </p>

      <ChapterDivider label="Step 1, Open business.facebook.com" />

      <h2 className="read-h2">Go to the right website</h2>

      <p>Open a new tab on your laptop. Type in this address:</p>

      <p>
        <strong>business.facebook.com</strong>
      </p>

      <p>
        Hit Enter. You&apos;ll land on a page with a big blue button that says
        &ldquo;Create Account.&rdquo; If you&apos;re already logged into your
        personal Facebook, the page knows it&apos;s you. If you&apos;re not
        logged in, it&apos;ll ask you to log in first. Use your personal
        Facebook account to log in. We&apos;ll set up the business side in a
        minute.
      </p>

      <Callout variant="watch">
        Don&apos;t make a brand new Facebook account just for this. Use the
        personal Facebook account you already have. Meta wants a real human
        behind every Business Manager. New accounts get flagged and locked
        out. Your old personal account is fine.
      </Callout>

      <ChapterDivider label="Step 2, Click Create Account" />

      <h2 className="read-h2">Fill in the three boxes</h2>

      <p>
        After you click Create Account, a small window pops up. It asks for
        three things.
      </p>

      <p>
        <strong>Business name.</strong> Type in your artist name. If your
        artist name is &ldquo;Lil Example,&rdquo; type Lil Example. This is
        what shows up at the top of every dashboard. You can change it later
        if you need to.
      </p>

      <p>
        <strong>Your name.</strong> Type your real legal name. The one on your
        ID. Meta will check this later when they verify your account, so
        don&apos;t use your stage name here. Use your real name.
      </p>

      <p>
        <strong>Work email.</strong> This is the one most artists mess up.
        Don&apos;t use your personal Gmail. Make a new email just for your
        music business. Something like yourname.music@gmail.com or
        yourname.business@gmail.com. Keep it simple. Make it free.
      </p>

      <p>
        Why a separate email? Two reasons. One, when Meta sends you alerts,
        billing notices, or warnings, you want them in one place. Not buried
        in your personal inbox under Amazon receipts and family photos. Two,
        if you ever want to give someone access to help you, you can share
        the business email without giving up your personal life.
      </p>

      <p>
        Once those three boxes are filled in, click <strong>Submit</strong>.
        Meta sends a confirmation email to that new business email. Open it.
        Click the link inside. That confirms the email is yours. Now you have
        a Business Manager account.
      </p>

      <ChapterDivider label="Step 3, Tour the dashboard" />

      <h2 className="read-h2">What you&apos;re looking at</h2>

      <p>
        After you confirm your email, Meta drops you into the Business Manager
        Home dashboard. It looks like a lot. Don&apos;t panic. Most of these
        boxes you&apos;ll never touch.
      </p>

      <p>Here&apos;s what each part means in plain English.</p>

      <p>
        On the <strong>left side</strong>, you&apos;ll see a menu. The two
        words you care about right now are &ldquo;Accounts&rdquo; and
        &ldquo;Settings.&rdquo; Everything else is for big companies running
        twenty different brands. Ignore them.
      </p>

      <p>
        In the <strong>middle</strong>, you&apos;ll see boxes for
        &ldquo;Pages,&rdquo; &ldquo;Ad Accounts,&rdquo; and
        &ldquo;People.&rdquo; These are empty right now. We&apos;re going to
        fill them up in the next few steps.
      </p>

      <p>
        At the <strong>top</strong>, your business name shows up. If you ever
        run more than one business out of this dashboard, you switch between
        them up there. Most artists only need one. Stick with one.
      </p>

      <Callout variant="insight">
        Meta calls a Business Manager account a &ldquo;Business
        Portfolio.&rdquo; Same thing. New name. They renamed it a few years
        back to sound more professional. If you see &ldquo;Business
        Portfolio&rdquo; on the screen, it means your Business Manager.
        Don&apos;t let the word throw you off.
      </Callout>

      <ChapterDivider label="Step 4, Set up your business profile" />

      <h2 className="read-h2">Make it look like a real business</h2>

      <p>
        On the left menu, click <strong>Settings</strong>. A new page loads
        with more menu options on the left. Click{" "}
        <strong>Business Info</strong>.
      </p>

      <p>
        You&apos;ll see fields for things like address, phone number, and
        business type. Fill them all out. Use your real address. Use a phone
        number you can answer if Meta ever calls to verify you. For business
        type, pick &ldquo;Self-employed&rdquo; or &ldquo;Other&rdquo; if you
        don&apos;t have an LLC yet. If you do have an LLC, pick that.
      </p>

      <p>
        This step seems pointless but it matters. Meta uses this info to
        verify you&apos;re a real person running a real thing. Accounts with
        empty business info get flagged faster. Take the five minutes and
        fill it in.
      </p>

      <p>Hit Save when you&apos;re done. Move on.</p>

      <ChapterDivider label="Step 5, Connect your Instagram" />

      <h2 className="read-h2">Plug in your IG account</h2>

      <p>
        Still inside Settings, look for the menu item called{" "}
        <strong>Instagram accounts</strong>. Click it. You&apos;ll see a blue
        button that says <strong>Add</strong>.
      </p>

      <p>
        Click Add. A small window opens. It asks for your Instagram username
        and password. Type them in. Click <strong>Log In</strong>.
      </p>

      <p>
        If your Instagram is set to a Personal account, Meta will ask you to
        switch it to a Business or Creator account first. Pick{" "}
        <strong>Business</strong>. It unlocks more ad features and gives you
        better insights. You can switch back later if you ever want to,
        though I&apos;ve never met an artist who wanted to.
      </p>

      <p>
        Once your IG is connected, you&apos;ll see a green checkmark next to
        your username on the Instagram accounts page. That&apos;s the move.
      </p>

      <Callout variant="watch">
        If you have two-factor authentication on Instagram (and you should),
        Meta will text you a code during this step. Have your phone ready.
        The code expires in a few minutes, so don&apos;t walk away.
      </Callout>

      <ChapterDivider label="Step 6, Connect your Facebook Page" />

      <h2 className="read-h2">Yes, you need a Facebook Page too</h2>

      <p>
        I know what you&apos;re thinking. &ldquo;I don&apos;t even use
        Facebook.&rdquo; Doesn&apos;t matter. Meta requires a Facebook Page to
        run ads. Even if you only post on Instagram, you need a Facebook Page
        attached to your Business Manager. No Page, no ads. Period.
      </p>

      <p>
        Go back to Settings. Click <strong>Pages</strong> in the left menu.
        Click <strong>Add</strong>. A box pops up asking what you want to do.
      </p>

      <p>
        If you already have a Facebook Page for your music, click{" "}
        <strong>Add a Page</strong> and search for your page name. Pick it.
        Done.
      </p>

      <p>
        If you don&apos;t have one, click{" "}
        <strong>Create a New Page</strong>. Use your artist name as the Page
        name. Pick &ldquo;Musician/Band&rdquo; as the category. Add a profile
        picture (your logo or a clean photo). That&apos;s it. The Page
        doesn&apos;t need to be active. It just needs to exist. Most of your
        fans won&apos;t ever see it. It&apos;s a backend thing for ads.
      </p>

      <p>
        Once the Page is connected, you&apos;ll see it listed under Pages
        with a green status indicator. That means it&apos;s ready to be used
        for ads.
      </p>

      <Callout variant="pro">
        Make the Facebook Page profile picture and name match your Instagram
        exactly. When your ads run, people sometimes click through to the
        Page. If your Page looks dead or different from your IG, you lose
        trust. Match them up. Takes five minutes.
      </Callout>

      <ChapterDivider label="What you just did" />

      <h2 className="read-h2">Your Business Manager is live</h2>

      <p>
        You did the boring part. Most artists never do this. You&apos;re
        already ahead of 90% of the game.
      </p>

      <p>
        Right now, your Business Manager has your business name, your real
        info, your Instagram connected, and your Facebook Page connected.
        That&apos;s the foundation. Everything we do from here, audiences,
        custom audiences, lookalikes, real ads, sits on top of this.
      </p>

      <p>
        Next chapter, we add an Ad Account inside this Business Manager and
        plug in your billing. That&apos;s when Meta starts charging you. Get
        excited. Twenty bucks a week buys you the system that turns into ten
        thousand monthly listeners.
      </p>

      <Worksheet
        chapterId="ch3"
        title="Chapter 3 Worksheet"
        fields={c.worksheetFields!}
        checkboxes={c.worksheetCheckboxes!}
      />
    </ChapterShell>
  );
}
