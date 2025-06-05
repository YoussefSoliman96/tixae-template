"use client";

import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Rocket } from "lucide-react";

interface EmptyStateProps {
  onGetStarted: () => void;
}

export function EmptyState({ onGetStarted }: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-b from-background to-background/80 p-6"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        className="relative w-full max-w-md rounded-xl border border-primary/10 bg-card p-8 shadow-lg"
      >
        <div className="absolute -top-16 left-1/2 -translate-x-1/2">
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            className="relative flex h-28 w-28 items-center justify-center rounded-full bg-primary/10 shadow-inner"
          >
            <Rocket className="h-12 w-12 text-primary" />
            <motion.div
              className="absolute -right-1 -top-1"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Sparkles className="h-8 w-8 text-primary" />
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Welcome to Tixae
          </motion.h2>

          <motion.p
            className="mt-3 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Get started by exploring the interface and discovering what you can
            build.
          </motion.p>

          <motion.div
            className="relative mt-8 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.div
              className="absolute -top-12 w-full flex justify-center"
              animate={{ y: [0, 6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <ArrowDown className="h-8 w-8 mt-2 text-primary" />
            </motion.div>

            <motion.div
              className="mt-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                variant="solid"
                className="w-full bg-primary text-primary-foreground py-6 text-lg font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                onPress={onGetStarted}
              >
                Get Started
              </Button>
            </motion.div>
          </motion.div>

          <motion.p
            className="mt-4 text-xs text-muted-foreground/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Start exploring the features and possibilities
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}
