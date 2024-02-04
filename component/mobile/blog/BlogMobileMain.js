import React, { useEffect, useState } from "react";
import Link from "next/link";
import BlogMainAuthorBlock from "../../desktop/blog/BlogMainAuthorBlock";
import MobileNavbar from "../MobileNavbar";
import isEmpty from "../../../store/validation/is-empty";
import { compareAsc } from "date-fns";
import { useRouter } from "next/router";

let blogData = [
  {
    id: "1",
    title: "15 Best Cold Email Templates (to Generate Better Leads)",
    imgUrl:
      "https://res.cloudinary.com/myrltech/image/upload/v1707071617/15-Best-Cold-Email-Templates-to-Improve-Sales-Email-Outreach--Featured-Image-.jpg",
    author: "Akhil Sharma",
    description: `
  # Cold Email Templates: Boost Your Sales Outreach

Cold emailing is one of the most effective ways to generate leads, but it's also time-consuming AF. The right cold email templates will save you time, get more replies, and generate more leads.

I’ve been sending cold emails for 20+ years, and I’ve seen it all. Rejection, excited replies, laughter, and everything in between. These cold email templates are my best of the best. They’ve established high-value prospect relationships and landed us big new deals, but more than anything else—they get opens, replies, and start conversations.

There's just one small caveat to using these templates—you can't copy, paste, hit "send," and expect a flood of new business from potential clients. The best cold email templates are those that continue to evolve and work for you over time.

Now, let’s dig into 15 of our favorite cold email templates.

## 1. The Authentic Referral Cold Email
**Subject Line:** [Name], can you help?

Hey [first name],

We recently launched a new platform at [your company] that [one-sentence pitch] and we’re seeing awesome [get specific] results for [your target customers].

Do you handle [the thing your product/service does] at [company name]?

Thanks

[your name]

**When to use this cold email template:**
The most effective cold email templates are short and concise. You're looking to build an authentic relationship with the potential prospect and get passed along to the right decision-maker in their organization, even if it's not them.

Use this sales email template when you have a bigger ask (in this example, a meeting) but aren’t sure you’re talking to the right person.

Have fun with your email game. Use our free cold email generator to leverage the power of AI and write high-impact cold emails instantly.

[Generate Customizable Cold Email Templates with Our Free AI-Powered Tool](link)

## 2. Asking for an Introduction Email Template
**Subject Line:** Can you show me the way?

Hey [first name],

I'm with [my company name], and we work with organizations like [prospect company name] to [insert one-sentence pitch].

Can you point me towards the right person on your team to chat with about this?

Cheers,

[your name]

**When to use this sales email template:**
This email template is ideal if you can’t find someone who feels like the perfect point of contact at a company you’re prospecting. There's no fluff, just direct and benefit-driven copy. Use this if you’re pretty confident your recipient isn't a decision-maker—there's no need to waste their time.

## 3. Authority-Building Referral Email
**Subject Line:** Want [insert metric from case study]?

Hey [first name],

I’ll get straight to the point, we help [your target customer] [main pain point] and [our solution, tool, service, product, team, etc] is extremely effective.

We've already helped companies like [3-4 current relevant customer names] reach [insert specific metrics].

Do you have 15 minutes tomorrow to chat about [#1 benefit your prospect can expect]?

[Include link to schedule call]

Thanks for your time,

[your name]

**When to use this cold outreach template:**
Building authority and trust will dramatically help your email (and business) stand out in a crowded inbox. This cold email example passes that test with flying colors.

Use this template when building trust matters most. For example, if you’re trying to land an enterprise client with a long sales cycle, or if your solution comes with a premium price tag. Consider customizing this email by adding some social proof to get your recipients excited to reply.

[Image of table and computer in an office where sales reps send cold emails](image_link)

## 4. Recent Event Cold Outreach Email
**Subject Line:** Congrats on [event]!

Hey [first name],

I saw you recently [insert event—acquisition, new product launch, etc.]. Congrats! [Include 1-2 more genuine, brief sentences elaborating on how excited they are, mention if you saw good press, how it made you feel, etc.]

After [event] many companies focus more on [industry/value you offer]. Things are probably crazy right now at [prospect company name], but I'd love to share how we can help [main benefit.]

Do you have time to chat next week? [Insert 1-2 times you're available or link to your calendar.]

Congrats again,

[your name]

**When to use the recent event outreach template:**
Before launching any email outreach campaign, ya gotta research your prospects and draw some insights about the people you’re messaging. If you come across an event or announcement that peaks your interest, that’s when this outbound template will come in handy.

Being genuine is key here, otherwise this email will get sent straight to the trash. Think about how you’d feel receiving a cold email with a shallow, disingenuous congratulations about a meaningful event in your life. Be sure you offer a detailed congratulations based on your real research, not just a one-liner followed immediately by a sales pitch. As always, close out this cold sales email template with a call to action, asking them to take a clear next step.

## 5. The Quick Question Cold Email Template
**Subject Line:** Quick question

Hey [first name],

Over at [your company] we’ve helped [number of customers] companies like [recipient company] achieve [quick major benefit, numbers or statistics are a major bonus].

Could you point me towards the right member of your team to chat about[insert your biggest pain point here that resonates with your ideal customer; OR insert function like “sales” or “recruiting”]?

Thank you,

[your name]

**When to use this sales email template:**
Use this approach when you’re reaching out to time-strapped decision-makers, or when your previous outreach campaigns have had low open rates. People are busy; email inboxes are full. Sometimes the best approach is short and straight to the point.

From the subject line alone, your recipient knows this email won't take much time to read—but if it does, don’t expect a reply. This cold email template can also be adjusted to offer a direct sales pitch in your email if you know you’re reaching the right point of contact.

## 6. PAS Competitor Mention Template
**Subject Line:** Scale [their company name] in [time frame]

Hey [first name],

While researching [company name], I came across your profile—looks like you’ve been busy the past [number of years they've worked at the company, look it up on their LinkedIn profile] years scaling the [department] team

Does your team ever struggle with [address pain point your solution solves]?

[Recognizable competitor] needed a way to [what you offer]. Since leveraging [your company name], their [major benefit]. As a result, their customers experienced [business impact].

Does it make sense to explore ways we can help your team as well?

[your name]

**When to use this B2B cold email template:**
This email template uses the PAS (problem, agitate, solution) framework by mentioning a competitor that’s already benefited from your solution. Use this template with prospects in the

  `,
    shortDescription:
      "Cold emailing is one of the most effective ways to generate leads, but it's also time consuming AF. The right cold email templates will save you time, get more replies, and generate more leads.",
    tag1: "Sales Process",
    tag2: "Sales Teams & Management",
    datePosted: new Date().toISOString(),
    time_to_read: 1,
    authorImg:
      "https://res.cloudinary.com/myrltech/image/upload/v1707072677/authorImage.jpg",
  },
  {
    id: "2",
    title:
      "Key Account Management: Build Stronger Relationships with Key Customers",
    imgUrl:
      "https://res.cloudinary.com/myrltech/image/upload/v1707071640/Key-Account-Management---Build-Stronger-Relationships-with-Key-Customers.jpg",
    author: "Akhil Sharma",
    description: `
  # Cold Email Templates: Boost Your Sales Outreach

Cold emailing is one of the most effective ways to generate leads, but it's also time-consuming AF. The right cold email templates will save you time, get more replies, and generate more leads.

I’ve been sending cold emails for 20+ years, and I’ve seen it all. Rejection, excited replies, laughter, and everything in between. These cold email templates are my best of the best. They’ve established high-value prospect relationships and landed us big new deals, but more than anything else—they get opens, replies, and start conversations.

There's just one small caveat to using these templates—you can't copy, paste, hit "send," and expect a flood of new business from potential clients. The best cold email templates are those that continue to evolve and work for you over time.

Now, let’s dig into 15 of our favorite cold email templates.

## 1. The Authentic Referral Cold Email
**Subject Line:** [Name], can you help?

Hey [first name],

We recently launched a new platform at [your company] that [one-sentence pitch] and we’re seeing awesome [get specific] results for [your target customers].

Do you handle [the thing your product/service does] at [company name]?

Thanks

[your name]

**When to use this cold email template:**
The most effective cold email templates are short and concise. You're looking to build an authentic relationship with the potential prospect and get passed along to the right decision-maker in their organization, even if it's not them.

Use this sales email template when you have a bigger ask (in this example, a meeting) but aren’t sure you’re talking to the right person.

Have fun with your email game. Use our free cold email generator to leverage the power of AI and write high-impact cold emails instantly.

[Generate Customizable Cold Email Templates with Our Free AI-Powered Tool](link)

## 2. Asking for an Introduction Email Template
**Subject Line:** Can you show me the way?

Hey [first name],

I'm with [my company name], and we work with organizations like [prospect company name] to [insert one-sentence pitch].

Can you point me towards the right person on your team to chat with about this?

Cheers,

[your name]

**When to use this sales email template:**
This email template is ideal if you can’t find someone who feels like the perfect point of contact at a company you’re prospecting. There's no fluff, just direct and benefit-driven copy. Use this if you’re pretty confident your recipient isn't a decision-maker—there's no need to waste their time.

## 3. Authority-Building Referral Email
**Subject Line:** Want [insert metric from case study]?

Hey [first name],

I’ll get straight to the point, we help [your target customer] [main pain point] and [our solution, tool, service, product, team, etc] is extremely effective.

We've already helped companies like [3-4 current relevant customer names] reach [insert specific metrics].

Do you have 15 minutes tomorrow to chat about [#1 benefit your prospect can expect]?

[Include link to schedule call]

Thanks for your time,

[your name]

**When to use this cold outreach template:**
Building authority and trust will dramatically help your email (and business) stand out in a crowded inbox. This cold email example passes that test with flying colors.

Use this template when building trust matters most. For example, if you’re trying to land an enterprise client with a long sales cycle, or if your solution comes with a premium price tag. Consider customizing this email by adding some social proof to get your recipients excited to reply.

[Image of table and computer in an office where sales reps send cold emails](image_link)

## 4. Recent Event Cold Outreach Email
**Subject Line:** Congrats on [event]!

Hey [first name],

I saw you recently [insert event—acquisition, new product launch, etc.]. Congrats! [Include 1-2 more genuine, brief sentences elaborating on how excited they are, mention if you saw good press, how it made you feel, etc.]

After [event] many companies focus more on [industry/value you offer]. Things are probably crazy right now at [prospect company name], but I'd love to share how we can help [main benefit.]

Do you have time to chat next week? [Insert 1-2 times you're available or link to your calendar.]

Congrats again,

[your name]

**When to use the recent event outreach template:**
Before launching any email outreach campaign, ya gotta research your prospects and draw some insights about the people you’re messaging. If you come across an event or announcement that peaks your interest, that’s when this outbound template will come in handy.

Being genuine is key here, otherwise this email will get sent straight to the trash. Think about how you’d feel receiving a cold email with a shallow, disingenuous congratulations about a meaningful event in your life. Be sure you offer a detailed congratulations based on your real research, not just a one-liner followed immediately by a sales pitch. As always, close out this cold sales email template with a call to action, asking them to take a clear next step.

## 5. The Quick Question Cold Email Template
**Subject Line:** Quick question

Hey [first name],

Over at [your company] we’ve helped [number of customers] companies like [recipient company] achieve [quick major benefit, numbers or statistics are a major bonus].

Could you point me towards the right member of your team to chat about[insert your biggest pain point here that resonates with your ideal customer; OR insert function like “sales” or “recruiting”]?

Thank you,

[your name]

**When to use this sales email template:**
Use this approach when you’re reaching out to time-strapped decision-makers, or when your previous outreach campaigns have had low open rates. People are busy; email inboxes are full. Sometimes the best approach is short and straight to the point.

From the subject line alone, your recipient knows this email won't take much time to read—but if it does, don’t expect a reply. This cold email template can also be adjusted to offer a direct sales pitch in your email if you know you’re reaching the right point of contact.

## 6. PAS Competitor Mention Template
**Subject Line:** Scale [their company name] in [time frame]

Hey [first name],

While researching [company name], I came across your profile—looks like you’ve been busy the past [number of years they've worked at the company, look it up on their LinkedIn profile] years scaling the [department] team

Does your team ever struggle with [address pain point your solution solves]?

[Recognizable competitor] needed a way to [what you offer]. Since leveraging [your company name], their [major benefit]. As a result, their customers experienced [business impact].

Does it make sense to explore ways we can help your team as well?

[your name]

**When to use this B2B cold email template:**
This email template uses the PAS (problem, agitate, solution) framework by mentioning a competitor that’s already benefited from your solution. Use this template with prospects in the

  `,
    shortDescription:
      "Unlock key account management strategies to strengthen your key customer relationships, maximize customer loyalty, and close more deals.",
    tag1: "Sales Process",
    tag2: "Sales Teams & Management",
    datePosted: new Date().toISOString(),
    time_to_read: 1,
    authorImg:
      "https://res.cloudinary.com/myrltech/image/upload/v1707072677/authorImage.jpg",
  },
  {
    id: "3",
    title:
      "The Ultimate Guide to Calculating Churn Rate (Step-by-Step Process)",
    imgUrl:
      "https://res.cloudinary.com/myrltech/image/upload/v1707071714/churn-rate.png",
    author: "Akhil Sharma",
    description: `
  # Cold Email Templates: Boost Your Sales Outreach

Cold emailing is one of the most effective ways to generate leads, but it's also time-consuming AF. The right cold email templates will save you time, get more replies, and generate more leads.

I’ve been sending cold emails for 20+ years, and I’ve seen it all. Rejection, excited replies, laughter, and everything in between. These cold email templates are my best of the best. They’ve established high-value prospect relationships and landed us big new deals, but more than anything else—they get opens, replies, and start conversations.

There's just one small caveat to using these templates—you can't copy, paste, hit "send," and expect a flood of new business from potential clients. The best cold email templates are those that continue to evolve and work for you over time.

Now, let’s dig into 15 of our favorite cold email templates.

## 1. The Authentic Referral Cold Email
**Subject Line:** [Name], can you help?

Hey [first name],

We recently launched a new platform at [your company] that [one-sentence pitch] and we’re seeing awesome [get specific] results for [your target customers].

Do you handle [the thing your product/service does] at [company name]?

Thanks

[your name]

**When to use this cold email template:**
The most effective cold email templates are short and concise. You're looking to build an authentic relationship with the potential prospect and get passed along to the right decision-maker in their organization, even if it's not them.

Use this sales email template when you have a bigger ask (in this example, a meeting) but aren’t sure you’re talking to the right person.

Have fun with your email game. Use our free cold email generator to leverage the power of AI and write high-impact cold emails instantly.

[Generate Customizable Cold Email Templates with Our Free AI-Powered Tool](link)

## 2. Asking for an Introduction Email Template
**Subject Line:** Can you show me the way?

Hey [first name],

I'm with [my company name], and we work with organizations like [prospect company name] to [insert one-sentence pitch].

Can you point me towards the right person on your team to chat with about this?

Cheers,

[your name]

**When to use this sales email template:**
This email template is ideal if you can’t find someone who feels like the perfect point of contact at a company you’re prospecting. There's no fluff, just direct and benefit-driven copy. Use this if you’re pretty confident your recipient isn't a decision-maker—there's no need to waste their time.

## 3. Authority-Building Referral Email
**Subject Line:** Want [insert metric from case study]?

Hey [first name],

I’ll get straight to the point, we help [your target customer] [main pain point] and [our solution, tool, service, product, team, etc] is extremely effective.

We've already helped companies like [3-4 current relevant customer names] reach [insert specific metrics].

Do you have 15 minutes tomorrow to chat about [#1 benefit your prospect can expect]?

[Include link to schedule call]

Thanks for your time,

[your name]

**When to use this cold outreach template:**
Building authority and trust will dramatically help your email (and business) stand out in a crowded inbox. This cold email example passes that test with flying colors.

Use this template when building trust matters most. For example, if you’re trying to land an enterprise client with a long sales cycle, or if your solution comes with a premium price tag. Consider customizing this email by adding some social proof to get your recipients excited to reply.

[Image of table and computer in an office where sales reps send cold emails](image_link)

## 4. Recent Event Cold Outreach Email
**Subject Line:** Congrats on [event]!

Hey [first name],

I saw you recently [insert event—acquisition, new product launch, etc.]. Congrats! [Include 1-2 more genuine, brief sentences elaborating on how excited they are, mention if you saw good press, how it made you feel, etc.]

After [event] many companies focus more on [industry/value you offer]. Things are probably crazy right now at [prospect company name], but I'd love to share how we can help [main benefit.]

Do you have time to chat next week? [Insert 1-2 times you're available or link to your calendar.]

Congrats again,

[your name]

**When to use the recent event outreach template:**
Before launching any email outreach campaign, ya gotta research your prospects and draw some insights about the people you’re messaging. If you come across an event or announcement that peaks your interest, that’s when this outbound template will come in handy.

Being genuine is key here, otherwise this email will get sent straight to the trash. Think about how you’d feel receiving a cold email with a shallow, disingenuous congratulations about a meaningful event in your life. Be sure you offer a detailed congratulations based on your real research, not just a one-liner followed immediately by a sales pitch. As always, close out this cold sales email template with a call to action, asking them to take a clear next step.

## 5. The Quick Question Cold Email Template
**Subject Line:** Quick question

Hey [first name],

Over at [your company] we’ve helped [number of customers] companies like [recipient company] achieve [quick major benefit, numbers or statistics are a major bonus].

Could you point me towards the right member of your team to chat about[insert your biggest pain point here that resonates with your ideal customer; OR insert function like “sales” or “recruiting”]?

Thank you,

[your name]

**When to use this sales email template:**
Use this approach when you’re reaching out to time-strapped decision-makers, or when your previous outreach campaigns have had low open rates. People are busy; email inboxes are full. Sometimes the best approach is short and straight to the point.

From the subject line alone, your recipient knows this email won't take much time to read—but if it does, don’t expect a reply. This cold email template can also be adjusted to offer a direct sales pitch in your email if you know you’re reaching the right point of contact.

## 6. PAS Competitor Mention Template
**Subject Line:** Scale [their company name] in [time frame]

Hey [first name],

While researching [company name], I came across your profile—looks like you’ve been busy the past [number of years they've worked at the company, look it up on their LinkedIn profile] years scaling the [department] team

Does your team ever struggle with [address pain point your solution solves]?

[Recognizable competitor] needed a way to [what you offer]. Since leveraging [your company name], their [major benefit]. As a result, their customers experienced [business impact].

Does it make sense to explore ways we can help your team as well?

[your name]

**When to use this B2B cold email template:**
This email template uses the PAS (problem, agitate, solution) framework by mentioning a competitor that’s already benefited from your solution. Use this template with prospects in the

  `,
    shortDescription:
      "Customer churn rate is a metric that shows the health of your business. Learn how to calculate churn rate and improve customer retention.",
    tag1: "SALES METRICS",
    tag2: "Sales Teams & Management",
    datePosted: new Date().toISOString(),
    time_to_read: 1,
    authorImg:
      "https://res.cloudinary.com/myrltech/image/upload/v1707072677/authorImage.jpg",
  },
  {
    id: "4",
    title: "12 LinkedIn Summary Examples We Love (and How To Shine in Yours)",
    imgUrl:
      "https://res.cloudinary.com/myrltech/image/upload/v1707071738/12-LinkedIn-Summary-Examples-We-Love--and-How-To-Shine-in-Yours-.png",
    author: "Akhil Sharma",
    description: `
  # Cold Email Templates: Boost Your Sales Outreach

Cold emailing is one of the most effective ways to generate leads, but it's also time-consuming AF. The right cold email templates will save you time, get more replies, and generate more leads.

I’ve been sending cold emails for 20+ years, and I’ve seen it all. Rejection, excited replies, laughter, and everything in between. These cold email templates are my best of the best. They’ve established high-value prospect relationships and landed us big new deals, but more than anything else—they get opens, replies, and start conversations.

There's just one small caveat to using these templates—you can't copy, paste, hit "send," and expect a flood of new business from potential clients. The best cold email templates are those that continue to evolve and work for you over time.

Now, let’s dig into 15 of our favorite cold email templates.

## 1. The Authentic Referral Cold Email
**Subject Line:** [Name], can you help?

Hey [first name],

We recently launched a new platform at [your company] that [one-sentence pitch] and we’re seeing awesome [get specific] results for [your target customers].

Do you handle [the thing your product/service does] at [company name]?

Thanks

[your name]

**When to use this cold email template:**
The most effective cold email templates are short and concise. You're looking to build an authentic relationship with the potential prospect and get passed along to the right decision-maker in their organization, even if it's not them.

Use this sales email template when you have a bigger ask (in this example, a meeting) but aren’t sure you’re talking to the right person.

Have fun with your email game. Use our free cold email generator to leverage the power of AI and write high-impact cold emails instantly.

[Generate Customizable Cold Email Templates with Our Free AI-Powered Tool](link)

## 2. Asking for an Introduction Email Template
**Subject Line:** Can you show me the way?

Hey [first name],

I'm with [my company name], and we work with organizations like [prospect company name] to [insert one-sentence pitch].

Can you point me towards the right person on your team to chat with about this?

Cheers,

[your name]

**When to use this sales email template:**
This email template is ideal if you can’t find someone who feels like the perfect point of contact at a company you’re prospecting. There's no fluff, just direct and benefit-driven copy. Use this if you’re pretty confident your recipient isn't a decision-maker—there's no need to waste their time.

## 3. Authority-Building Referral Email
**Subject Line:** Want [insert metric from case study]?

Hey [first name],

I’ll get straight to the point, we help [your target customer] [main pain point] and [our solution, tool, service, product, team, etc] is extremely effective.

We've already helped companies like [3-4 current relevant customer names] reach [insert specific metrics].

Do you have 15 minutes tomorrow to chat about [#1 benefit your prospect can expect]?

[Include link to schedule call]

Thanks for your time,

[your name]

**When to use this cold outreach template:**
Building authority and trust will dramatically help your email (and business) stand out in a crowded inbox. This cold email example passes that test with flying colors.

Use this template when building trust matters most. For example, if you’re trying to land an enterprise client with a long sales cycle, or if your solution comes with a premium price tag. Consider customizing this email by adding some social proof to get your recipients excited to reply.

[Image of table and computer in an office where sales reps send cold emails](image_link)

## 4. Recent Event Cold Outreach Email
**Subject Line:** Congrats on [event]!

Hey [first name],

I saw you recently [insert event—acquisition, new product launch, etc.]. Congrats! [Include 1-2 more genuine, brief sentences elaborating on how excited they are, mention if you saw good press, how it made you feel, etc.]

After [event] many companies focus more on [industry/value you offer]. Things are probably crazy right now at [prospect company name], but I'd love to share how we can help [main benefit.]

Do you have time to chat next week? [Insert 1-2 times you're available or link to your calendar.]

Congrats again,

[your name]

**When to use the recent event outreach template:**
Before launching any email outreach campaign, ya gotta research your prospects and draw some insights about the people you’re messaging. If you come across an event or announcement that peaks your interest, that’s when this outbound template will come in handy.

Being genuine is key here, otherwise this email will get sent straight to the trash. Think about how you’d feel receiving a cold email with a shallow, disingenuous congratulations about a meaningful event in your life. Be sure you offer a detailed congratulations based on your real research, not just a one-liner followed immediately by a sales pitch. As always, close out this cold sales email template with a call to action, asking them to take a clear next step.

## 5. The Quick Question Cold Email Template
**Subject Line:** Quick question

Hey [first name],

Over at [your company] we’ve helped [number of customers] companies like [recipient company] achieve [quick major benefit, numbers or statistics are a major bonus].

Could you point me towards the right member of your team to chat about[insert your biggest pain point here that resonates with your ideal customer; OR insert function like “sales” or “recruiting”]?

Thank you,

[your name]

**When to use this sales email template:**
Use this approach when you’re reaching out to time-strapped decision-makers, or when your previous outreach campaigns have had low open rates. People are busy; email inboxes are full. Sometimes the best approach is short and straight to the point.

From the subject line alone, your recipient knows this email won't take much time to read—but if it does, don’t expect a reply. This cold email template can also be adjusted to offer a direct sales pitch in your email if you know you’re reaching the right point of contact.

## 6. PAS Competitor Mention Template
**Subject Line:** Scale [their company name] in [time frame]

Hey [first name],

While researching [company name], I came across your profile—looks like you’ve been busy the past [number of years they've worked at the company, look it up on their LinkedIn profile] years scaling the [department] team

Does your team ever struggle with [address pain point your solution solves]?

[Recognizable competitor] needed a way to [what you offer]. Since leveraging [your company name], their [major benefit]. As a result, their customers experienced [business impact].

Does it make sense to explore ways we can help your team as well?

[your name]

**When to use this B2B cold email template:**
This email template uses the PAS (problem, agitate, solution) framework by mentioning a competitor that’s already benefited from your solution. Use this template with prospects in the

  `,
    shortDescription:
      "Writing your LinkedIn Summary doesn’t have to be hard. Learn from 12 great LinkedIn Summary examples and use our free AI summary generator.",
    tag1: "SALES MANAGEMENT",
    tag2: "Sales Teams & Management",
    datePosted: new Date().toISOString(),
    time_to_read: 1,
    authorImg:
      "https://res.cloudinary.com/myrltech/image/upload/v1707072677/authorImage.jpg",
  },
];

let remainingBlogs = blogData.filter((ele) => ele.id !== "1");

export default function BlogMobileMain({ blogs }) {
  const router = useRouter();

  const [searchResult, setSearchResult] = useState(blogs);

  // useEffect(() => {
  //   if (!isEmpty(blogs)) {
  //     let newLatestBlogs = setLatestBlogsFirst(blogs);
  //     setSearchResult(newLatestBlogs);
  //   }
  // }, [blogs]);

  // const cardOneData = searchResult.slice(0, 1)[0];
  // const blogCardsArrayOne = searchResult.slice(0, 1);
  // const lastCardData = searchResult.slice(0, 1)[0];
  // const blogCardsArrayOne = searchResult.slice(1, searchResult.length - 1);
  // const lastCardData =
  //   searchResult.length > 1
  //     ? searchResult.slice(searchResult.length - 1, searchResult.length)[0]
  //     : [];

  // console.log(cardOneData, blogCardsArrayOne, lastCardData);

  /*=======================================
              handler
  ======================================*/
  const setLatestBlogsFirst = (result) => {
    // descendign order as per updated date
    let newLatestBlogsArray = result.sort((a, b) =>
      compareAsc(new Date(b.updatedAt), new Date(a.updatedAt))
    );

    return newLatestBlogsArray;
  };

  /*============================================
             renderCardOne
  =============================================*/
  const renderCardOne = () => {
    return (
      !isEmpty(blogData) && (
        <article className="blog-fold-2__colm1-blog">
          {/* <Link as={`/blog/${cardOneData.slug}`} href="/blog/[id]"> */}
          <a>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => navigateHandler(blogData[0])}
              className="blog-fold-2-img-block"
            >
              <img
                // src="/img/desktop/blog/blog-fold2-img.svg"
                src={blogData[0].imgUrl}
                // alt={blogData[0].featured_image[0].alternativeText}
              />
            </div>
          </a>
          {/* </Link> */}
          <div className={"blog-fold-2__colm1-blog-content"}>
            {/* <Link as={`/blog/${blogData[0].slug}`} href="/blog/[id]"> */}
            <a>
              <h2
                style={{ cursor: "pointer" }}
                onClick={() => navigateHandler(blogData[0])}
                className="blog-title-1"
              >
                {/* YouTube Previews Upcoming Improvements for YouTube Studio */}
                {blogData[0].title}
              </h2>
            </a>
            {/* </Link> */}
            <p className="blog-desc-text blog-desc-text--fold1">
              <i>
                {/* Facebook's New 'Smart Crop' Feature for Automated Video Editing */}
                {blogData[0].shortDescription}
              </i>
            </p>
            <div className="blog-author-block-mb-no-img blog-author-block--fold1">
              <BlogMainAuthorBlock
                displayImage={isEmpty(blogData[0].authorImg) ? false : true}
                authorImg={
                  !isEmpty(blogData[0].authorImg) ? blogData[0].authorImg : ""
                }
                authorName={blogData[0].author}
                blogUpatedAt={blogData[0].datePosted}
              />
            </div>
            <div className="blog-fold-1-tags-block row mx-0 align-items-center">
              {!isEmpty(blogData[0].tag1) && (
                <div className="new-blog-technology-div">
                  <span>{blogData[0].tag1}</span>
                </div>
              )}
              {!isEmpty(blogData[0].tag2) && (
                <div className="new-blog-technology-div">
                  <span>{blogData[0].tag2}</span>
                </div>
              )}
            </div>
          </div>
        </article>
      )
    );
  };

  /*============================================
             renderFoldTwo
  =============================================*/
  const renderFoldTwo = () => {
    return (
      !isEmpty(remainingBlogs) &&
      remainingBlogs.map((data, index) => (
        <article key={index} className="blog-fold-2__colm1-blog">
          <div
            className={
              "blog-fold-2__colm1-blog-content blog-fold-2__colm1-blog-content--featuredImgNone"
            }
          >
            {/* <Link as={`/blog/${data.slug}`} href="/blog/[id]"> */}
            <a>
              <img
                style={{ cursor: "pointer" }}
                onClick={() => navigateHandler(data)}
                // src="/img/desktop/blog/blog-fold2-img.svg"
                src={data.imgUrl}
                // alt={data.featured_image[0].alternativeText}
                className="blog-fold-2-img-block"
              />
            </a>
            {/* </Link> */}

            {/* <Link as={`/blog/${data.slug}`} href="/blog/[id]"> */}
            <a>
              <h2
                style={{ cursor: "pointer" }}
                onClick={() => navigateHandler(data)}
                className="blog-title-1 blog-title-1--newDesign"
              >
                {/* YouTube Previews Upcoming Improvements for YouTube Studio */}
                {data.title}
              </h2>
            </a>
            {/* </Link> */}
            <p className="blog-desc-text">
              <i>
                {/* Facebook's New 'Smart Crop' Feature for Automated Video Editing */}
                {data.shortDescription}
              </i>
            </p>
            <div className={"blog-author-block-mb-no-img"}>
              <BlogMainAuthorBlock
                displayImage={isEmpty(data.authorImg) ? false : true}
                authorImg={!isEmpty(data.authorImg) ? data.authorImg : ""}
                authorName={data.author}
                blogUpatedAt={data.datePosted}
              />
            </div>
            <div className="blog-fold-1-tags-block row mx-0 align-items-center">
              {!isEmpty(data.tag1) && (
                <div className="new-blog-technology-div">
                  <span>{data.tag1}</span>
                </div>
              )}
            </div>
          </div>
        </article>
      ))
    );
  };

  /*============================================
             renderLastFold
  =============================================*/
  const renderLastFold = () => {
    return (
      !isEmpty(blogData) && (
        <article className="blog-fold-2__colm1-blog blog-fold-2__colm1-blog--fold3">
          {/* <Link as={`/blog/${lastCardData.slug}`} href="/blog/[id]"> */}
          <a>
            <img
              // src="/img/desktop/blog/blog-fold2-img.svg"
              src={blogData[3].imgUrl}
              // alt={blogData[3].featured_image[0].alternativeText}
              className="blog-fold-2-img-block"
            />
          </a>
          {/* </Link> */}
          <div className={"blog-fold-2__colm1-blog-content"}>
            {/* <Link as={`/blog/${blogData[3].slug}`} href="/blog/[id]"> */}
            <a>
              <h2 className="blog-title-1 blog-title-1--fold3">
                {/* YouTube Previews Upcoming Improvements for YouTube Studio */}
                {blogData[3].title}
              </h2>
            </a>
            {/* </Link> */}
            <div className={"blog-author-block-mb-no-img"}>
              <BlogMainAuthorBlock
                displayImage={isEmpty(blogData[3].authorImg) ? false : true}
                authorImg={
                  !isEmpty(blogData[3].authorImg) ? blogData[3].authorImg : ""
                }
                authorName={blogData[3].author}
                blogUpatedAt={blogData[3].datePosted}
              />
            </div>
            <div className="blog-fold-1-tags-block row mx-0 align-items-center">
              {!isEmpty(blogData[3].tag1) && (
                <div className="new-blog-technology-div">
                  <span>{blogData[3].tag1}</span>
                </div>
              )}
              {!isEmpty(blogData[3].tag2) && (
                <div className="new-blog-technology-div">
                  <span>{blogData[3].tag2}</span>
                </div>
              )}
            </div>
          </div>
        </article>
      )
    );
  };

  const navigateHandler = (blogData) => {
    localStorage.setItem("selectedBlog", JSON.stringify(blogData));

    router.push("/blog-details");
  };

  /*============================================
             return
  =============================================*/
  return (
    <>
      <MobileNavbar />
      <div className="mobile-blog-main-content">
        {/* {isEmpty(blogs) && (
          <p className="blog-author-name w-100 text-center">No Blogs Found</p>
        )} */}
        {renderCardOne()}
        {renderFoldTwo()}
        {/* {renderLastFold()} */}
      </div>
    </>
  );
}
