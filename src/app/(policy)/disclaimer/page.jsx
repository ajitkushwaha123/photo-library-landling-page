"use client";

import React from "react";
import { Headset, ShieldCheck, AlertTriangle } from "lucide-react";
import Template from "@/components/global/template";

const cardData = [
  {
    title: "Informational Purposes Only",
    description:
      "All content on Kabootar.ai is for informational and operational use.",
    icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
    content: (
      <>
        The information provided on Kabootar.ai, including CRM workflows,
        tutorials, and guides, is for general informational purposes only.
        <br />
        <br />
        While we strive to keep content up to date, we make no guarantees of
        accuracy, completeness, or reliability. You use the platform at your own
        discretion.
      </>
    ),
  },
  {
    title: "No Guarantee of Business Results",
    description:
      "Kabootar.ai is a lead management tool, not a guaranteed lead conversion engine.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Kabootar.ai offers tools to manage WhatsApp-based communication,
        automate lead handling, and streamline CRM workflows.
        <br />
        <br />
        We do not guarantee business outcomes, lead generation, message delivery
        rates, or approval of WhatsApp Business accounts.
      </>
    ),
  },
  {
    title: "Third-Party Integrations",
    description:
      "Kabootar.ai integrates with WhatsApp Cloud API but is not affiliated with Meta.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Our CRM system is built using the official WhatsApp Cloud API provided
        by Meta Platforms, Inc.
        <br />
        <br />
        However, Kabootar.ai is an independent platform and is not affiliated,
        endorsed, or certified by WhatsApp or Meta. All third-party trademarks
        belong to their respective owners.
      </>
    ),
  },
  {
    title: "User Responsibility",
    description:
      "Users are solely responsible for how they use Kabootar.ai’s CRM tools.",
    icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
    content: (
      <>
        It is the user’s responsibility to ensure lawful use of Kabootar.ai's
        CRM platform. Misuse, spam, or violation of Meta’s WhatsApp terms may
        result in penalties or API suspension.
        <br />
        <br />
        We do not accept liability for account blocks, banned phone numbers, or
        user-side violations.
      </>
    ),
  },
];

const contactData = {
  title: "Have Concerns About the Disclaimer?",
  description:
    "We welcome inquiries or clarifications regarding any disclaimers or policies.",
  content: (
    <div>
      <p className="mb-4">
        If you have any questions or concerns about this disclaimer or how it
        applies to your usage of Kabootar.ai, feel free to contact us at{" "}
        <a
          href="mailto:support@kabootar.live"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          support@kabootar.live
        </a>
        .
      </p>
      <p>
        You may also refer to our full documentation and FAQs at{" "}
        <a
          href="https://web.kabootar.live"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          web.kabootar.live
        </a>{" "}
        for further understanding of how Kabootar.ai operates.
      </p>
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Disclaimer"
      heading={
        <div>
          Disclaimer <br className="hidden sm:block" />
          and User Responsibility
        </div>
      }
      description="Understand your responsibilities and our limitations while using Kabootar.ai — a CRM platform powered by WhatsApp Cloud API."
      ctaDescription="Kabootar.ai is a software platform and does not guarantee results. Please read this disclaimer carefully before using our CRM features."
      ctaLink="/report-issue"
      ctaButton={
        <span className="flex items-center gap-2">
          <Headset className="w-4 h-4" />
          Contact Support
        </span>
      }
      infoData={cardData}
      contactData={contactData}
    />
  );
};

export default page;
