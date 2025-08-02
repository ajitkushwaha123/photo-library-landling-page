"use client";

import React from "react";
import { Headset, ShieldCheck, Trash2 } from "lucide-react";
import Template from "@/components/global/template";

const cardData = [
  {
    title: "Digital Nature of Our Food Image Library",
    description:
      "Our platform offers a fully digital collection of food images delivered instantly online.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        FoodSnap.in provides a curated digital library of food photographs that
        are pre-approved for platforms like Swiggy and Zomato. Once you
        subscribe, access is granted immediately and your downloads can begin.
        <br />
        <br />
        As a digital platform, we do not deliver any physical products. All
        image content is accessible online, copyright-cleared for commercial
        use, and downloadable with unlimited access during your active
        subscription period.
      </>
    ),
  },
  {
    title: "Strict No Refund Policy on Subscriptions",
    description:
      "All purchases are final. We do not offer returns, refunds, or exchanges.",
    icon: <Trash2 className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Due to the digital nature of our service, FoodSnap.in strictly does not
        provide refunds once a subscription is activated. Subscribers gain
        instant access to our full image collection — making refunds impractical
        and inapplicable.
        <br />
        <br />
        We encourage users to review available sample images and service
        information before subscribing. All purchases are final and
        non-refundable.
      </>
    ),
  },
  {
    title: "Subscription Cancellation & Access Expiry",
    description:
      "Cancel anytime. Access ends automatically when your subscription ends.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        You can cancel your FoodSnap.in subscription at any time from your
        dashboard. Your access to the food image library will remain active
        until the end of your billing cycle.
        <br />
        <br />
        After cancellation or expiry, you will no longer have access to
        downloads, but you are free to use images already downloaded during your
        subscription period. You can re-subscribe at any time to regain access.
      </>
    ),
  },
];

const contactData = {
  title: "Need Help Understanding Our Policy?",
  description:
    "Have questions about refunds, subscriptions, or content access?",
  content: (
    <div>
      <p className="mb-4">
        For any questions or clarifications regarding our refund and
        cancellation policies, you can reach out to us at{" "}
        <a
          href="mailto:support@foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          support@foodsnap.in
        </a>{" "}
        or{" "}
        <a
          href="mailto:contact@foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          contact@foodsnap.in
        </a>
        .
      </p>
      <p>
        You can also report image-related issues or removal requests at{" "}
        <a
          href="mailto:report@foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          report@foodsnap.in
        </a>
        . We're based in New Delhi, India and ready to help!
      </p>
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Return & Refund Policy"
      heading={
        <div>
          Refund & Cancellation <br className="hidden sm:block" />
          Policy for FoodSnap Subscriptions
        </div>
      }
      description="Understand our refund and cancellation policy for FoodSnap — your digital food image library subscription."
      ctaDescription="FoodSnap is a digital-only platform. Once subscribed, you get full access to our pre-approved image collection. No refunds or returns are permitted after subscription."
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
