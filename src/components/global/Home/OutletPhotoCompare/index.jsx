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
    src: "/assets/compare1.png",
    alt: "Before Using Our Photos",
    caption: "Before: Unclear, dull images that fail to attract attention.",
  },
  {
    src: "/assets/compare2.png",
    alt: "After Using Our Photos",
    caption: "After: Bright, clear, Zomato-optimized images that convert.",
  },
  {
    src: "/assets/compare3.png",
    alt: "Boosted Visual Impact",
    caption: "Enhanced presentation that reflects your brand quality.",
  },
];

export default function OutletComparisonSection() {
  return (
    <div className="w-full mx-auto px-2 md:px-4 py-12 text-center">
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold tracking-tight">
          Transform Your Zomato Outlet Visuals
        </h2>
        <p className="mt-4 text-gray-500 text-sm md:text-lg max-w-2xl mx-auto">
          Real examples of how our high-quality food photos uplift your listing
          and boost customer confidence.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Carousel className="w-full">
          <CarouselContent>
            {imageSlides.map((slide, index) => (
              <CarouselItem key={index} className="flex flex-col items-center">
                <div className="relative w-full overflow-hidden rounded-sm border shadow-md">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full object-cover"
                  />
                </div>
                <p className="mt-4 text-sm text-gray-600 max-w-lg">
                  {slide.caption}
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>
    </div>
  );
}
