"use client";
import React from "react";
import RecentActivityCard from "@/components/RecentActivityCard";
import { motion } from "framer-motion";

function FeaturedSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-24 px-6 sm:px-8 lg:px-12 xl:px-16 bg-white"
      >
        <div className="max-w-4xl xl:max-w-6xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12 w-full sm:w-2/3 mx-auto"
          >
            Recent Activity
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
            {[0, 1, 2].map((index) => (
              <motion.div key={index} variants={itemVariants}>
                <RecentActivityCard
                  userName="Debby N."
                  userImage="/landing-i1.png"
                  photos={[
                    "/landing-i1.png",
                    "/landing-i2.png",
                    "/landing-i3.png",
                  ]}
                  place={{
                    name: "Mom’s Tofu",
                    rating: 4,
                    reviewCount: 296,
                    tags: ["Korean", "Barbeque", "Soup"],
                    priceLevel: "$$",
                  }}
                  time="4 minutes ago"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default FeaturedSection;
