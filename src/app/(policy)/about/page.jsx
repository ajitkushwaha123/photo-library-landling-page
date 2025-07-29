"use client";

import React from "react";
import { Users, Rocket, Target, HeartHandshake } from "lucide-react";
import Template from "@/components/global/template";

const cardData = [
  {
    title: "Who We Are",
    description:
      "Kabootar.ai is a forward-thinking CRM startup focused on WhatsApp-led communication.",
    icon: <Users className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Kabootar.ai was founded with a simple vision — to enable businesses to
        manage their customer conversations, leads, and CRM workflows **entirely
        via WhatsApp**. Our platform is built on top of the official WhatsApp
        Cloud API and designed to provide a seamless, fast, and collaborative
        experience.
        <br />
        <br />
        We believe that conversations drive conversions — and Kabootar.ai is
        here to streamline every step of that journey.
      </>
    ),
  },
  {
    title: "Our Mission",
    description:
      "Empowering businesses to grow through fast, direct, and human WhatsApp engagement.",
    icon: <Target className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Our mission is to create the simplest, fastest, and most reliable CRM
        experience for teams who live and breathe on WhatsApp. Whether you're
        closing sales, handling support, or nurturing relationships, Kabootar.ai
        is designed to meet you where your customers already are.
      </>
    ),
  },
  {
    title: "Meet Our Founder",
    description:
      "Led by a passionate builder solving for scale, speed, and simplicity.",
    icon: <Rocket className="w-6 h-6 text-green-500" />,
    content: (
      <>
        <strong>Ajit Kushwaha</strong>, the founder of Kabootar.ai, is a final
        year ECE student at NSUT (Netaji Subhas University of Technology),
        Delhi. With a strong background in product building, software
        development, and system design, Ajit created Kabootar.ai to solve the
        messy, multi-tabbed chaos of lead management.
        <br />
        <br />
        His vision is to make CRM so fast and intuitive that even non-tech teams
        can run it without training.
      </>
    ),
  },
  {
    title: "Our Values",
    description: "Customer-first. Privacy-focused. Builder-driven.",
    icon: <HeartHandshake className="w-6 h-6 text-green-500" />,
    content: (
      <>
        At Kabootar.ai, we value simplicity, trust, and transparency. We strive
        to:
        <ul className="list-disc ml-5 mt-2">
          <li>Build what customers love, not just what looks good on slides</li>
          <li>Protect user data with the highest security standards</li>
          <li>
            Move fast and fix things — because speed is the ultimate weapon
          </li>
        </ul>
      </>
    ),
  },
];

const contactData = {
  title: "How to Reach Us",
  description:
    "We're always happy to talk — whether you're curious, confused, or excited to try.",
  content: (
    <div>
      <p className="mb-4">
        If you'd like to get in touch with the Kabootar.ai team — whether for
        partnerships, support, or feedback — feel free to drop us a line.
      </p>
      <p>
        Email:{" "}
        <a
          href="mailto:support@kabootar.live"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@kabootar.live
        </a>
        <br />
        Phone:{" "}
        <a
          href="tel:+918178739633"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          +91 8178739633
        </a>
        <br />
        Address: FIRST FLOOR, NEAR AIR FORCE CAMP, RAJOKARI, NEW DELHI – 110038
      </p>
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="About Kabootar.ai"
      heading={
        <div>
          About Us <br className="hidden sm:block" />
          Who We Are, What We Build
        </div>
      }
      description="Learn more about Kabootar.ai — our mission, our people, and the purpose behind building a CRM designed for WhatsApp."
      ctaDescription="We're building in public. Stay connected as we shape the future of WhatsApp CRM."
      ctaLink="/updates"
      ctaButton={
        <span className="flex items-center gap-2">
          <Rocket className="w-4 h-4" />
          View Updates
        </span>
      }
      infoData={cardData}
      contactData={contactData}
    />
  );
};

export default page;
