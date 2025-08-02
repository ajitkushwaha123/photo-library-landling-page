"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  "Zomato & Swiggy pre-approved photos",
  "Consistently high-resolution (HD+) quality",
  "Meets restaurant listing standards instantly",
  "Saves hours of manual image curation",
  "Perfectly categorized by cuisine & dish type",
  "Unlimited downloads (Premium & Pro)",
];

const featureVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export default function WhyChooseUs() {
  return (
    <section className="mt-24 px-4 md:px-0 max-w-6xl mx-auto text-center relative z-10">
      {/* Section Background */}
      <div className="absolute inset-0 opacity-90 -z-10 rounded-3xl blur-sm" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight"
      >
        What Makes Our Photo Library Special?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-neutral-300 mb-10 max-w-2xl mx-auto text-base md:text-lg"
      >
        Designed exclusively for food businesses. Every photo is carefully
        curated, pre-approved by platforms like Zomato & Swiggy, and tailored to
        boost your listing visibility.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={featureVariants}
            className="flex items-center gap-4 rounded-2xl border border-white/10 p-5 md:p-6 backdrop-blur-xl shadow-xl bg-white/10 hover:bg-white/20 hover:scale-[1.02] transition-all duration-300"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="bg-green-600 p-1.5 rounded-full text-white"
            >
              <CheckCircle size={18} />
            </motion.div>
            <span className="text-left text-sm text-white leading-snug tracking-wide">
              {feature}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
