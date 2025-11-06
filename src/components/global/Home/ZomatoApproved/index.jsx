"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const zomatoImages = [
  "/assets/zomato-approved-1.png",
  "/assets/zomato-approved-2.png",
  "/assets/zomato-approved-3.png",
  "/assets/zomato-approved-4.png",
];

const ZomatoApproved = () => {
  return (
    <section className="relative py-10 px-3 md:py-14 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/3 w-[700px] h-[700px] bg-purple-300/30 dark:bg-purple-800/20 rounded-md blur-[160px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-300/20 dark:bg-indigo-700/10 rounded-md blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-5">
          Zomato & Swiggy Approved
        </h2>
        <p className="text-md text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Every Foodsnap image meets official Zomato & Swiggy photography
          standards — crafted to make your dishes shine and attract more
          customers.
        </p>
      </motion.div>

      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
        {zomatoImages.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="cursor-pointer py-0"
          >
            <Card className="max-w-6xl mx-auto rounded-2xl border border-neutral-200 dark:border-neutral-700 p-2 md:p-4 backdrop-blur-xl bg-white/60 dark:bg-[#10101a]/70 shadow-[0_10px_35px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_20px_45px_rgba(0,0,0,0.5)]">
              <div className="relative overflow-hidden p-4 rounded-md">
                <img
                  src={src}
                  alt={`Zomato approved ${i + 1}`}
                  className="w-full object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-10"
      >
        <div className="mx-auto rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6 md:p-10 backdrop-blur-lg shadow-lg dark:shadow-black/20 bg-white/60 dark:bg-[#10101a]/70">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="md:w-2/3 text-neutral-700 dark:text-neutral-300 text-md leading-relaxed">
              Boost your Zomato & Swiggy listings with high-conversion,
              pre-approved food photos — professionally curated to elevate your
              brand and drive more orders.
            </p>

            <motion.a
              href="https://app.foodsnap.in/sign-up?redirect=%2Fpricing"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex md:w-[150px]  justify-center
               w-full m:w- text-center items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              Get Images
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ZomatoApproved;
