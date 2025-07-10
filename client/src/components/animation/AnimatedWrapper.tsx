import { motion } from "framer-motion";
import React from "react";

interface AnimatedWrapperProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  children,
  duration = 0.5,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }} // start off to the left
      animate={{ opacity: 1, x: 0 }} // slide to position
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
