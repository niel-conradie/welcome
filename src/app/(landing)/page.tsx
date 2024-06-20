"use client";

import { motion } from "framer-motion";

import { Clock } from "@/components/landing";
import { ImagesSlider } from "@/components/ui/images-slider";

export default function LandingPage() {
  const images = ["./images/1.jpg", "./images/1.jpg"];

  return (
    <ImagesSlider className="min-h-screen" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col items-center justify-center"
      >
        <motion.div>
          <Clock />
        </motion.div>
      </motion.div>
    </ImagesSlider>
  );
}
