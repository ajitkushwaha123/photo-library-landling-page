"use client";
import Template from "@/components/global/template";
import { Headset } from "lucide-react";
import React from "react";
import { Rows, Zap, ShieldCheck, Trash2 } from "lucide-react";

const cardData = [
  {
    title: "Types of Information We Gather",
    description:
      "We track usage data that informs us about how you interact with our services.",
    icon: <Rows className="w-6 h-6 text-green-500" />,
    content: (
      <>
        We collect a variety of personal information from users, including your
        name, email address, phone number, and business identity. We also gather
        account-related info such as your username, password, and WhatsApp
        Business details.
        <br />
        <br />
        We track how you interact with Kabootar.ai — login times, API activity,
        message volume, and usage patterns.
      </>
    ),
  },
  {
    title: "Ways We Utilize Your Data",
    description:
      "We analyze usage trends to refine our offerings and better meet your needs.",
    icon: <Zap className="w-6 h-6 text-green-500" />,
    content: (
      <>
        We use collected data to personalize your experience, improve messaging
        flows, and optimize CRM features. It helps us offer technical support,
        identify abuse, and send product updates.
        <br />
        <br />
        Data may also be used to provide you with relevant insights, usage
        analytics, or new feature alerts.
      </>
    ),
  },
  {
    title: "How We Protect Your Data",
    description:
      "We implement strict security protocols to safeguard your information.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        We use encryption, secure APIs, and access control mechanisms to protect
        sensitive data. Our systems are regularly monitored to detect
        vulnerabilities and unauthorized access.
        <br />
        <br />
        All communications with WhatsApp APIs are authenticated and encrypted
        using secure protocols.
      </>
    ),
  },
  {
    title: "Data Retention & Deletion",
    description:
      "You control your data. We let you manage or delete your stored information.",
    icon: <Trash2 className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Your data is stored only as long as needed for service functionality or
        legal compliance. You can request account deletion, which erases all
        associated data permanently.
        <br />
        <br />
        We respect data minimization and retain only what is essential for
        business continuity and compliance.
      </>
    ),
  },
];

const contactData = {
  title: "Contact Us with Your Questions or Concerns",
  description:
    "We value your feedback and are here to assist you with any questions or concerns.",
  content: (
    <div>
      <p className="mb-4">
        At Kabootar.ai, your privacy and trust are our top priorities. If you
        have any questions, feedback, or concerns regarding our Privacy Policy
        or how we handle your data on{" "}
        <a
          href="https://web.kabootar.live"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          web.kabootar.live
        </a>
        , feel free to contact us. We're committed to being transparent and
        responsive to your needs.
      </p>
      <p>
        Whether you're looking for clarity on a specific section of our policy,
        want to better understand your data rights, or have ideas to improve
        your experience, we’re listening. Reach out to our support team anytime
        at{" "}
        <a
          href="mailto:support@kabootar.live"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          support@kabootar.live
        </a>
        .
      </p>
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Privacy Policy"
      heading={
        <div>
          Your Data. <br className="hidden sm:block" />
          Your Rights. Our Responsibility.
        </div>
      }
      description="Learn how we collect, use, and safeguard your personal information
          with full transparency and control."
      ctaDescription="We are committed to protecting your personal data. This policy
              explains what information we collect, how we use it. By using our
              services, you agree to this policy."
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
