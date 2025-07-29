"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const outlets = [
  {
    id: 1,
    image: "/assets/compare1.png",
    label: "Before",
    desc: "Dull and flat images that reduce appeal and conversions.",
  },
  {
    id: 2,
    image: "/assets/compare2.png",
    label: "Before",
    desc: "Low-quality visuals that fail to attract hungry customers.",
  },
  {
    id: 3,
    image: "/assets/compare3.png",
    label: "Before",
    desc: "Unprofessional shots that hurt your brand’s first impression.",
  },
];

export default function OutletCompare() {
  return (
    <section className="w-full px-2 py-12">
      {/* Section Header */}
      <motion.div
        className="text-center max-w-4xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Zomato Outlet Visual Comparison
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg md:text-xl">
          See the stark difference between average and professionally curated
          images. Make your outlet truly stand out.
        </p>
      </motion.div>

      {/* Comparison Cards */}
      <motion.div
        className="grid grid-cols-1  gap-6 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {outlets.map((item, idx) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.02 }}
            className="relative group my-2 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-neutral-300 dark:border-neutral-800"
          >
            <Image
              src={item.image}
              alt="Before Using Our Photos"
              width={400}
              height={600}
              className="w-full h-auto object-cover"
            />
            <div className="p-4 bg-white dark:bg-neutral-900">
              <p className="text-sm text-start text-gray-600 dark:text-gray-400">
                {idx + 1}. {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
