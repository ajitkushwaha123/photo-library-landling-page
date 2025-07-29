"use client";

import React from "react";
import { Rows, Zap, ShieldCheck, MessageCircle } from "lucide-react";
import Template from "@/components/global/template";

const updates = [
  {
    title: "June 30, 2025 – Lead Source Tagging Launched",
    description:
      "You can now tag and filter leads by custom sources like 'Website', 'Instagram', 'Referral', etc.",
    icon: <Zap className="w-6 h-6 text-green-500" />,
    content: (
      <>
        We’ve added a powerful lead-source tagging feature to help you track
        where your WhatsApp leads are coming from. This improves campaign
        attribution and helps you optimize marketing performance.
      </>
    ),
  },
  {
    title: "June 22, 2025 – CRM Mobile View Revamp",
    description: "A cleaner, faster experience for mobile users.",
    icon: <Rows className="w-6 h-6 text-green-500" />,
    content: (
      <>
        We’ve improved the mobile UI of Kabootar.ai to ensure smooth navigation,
        faster lead access, and simplified reply tools — making CRM management
        easier on the go.
      </>
    ),
  },
  {
    title: "June 10, 2025 – Broadcast Scheduling Introduced",
    description: "Plan WhatsApp messages in advance and send them later.",
    icon: <MessageCircle className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Our new Broadcast Scheduler lets you pre-schedule WhatsApp template
        messages to be sent at a future date and time. Great for promotions,
        events, or follow-ups.
      </>
    ),
  },
  {
    title: "May 28, 2025 – Integration with Google Sheets",
    description: "Sync your lead data automatically to Google Sheets.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Kabootar.ai now supports one-click sync with Google Sheets. You can
        export leads and messages to Sheets automatically for external
        processing or reporting.
      </>
    ),
  },
];

const contactData = {
  title: "Want To Request a Feature?",
  description:
    "Let us know what you’d like to see in the next Kabootar.ai release.",
  content: (
    <div>
      <p className="mb-4">
        These updates reflect our ongoing effort to simplify lead and customer
        management on WhatsApp. We love building based on your feedback — feel
        free to reach out.
      </p>
      <p>
        Email:{" "}
        <a
          href="mailto:support@kabootar.live"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@kabootar.live
        </a>
      </p>
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Product Updates"
      heading={
        <div>
          Kabootar.ai – <br className="hidden sm:block" /> Product Changelog
        </div>
      }
      description="Stay updated with the latest improvements to our WhatsApp CRM platform. All updates listed by most recent first."
      ctaDescription="Check back often to discover new features and improvements we’re rolling out to help your business grow."
      ctaLink="/report-issue"
      ctaButton={
        <span className="flex items-center gap-2">
          <Zap className="w-4 h-4" />
          Request a Feature
        </span>
      }
      infoData={updates}
      contactData={contactData}
    />
  );
};

export default page;
