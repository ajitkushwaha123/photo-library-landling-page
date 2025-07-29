"use client";

import React from "react";
import { Headset, ShieldCheck, Trash2 } from "lucide-react";
import Template from "@/components/global/template";

const cardData = [
  {
    title: "Digital Nature of Our CRM Services",
    description:
      "Our software platform is entirely digital and delivered via the cloud.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Our cloud-based CRM software is a digital service that operates on top
        of the official WhatsApp Cloud API. Once your account is provisioned,
        setup begins, and services are considered delivered.
        <br />
        <br />
        Kabootar.ai, our WhatsApp CRM automation tool, does not offer physical
        goods. All services are virtual, API-driven, and activated instantly.
      </>
    ),
  },
  {
    title: "No Return or Refund Policy for CRM Subscriptions",
    description:
      "SaaS subscriptions are final and non-refundable once activated.",
    icon: <Trash2 className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Kabootar.ai offers a business-focused CRM solution powered by WhatsApp
        Cloud API. Due to the nature of software services, we do not provide
        returns, refunds, or exchanges once a CRM subscription or WhatsApp API
        setup is activated.
        <br />
        <br />
        Users are encouraged to explore demo access or product overviews before
        purchasing CRM automation tools on Kabootar.ai.
      </>
    ),
  },
  {
    title: "Subscription Cancellation & Data Removal",
    description:
      "You may cancel your CRM plan at any time. No future charges apply.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Kabootar.ai allows users to cancel their CRM subscription at any time.
        You will not be billed for upcoming cycles after cancellation. Data
        related to CRM leads, API logs, and messaging insights may be deleted
        permanently.
        <br />
        <br />
        Our platform respects your decision to stop using our WhatsApp-based CRM
        software, and we ensure data privacy and compliance upon cancellation.
      </>
    ),
  },
];

const contactData = {
  title: "Still Have Questions About CRM Returns or Policies?",
  description:
    "Our CRM support team can help clarify refund, billing, or cancellation policies.",
  content: (
    <div>
      <p className="mb-4">
        If you need assistance regarding CRM return policies, WhatsApp API
        billing, or subscription terms, feel free to email us at{" "}
        <a
          href="mailto:support@kabootar.live"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          support@kabootar.live
        </a>
        . We’re here to support your CRM experience on{" "}
        <a
          href="https://web.kabootar.live"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          web.kabootar.live
        </a>
        .
      </p>
      <p>
        We understand choosing a WhatsApp-based CRM platform is important for
        business continuity. Let us assist you in understanding our no-return,
        no-refund policy for cloud CRM software subscriptions.
      </p>
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Return Policy"
      heading={
        <div>
          Return Policy <br className="hidden sm:block" />
          for WhatsApp Cloud CRM Subscriptions
        </div>
      }
      description="Understand our return and refund policy for CRM software subscriptions powered by WhatsApp Cloud API. Kabootar.ai is a digital service platform."
      ctaDescription="Our CRM platform is subscription-based and software-driven. Once activated, services are delivered digitally and are non-refundable. Please read our no-return policy before subscribing."
      ctaLink="/report-issue"
      ctaButton={
        <span className="flex items-center gap-2">
          <Headset className="w-4 h-4" />
          Report an Issue
        </span>
      }
      infoData={cardData}
      contactData={contactData}
    />
  );
};

export default page;
