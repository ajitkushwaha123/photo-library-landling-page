"use client";

import React from "react";
import { Mail, Phone, MapPin, Headset } from "lucide-react";
import Template from "@/components/global/template";

const cardData = [
  {
    title: "Customer Support",
    description: "Have an issue or need help with our CRM platform?",
    icon: <Headset className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Whether you're facing a technical challenge, have questions about your
        WhatsApp CRM integration, or need guidance, our team is here to help.
        <br />
        <br />
        Reach out via email at{" "}
        <a
          href="mailto:support@kabootar.live"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@kabootar.live
        </a>{" "}
        — we typically respond within 24 hours.
      </>
    ),
  },
  {
    title: "Phone Support",
    description: "Prefer speaking to a human? We're available by phone too.",
    icon: <Phone className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Call us at{" "}
        <a
          href="tel:+918178739633"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          +91 8178739633
        </a>{" "}
        during business hours (Mon–Sat, 10AM–6PM IST) for real-time assistance
        with onboarding, CRM usage, or API support.
      </>
    ),
  },
  {
    title: "Office Location",
    description: "Visit or mail us at our registered address.",
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
        Please schedule an appointment before visiting. We do not allow walk-ins
        for security and operational reasons.
      </>
    ),
  },
];

const contactData = {
  title: "We’re Here to Help",
  description:
    "Questions about Kabootar.ai, WhatsApp CRM, or integration support? Contact our team today.",
  content: (
    <div>
      <p className="mb-4">
        Whether you're a new user or an existing client, we value your
        questions, feedback, and business needs. Let us know how we can support
        your experience with Kabootar.ai.
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
      title="Contact Us"
      heading={
        <div>
          Get in Touch <br className="hidden sm:block" />
          with Kabootar.ai Support
        </div>
      }
      description="Need help with our WhatsApp-based CRM platform? Contact Kabootar.ai support for technical, billing, or onboarding assistance."
      ctaDescription="We’re just an email or call away. Reach out with your questions, and our CRM team will get back to you promptly."
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
