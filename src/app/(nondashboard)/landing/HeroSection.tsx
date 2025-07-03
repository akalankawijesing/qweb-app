"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MainSearch from "@/components/MainSearch";

function HeroSection() {
  return (
    <div className="relative h-screen">
      <Image
        src="/hero-bg.png"
        alt="Hero Background"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/25"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full"
      >
        <div className="max-w-4xl mx-auto px-16 sm:px-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Explore Your City
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Let's uncover the best places to eat, drink, and shop nearest to
            you.
          </p>
         <MainSearch />
        </div>
      </motion.div>
    </div>
  );
}

export default HeroSection;
