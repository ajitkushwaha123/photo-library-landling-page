"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const outletComparisons = [
  {
    id: 1,
    before: {
      image: "/assets/outlet_compare_7.png",
      desc: "Dull and flat images that reduce appeal and conversions.",
    },
    after: {
      image: "/assets/outlet_compare_6.png",
      desc: "Bright, appetizing shots that instantly catch attention.",
    },
  },
  {
    id: 2,
    before: {
      image: "/assets/outlet_compare_5.png",
      desc: "Low-quality visuals that fail to attract hungry customers.",
    },
    after: {
      image: "/assets/outlet_compare_2.png",
      desc: "Professional-grade photos that drive real results.",
    },
  },
];

export default function OutletCompare() {
  return (
    <section className="w-full px-4 py-16">
      <motion.div
        className="text-center max-w-4xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Zomato Outlet Visual Comparison
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg md:text-xl">
          Before vs After: See how our professionally curated images instantly
          upgrade your outlet’s appeal.
        </p>
      </motion.div>

      <div className="space-y-12 max-w-6xl mx-auto">
        {outletComparisons.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start"
          >
            {/* Before Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-xl overflow-hidden border shadow-md"
            >
              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-3 py-1 rounded-md z-10 font-semibold shadow-md">
                BEFORE
              </span>
              <Image
                src={item.before.image}
                alt="Before"
                width={500}
                height={600}
                className="w-full h-auto object-cover filter blur-[0.6px] grayscale brightness-75"
              />

              <div className="p-4 bg-white dark:bg-neutral-900">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.before.desc}
                </p>
              </div>
            </motion.div>

            {/* After Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-xl overflow-hidden border shadow-md"
            >
              <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-3 py-1 rounded-md z-10 font-semibold shadow-md">
                AFTER
              </span>
              <Image
                src={item.after.image}
                alt="After"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="p-4 bg-white dark:bg-neutral-900">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.after.desc}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
