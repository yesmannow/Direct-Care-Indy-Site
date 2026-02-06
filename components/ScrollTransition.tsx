"use client";

import { Suspense, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollTransitionProps {
  children: React.ReactNode;
  id: string;
}

export function ScrollTransition({ children, id }: ScrollTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.7, 1], [1, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.15, 0.7, 1], [30, 0, 0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.7, 1], [0.98, 1, 1, 0.95]);

  return (
    <Suspense fallback={<div id={id}>{children}</div>}>
      <motion.div
        ref={ref}
        id={id}
        style={{ opacity, y, scale }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        {children}
      </motion.div>
    </Suspense>
  );
}

