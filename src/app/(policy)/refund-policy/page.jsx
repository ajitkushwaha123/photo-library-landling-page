"use client";

import React from "react";
import { Headset, ShieldCheck, Trash2 } from "lucide-react";
import Template from "@/components/global/template";

const cardData = [
  {
    title: "No Strict Refund Policy for CRM Software Services",
    description:
      "Due to the digital nature of our CRM platform, refunds are not guaranteed.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Kabootar.ai is a software-as-a-service (SaaS) platform built on the
        official WhatsApp Cloud API. Our CRM system is delivered instantly once
        an account is activated.
        <br />
        <br />
        Since our service is digital, subscription-based, and API-connected,
        Kabootar.ai maintains a strict **no-refund policy** unless required by
        applicable law or a verified billing error.
      </>
    ),
  },
  {
    title: "User Acknowledgement at Subscription",
    description:
      "All users accept the refund terms during checkout or onboarding.",
    icon: <Trash2 className="w-6 h-6 text-green-500" />,
    content: (
      <>
        By subscribing to Kabootar.ai’s CRM software, users acknowledge that the
        service becomes non-refundable once activated.
        <br />
        <br />
        We highly recommend exploring our available demo, documentation, or
        trial features (if applicable) before completing any payment.
      </>
    ),
  },
  {
    title: "Refunds for Billing Errors or Duplicate Payments",
    description:
      "We may review refund requests in specific billing-related cases.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Kabootar.ai may consider issuing a refund only in the case of:
        <ul className="list-disc ml-5 mt-2">
          <li>Duplicate payment made by the user</li>
          <li>Verified technical failure during transaction</li>
          <li>Accidental overcharge due to system error</li>
        </ul>
        <br />
        If you believe you are eligible for a billing-related refund, please
        contact our CRM support team with full details.
      </>
    ),
  },
];

const contactData = {
  title: "Need Help with a Billing or Refund Concern?",
  description:
    "Our CRM support team is available to review refund-related queries.",
  content: (
    <div>
      <p className="mb-4">
        While we operate on a no-refund basis, we understand rare situations
        related to billing may occur. If you believe you are eligible for a
        refund or experienced a payment issue, contact us at{" "}
        <a
          href="mailto:support@kabootar.live"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          support@kabootar.live
        </a>
        .
      </p>
      <p>
        All refund inquiries for our WhatsApp-based CRM software will be
        reviewed carefully. You can also visit{" "}
        <a
          href="https://web.kabootar.live"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          web.kabootar.live
        </a>{" "}
        for more information about our software platform.
      </p>
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Refund Policy"
      heading={
        <div>
          Refund Policy <br className="hidden sm:block" />
          for WhatsApp CRM Subscriptions
        </div>
      }
      description="Learn about the refund policy for CRM software subscriptions provided by Kabootar.ai. Our SaaS platform is powered by WhatsApp Cloud API and does not follow a strict refund model."
      ctaDescription="Kabootar.ai operates under a no-refund policy for digital CRM subscriptions. Exceptions may apply only for duplicate transactions or verified billing errors. Review our policy below."
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
