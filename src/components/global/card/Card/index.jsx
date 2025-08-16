"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import toast from "react-hot-toast";

const Card = ({ image, index }) => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setDownloading(true);

      const response = await fetch(image.image_url);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `${image.title || "foodsnap-food-image"}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);

      toast.success("Image downloaded!");
    } catch (error) {
      console.error("Download failed:", error);
      toast.error("Image download failed.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <motion.figure
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-md bg-white dark:bg-zinc-900 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 group"
    >
      <div className="relative">
        <motion.img
          loading="lazy"
          width="400"
          height="300"
          src={image.image_url}
          alt={
            image.title
              ? `${image.title} - High Quality Zomato & Swiggy Approved Food Image by Foodsnap`
              : "Premium food image for restaurant menus - Zomato & Swiggy approved"
          }
          className="w-full h-56 sm:h-64 object-cover rounded-md group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md" />

        <button
          onClick={handleDownload}
          aria-label={`Download ${image.title || "food"} image`}
          className="absolute top-3 right-3 bg-white/90 dark:bg-black/60 backdrop-blur-md p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 flex items-center justify-center"
        >
          {downloading ? (
            <span className="w-6 h-6 border-4 border-t-transparent border-blue-500 dark:border-white rounded-full animate-spin" />
          ) : (
            <Download className="w-5 h-5 text-black dark:text-white" />
          )}
        </button>
      </div>

      {image.title && (
        <figcaption className="absolute bottom-3 left-3 right-3 text-sm font-semibold text-white drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {image.title}
        </figcaption>
      )}

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageObject",
          contentUrl: image.image_url,
          name: image.title || "Foodsnap Food Image",
          description:
            image.title ||
            "High quality food image for restaurant menus - Zomato & Swiggy approved",
          creator: {
            "@type": "Organization",
            name: "Foodsnap",
            url: "https://foodsnap.in",
          },
        })}
      </script>
    </motion.figure>
  );
};

export default Card;
