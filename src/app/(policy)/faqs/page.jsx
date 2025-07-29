"use client";

import React from "react";
import { Headset, Rows, Zap, ShieldCheck, MessageCircle } from "lucide-react";
import Template from "@/components/global/template";

const cardData = [
  {
    title: "What is Kabootar.ai?",
    description:
      "Kabootar.ai is a WhatsApp-first CRM software for managing customer conversations and leads.",
    icon: <Rows className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Kabootar.ai is a cloud-based CRM platform that integrates directly with
        the official WhatsApp Cloud API. It allows you to automate sales
        communication, track leads, and manage customer engagement all in one
        place — without switching tabs.
      </>
    ),
  },
  {
    title: "How do I get started with the CRM?",
    description:
      "You need a WhatsApp Business Account and approval to use the WhatsApp Cloud API.",
    icon: <Zap className="w-6 h-6 text-green-500" />,
    content: (
      <>
        To start using Kabootar.ai CRM, you’ll need a verified WhatsApp Business
        Account, a Meta Developer App, and Cloud API access. Once these are
        active, you can link your number to Kabootar.ai and begin using the
        platform for lead automation.
      </>
    ),
  },
  {
    title: "Is Kabootar.ai approved by WhatsApp?",
    description:
      "Kabootar.ai uses the official WhatsApp Cloud API provided by Meta.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Yes. Kabootar.ai operates on top of Meta’s official WhatsApp Cloud API.
        However, we do not control WhatsApp's approval or policy enforcement.
        Users must adhere to WhatsApp's Business Policy and Messaging Rules.
      </>
    ),
  },
  {
    title: "Can I try the platform before purchasing?",
    description: "We offer demo access or guided onboarding on request.",
    icon: <MessageCircle className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Yes. If you're unsure about committing, reach out to us at{" "}
        <a
          href="mailto:support@kabootar.live"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@kabootar.live
        </a>{" "}
        to request demo access or schedule a walkthrough with our onboarding
        team.
      </>
    ),
  },
  {
    title: "What pricing plans does Kabootar.ai offer?",
    description:
      "Flexible pricing based on usage, business size, and WhatsApp message volume.",
    icon: <Rows className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Kabootar.ai offers monthly subscription plans based on the number of
        users, automation features, and API volume (such as message templates or
        conversations). For detailed pricing, please contact{" "}
        <a
          href="mailto:support@kabootar.live"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@kabootar.live
        </a>
        .
      </>
    ),
  },
  {
    title: "Is my data secure on Kabootar.ai?",
    description:
      "Yes, we use secure hosting and encrypted communication to protect your data.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        We use industry-standard encryption, HTTPS protocols, and cloud-based
        secure storage to keep your CRM and messaging data safe. Your WhatsApp
        API tokens and customer data are never shared or sold.
      </>
    ),
  },
  {
    title: "Does Kabootar.ai support team collaboration?",
    description:
      "Yes, your team can manage leads and messages collaboratively.",
    icon: <MessageCircle className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Kabootar.ai allows you to invite team members to your workspace so
        multiple agents can manage leads, handle replies, and track sales
        pipelines — all in one shared dashboard.
      </>
    ),
  },
  {
    title: "Can I integrate Kabootar.ai with my website or CRM?",
    description: "Custom integrations are available through APIs and webhooks.",
    icon: <Zap className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Yes! Kabootar.ai supports third-party integrations via REST APIs,
        Zapier, and Webhooks. You can connect it with your existing website
        forms, CRMs, or marketing tools for seamless lead syncing.
      </>
    ),
  },
  {
    title: "What happens if I exceed my messaging limits?",
    description:
      "You’ll be notified before reaching your WhatsApp Cloud API quota.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Kabootar.ai monitors your WhatsApp messaging volume. If you’re nearing
        your daily conversation limit or template quota, we’ll alert you and
        suggest an upgrade plan or cooldown measures.
      </>
    ),
  },
  {
    title: "Is there a refund or cancellation option?",
    description: "We follow a strict no-refund policy after CRM activation.",
    icon: <Rows className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Kabootar.ai offers digital services, and once your CRM account is
        activated via WhatsApp Cloud API, refunds are not provided. You may
        cancel your subscription anytime to avoid future charges.{" "}
        <a
          href="/refund-policy"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          View refund policy
        </a>
        .
      </>
    ),
  },
];

const contactData = {
  title: "Still Have Questions About WhatsApp CRM?",
  description:
    "Our team is ready to guide you through every step — from API setup to CRM onboarding.",
  content: (
    <div>
      <p className="mb-4">
        Kabootar.ai is designed to simplify CRM workflows for growing teams and
        businesses using WhatsApp Cloud API. If you couldn’t find your question
        here, feel free to reach us anytime.
      </p>
      <p>
        Email:{" "}
        <a
          href="mailto:support@kabootar.live"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@kabootar.live
        </a>{" "}
        <br />
        Phone:{" "}
        <a
          href="tel:+918178739633"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          +91 8178739633
        </a>{" "}
        <br />
        Address: FIRST FLOOR, NEAR AIR FORCE CAMP, RAJOKARI, NEW DELHI – 110038
      </p>
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Frequently Asked Questions"
      heading={
        <div>
          FAQs About <br className="hidden sm:block" />
          Kabootar.ai CRM
        </div>
      }
      description="Find answers to common questions about using our WhatsApp CRM platform — from onboarding and billing to technical support."
      ctaDescription="If your question isn’t listed, feel free to reach out. We’re here to help you succeed with WhatsApp-powered CRM automation."
      ctaLink="/report-issue"
      ctaButton={
        <span className="flex items-center gap-2">
          <Headset className="w-4 h-4" />
          Ask a Question
        </span>
      }
      infoData={cardData}
      contactData={contactData}
    />
  );
};

export default page;
