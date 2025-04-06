"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const blocks = [
  {
    title: "You Arrived.",
    text: "This is the quiet heart of TribeLocus — a space for presence, not performance.",
  },
  {
    title: "You Speak.",
    text: "Your voice matters here. Nothing is stored unless you ask us to.",
  },
  {
    title: "We Listen.",
    text: "Tone, rhythm, silence — we reflect what is felt, not just said.",
  },
  {
    title: "You Choose.",
    text: "Save it. Let it go. Share it with someone you trust. You're in control.",
  },
  {
    title: "We Walk With You.",
    text: "This is not a product. It's a path. You are welcome here.",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"title" | "subtitle" | "transition">("title");

  useEffect(() => {
    let subtitleTimeout: NodeJS.Timeout;
    let transitionTimeout: NodeJS.Timeout;
    let nextBlockTimeout: NodeJS.Timeout;

    console.log("🪶 Showing title for block:", index);
    setPhase("title");

    subtitleTimeout = setTimeout(() => {
      console.log("💬 Subtitle appears for block:", index);
      setPhase("subtitle");
    }, 3000);

    transitionTimeout = setTimeout(() => {
      console.log("🌑 Fading to black...");
      setPhase("transition");
    }, 7000);

    nextBlockTimeout = setTimeout(() => {
      if (index < blocks.length - 1) {
        console.log("⏭ Moving to next block:", index + 1);
        setIndex(index + 1);
      }
    }, 8500); // 7s + 1.5s

    return () => {
      clearTimeout(subtitleTimeout);
      clearTimeout(transitionTimeout);
      clearTimeout(nextBlockTimeout);
    };
  }, [index]);

  const current = blocks[index];

  return (
    <div className="h-screen w-screen bg-black text-white flex items-center justify-center">
      <AnimatePresence mode="wait">
        {phase === "transition" ? (
          <motion.div
            key={`transition-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-black"
          />
        ) : (
          <motion.div
            key={`block-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center px-6 max-w-xl w-full"
          >
            <h1 className="text-4xl font-semibold mb-4 min-h-[3.5rem]">{current.title}</h1>

            <div className="min-h-[4.5rem]">
              {phase === "subtitle" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-xl text-white/80 max-w-2xl mx-auto"
                >
                  {current.text}
                </motion.p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
