"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const plans = {
  monthly: [
    {
      name: "Basic",
      price: "Free",
      features: ["View sample food photos", "Limited access"],
      button: "Get Started",
    },
    {
      name: "Premium",
      price: "₹899/mo",
      features: [
        "Full photo library access",
        "Zomato-compliant photos",
        "Unlimited downloads",
        "Priority photo request handling",
        "Exclusive new photo collections every month",
        "Early access to new features",
        "Access to seasonal & trending food photo packs",
        "High-quality images",
      ],
      button: "Go Premium",
      highlight: true,
    },
    {
      name: "Pro",
      price: "₹1,898/mo",
      features: [
        "Everything in Premium",
        "Swiggy onboarding & menu setup",
        "Zomato to Swiggy menu transfer",
        "Zomato to Zomato menu copy (across outlets)",
        "Zomato account must be setup",
        "Bulk download support",
        "Live sync consultation (on request)",
        "Dedicated onboarding support",
        "Priority support",
        "+₹999 Per extra outlet setup",
      ],
      button: "Upgrade to Pro",
      highlight: true,
    },
  ],
  yearly: [
    {
      name: "Basic",
      price: "Free",
      features: ["View sample food photos", "Limited access"],
      button: "Get Started",
    },
    {
      name: "Premium",
      price: "₹4,999/yr",
      features: [
        "Full photo library access",
        "Zomato-compliant photos",
        "Unlimited downloads",
        "Priority photo request handling",
        "Exclusive new photo collections every month",
        "Commercial usage rights",
        "Early access to new features",
        "Fast-track support with a dedicated chat line",
        "Access to seasonal & trending food photo packs",
        "High-quality images",
      ],
      button: "Go Premium",
      highlight: true,
    },
    {
      name: "Pro",
      price: "₹5,999/yr",
      features: [
        "Everything in Premium",
        "Swiggy onboarding & menu setup",
        "Zomato to Swiggy menu transfer",
        "Zomato to Zomato menu copy (across outlets)",
        "Zomato account must be setup",
        "Bulk download support",
        "Live sync consultation (on request)",
        "Dedicated onboarding support",
        "Priority support",
        "+₹999 Per extra outlet setup",
      ],
      button: "Upgrade to Pro",
      highlight: true,
    },
  ],
};


export default function PricingSection() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section id="pricing" className="px-4 py-12 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
        Choose Your Perfect Plan
      </h2>
      <p className="text-lg text-gray-600 dark:text-neutral-400 max-w-xl mx-auto mb-10">
        Simple, scalable pricing designed for food businesses of every size —
        from cloud kitchens to fine dining.
      </p>

      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-gray-200 dark:bg-[#0a092d] rounded-full p-1">
          {["monthly", "yearly"].map((type) => (
            <motion.button
              key={type}
              onClick={() => setBilling(type)}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                billing === type
                  ? "bg-black text-white dark:bg-white dark:text-black shadow"
                  : "text-gray-700 hover:bg-gray-300 dark:text-white dark:hover:bg-[#1a1b38]"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {type === "monthly" ? "Monthly" : "Annual"}
            </motion.button>
          ))}
        </div>
      </div>

      <motion.div
        key={billing}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {plans[billing].map((plan, idx) => (
          <motion.div
            key={idx}
            whileHover={plan.highlight ? { scale: 1.03 } : { y: -4 }}
            className={`relative rounded-2xl border transition-all duration-300 p-8 text-left ${
              plan.highlight
                ? "bg-gradient-to-b from-purple-100 to-white dark:from-[#1d1b3d] dark:to-[#121026] border-purple-400 dark:border-[#7c68ff] shadow-xl"
                : "bg-white border-gray-200 dark:bg-[#0a092d] dark:border-neutral-700"
            } backdrop-blur-lg shadow-md dark:shadow-black/20 transition-colors`}
          >
            {plan.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10">
                Most Popular
              </span>
            )}

            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {plan.name}
            </h3>
            <p className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              {plan.price}
            </p>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-neutral-300 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 dark:text-green-400" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
                plan.highlight
                  ? "bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-[#ffffff10] dark:text-white dark:hover:bg-[#ffffff20]"
              }`}
            >
              {plan.button} <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}