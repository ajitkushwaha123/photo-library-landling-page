"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
  Sparkles,
  ShieldCheck,
  Globe,
  ImagePlus,
  CalendarClock,
  XCircle,
  Plus,
} from "lucide-react";

const faqs = [
  {
    icon: HelpCircle,
    question: "What is this photo library about?",
    answer:
      "Our photo library offers high-resolution, Zomato-approved food images crafted to meet restaurant listing standards.",
  },
  {
    icon: Sparkles,
    question: "What do I get with the ₹999/month subscription?",
    answer:
      "You get full access to Zomato-ready images, new weekly uploads, commercial rights, and one-click downloads.",
  },
  {
    icon: ShieldCheck,
    question: "Are the images Zomato-approved?",
    answer:
      "Yes. Every photo is optimized for Zomato’s strict content guidelines to ensure fast approval.",
  },
  {
    icon: Globe,
    question: "Can I use these images on Swiggy, Instagram, or my website?",
    answer:
      "Absolutely. All images are licensed for commercial use on any platform: Zomato, Swiggy, websites, or social media.",
  },
  {
    icon: ImagePlus,
    question: "Will new photos be added regularly?",
    answer: "Yes! We add fresh food visuals every week.",
  },
  {
    icon: XCircle,
    question: "Can I cancel anytime?",
    answer:
      "Yes. It's a simple monthly plan — no lock-ins, cancel anytime before renewal.",
  },
  {
    icon: CalendarClock,
    question: "What if I need a specific dish that's not in the library?",
    answer:
      "You can request specific dishes and we’ll prioritize them in future uploads.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="text-white py-4 px-4 sm:px-8 w-full mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">
        📸 Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, i) => {
          const Icon = faq.icon;
          const isOpen = openIndex === i;

          return (
            <motion.div
              key={i}
              className={`rounded-md border border-neutral-200 dark:border-neutral-700 shadow-lg dark:shadow-black/20 bg-white/60 dark:bg-[#10101a]/70 transition-colors overflow-hidden`}
              whileHover={{ scale: 1.01 }}
            >
              <button
                onClick={() => toggle(i)}
                className={`w-full flex items-center justify-between px-5 py-4 text-left font-medium text-md md:text-lg transition-all duration-300 ${
                  isOpen ? "bg-[#1a183b]/60" : "hover:bg-[#16142f]/40"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-indigo-400 shrink-0" />
                  <span className="text-white">{faq.question}</span>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 text-start py-5 text-sm sm:text-base text-gray-300">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
