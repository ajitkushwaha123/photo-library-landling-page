"use client";

import React from "react";
import { Headset, Rows, Zap, ShieldCheck, Trash2 } from "lucide-react";
import Template from "@/components/global/template";

const cardData = [
  {
    title: "User Responsibilities",
    description:
      "Users must use Kabootar.ai services in compliance with all applicable laws.",
    icon: <Rows className="w-6 h-6 text-green-500" />,
    content: (
      <>
        As a Kabootar.ai user, you agree to provide accurate information and use
        our platform only for lawful business purposes. Misuse of the WhatsApp
        Cloud API for spam, harassment, or unlawful lead generation is strictly
        prohibited.
        <br />
        <br />
        You are responsible for safeguarding your account credentials and any
        activity under your account.
      </>
    ),
  },
  {
    title: "Platform Usage & Limitations",
    description:
      "Kabootar.ai offers tools to manage leads, not guarantee outcomes.",
    icon: <Zap className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Kabootar.ai provides tools to automate messaging, lead tracking, and CRM
        workflows via WhatsApp Cloud API. However, we do not guarantee lead
        conversion, API uptime, or WhatsApp approval.
        <br />
        <br />
        Misuse or abuse of platform features (e.g., mass unsolicited messages)
        may result in suspension or termination.
      </>
    ),
  },
  {
    title: "Security & Data Integrity",
    description:
      "We take steps to protect your account, but you also play a role.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        While we implement encryption, access control, and secure protocols to
        protect your data, you must also take precautions — such as avoiding
        weak passwords and not sharing access tokens.
        <br />
        <br />
        We cannot be held liable for third-party breaches or failures caused by
        user negligence.
      </>
    ),
  },
  {
    title: "Termination & Deletion",
    description:
      "You can stop using Kabootar.ai anytime, and we can enforce terms violations.",
    icon: <Trash2 className="w-6 h-6 text-green-500" />,
    content: (
      <>
        You may delete your account at any time by contacting support. Upon
        deletion, all associated data will be permanently erased.
        <br />
        <br />
        We reserve the right to suspend or terminate accounts that violate our
        Terms & Conditions or abuse the WhatsApp Cloud API.
      </>
    ),
  },
];

const contactData = {
  title: "Need Clarification or Have Questions?",
  description:
    "Our team is here to help you understand the terms and provide support.",
  content: (
    <div>
      <p className="mb-4">
        These Terms & Conditions govern your use of Kabootar.ai CRM. By using
        our platform (
        <a
          href="https://web.kabootar.live"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          web.kabootar.live
        </a>
        ), you agree to these terms.
      </p>
      <p>
        For further clarification, or if you believe any of these terms may not
        apply to your use case, feel free to reach out at{" "}
        <a
          href="mailto:support@kabootar.live"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          support@kabootar.live
        </a>
        . We're happy to help.
      </p>
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Terms & Conditions"
      heading={
        <div>
          Your Rights. <br className="hidden sm:block" />
          Our Terms. Clear & Fair.
        </div>
      }
      description="Understand the rules that govern your use of Kabootar.ai — our WhatsApp-based CRM platform for managing leads and conversations."
      ctaDescription="By using Kabootar.ai, you agree to these Terms & Conditions which are designed to ensure safe, fair, and lawful use of the platform."
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
