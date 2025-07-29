"use client";

import React from "react";
import { Bug, Mail, Phone, MapPin, Headset } from "lucide-react";
import Template from "@/components/global/template";

const cardData = [
  {
    title: "Report a Technical Issue",
    description: "Facing a bug or error on our CRM dashboard?",
    icon: <Bug className="w-6 h-6 text-red-500" />,
    content: (
      <>
        If you've encountered a glitch, integration error, or API failure on the
        Kabootar.ai CRM platform, please reach out immediately.
        <br />
        <br />
        Include as much detail as possible — your browser, screenshot (if any),
        what action caused the issue, and time of occurrence.
        <br />
        <br />
        Send it to{" "}
        <a
          href="mailto:support@kabootar.live"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@kabootar.live
        </a>{" "}
        for fastest resolution.
      </>
    ),
  },
  {
    title: "Call Our CRM Support Team",
    description:
      "For urgent issues or onboarding help, speak directly with us.",
    icon: <Phone className="w-6 h-6 text-green-500" />,
    content: (
      <>
        For instant help with CRM onboarding, lead sync failures, or WhatsApp
        number linking, contact us by phone at{" "}
        <a
          href="tel:+918178739633"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          +91 8178739633
        </a>
        .
        <br />
        <br />
        Available Mon–Sat, 10AM–6PM IST.
      </>
    ),
  },
  {
    title: "Visit or Mail Our Office",
    description:
      "For compliance, billing, or legal issues, contact us offline.",
    icon: <MapPin className="w-6 h-6 text-green-500" />,
    content: (
      <>
        <strong>Kabootar.ai – Office Address</strong>
        <br />
        FIRST FLOOR, NEAR AIR FORCE CAMP
        <br />
        RAJOKARI, NEW DELHI – 110038
        <br />
        <br />
        Please schedule a visit in advance. Walk-ins are not allowed without
        prior approval.
      </>
    ),
  },
];

const contactData = {
  title: "Need Urgent Help or Want to Report Something?",
  description:
    "We're here to assist with platform issues, billing confusion, API errors, or CRM functionality bugs.",
  content: (
    <div>
      <p className="mb-4">
        If you’re experiencing issues with Kabootar.ai — such as message
        delivery failure, CRM data errors, or integration malfunctions — don’t
        hesitate to contact us.
      </p>
      <p>
        📧 Email:{" "}
        <a
          href="mailto:support@kabootar.live"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@kabootar.live
        </a>
        <br />
        📞 Phone:{" "}
        <a
          href="tel:+918178739633"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          +91 8178739633
        </a>
        <br />
        📍 Address: FIRST FLOOR, NEAR AIR FORCE CAMP, RAJOKARI, NEW DELHI –
        110038
      </p>
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Report an Issue"
      heading={
        <div>
          Report a Bug <br className="hidden sm:block" />
          or Contact CRM Support
        </div>
      }
      description="Found an issue on the Kabootar.ai platform? Whether it's a WhatsApp API bug, dashboard error, or setup failure — let us know."
      ctaDescription="We aim to fix bugs quickly and improve your CRM experience. Use the contact methods below to report any issue."
      ctaLink="/contact"
      ctaButton={
        <span className="flex items-center gap-2">
          <Headset className="w-4 h-4" />
          Talk to Support
        </span>
      }
      infoData={cardData}
      contactData={contactData}
    />
  );
};

export default page;
