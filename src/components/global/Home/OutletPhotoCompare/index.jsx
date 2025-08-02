"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const imageSlides = [
  {
    src: "/assets/BEFORE1.png",
    alt: "Before and After Comparison 1",
    caption: "❌ Before → ✅ After: See the clarity difference side by side.",
  },
  {
    src: "/assets/BEFORE2.png",
    alt: "Before and After Comparison 2",
    caption: "Better lighting, better colors — instant visual upgrade.",
  },
  {
    src: "/assets/BEFORE3.png",
    alt: "Before and After Comparison 3",
    caption: "📈 More trust. More orders. Just better photos.",
  },
];

export default function OutletComparisonSection() {
  return (
    <section className="w-full px-4 md:px-6 py-16 text-center">
      {/* Title and Description */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
          See the Impact of Stunning Food Photos
        </h2>
        <p className="mt-4 text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Real Zomato-ready listings transformed with professional imagery —
          proven to boost trust and conversions.
        </p>
      </motion.div>

      {/* Mobile Carousel */}
      <motion.div
        className="block md:hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Carousel className="w-full">
          <CarouselContent>
            {imageSlides.map((slide, index) => (
              <CarouselItem key={index} className="min-w-full px-2">
                <div className="w-full overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md dark:shadow-lg transition-all duration-300">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 font-medium max-w-xl mx-auto">
                  {slide.caption}
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>

      {/* Desktop Grid */}
      <motion.div
        className="hidden md:flex flex-wrap justify-center gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {imageSlides.map((slide, index) => (
          <div
            key={index}
            className="w-full md:w-[30%] flex flex-col items-center px-2"
          >
            <div className="w-full overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md dark:shadow-lg transition-all duration-300">
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="mt-4 text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium max-w-xl mx-auto">
              {slide.caption}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
