"use client";

import type { ComponentPropsWithoutRef } from "react";
import { motion } from "framer-motion";

type MotionFadeProps = ComponentPropsWithoutRef<typeof motion.div>;

export function MotionFade(props: MotionFadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      {...props}
    />
  );
}
