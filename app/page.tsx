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
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    console.log("Rendered block index:", index);
    setShowSubtitle(false);

    const subtitleDelay = setTimeout(() => {
      setShowSubtitle(true);
      console.log("Subtitle revealed for block:", index);
    }, 3000);

    const nextBlockDelay = setTimeout(() => {
      if (index < blocks.length - 1) {
        console.log("Advancing to block:", index + 1);
        setIndex(index + 1);
      }
    }, 7000);

    return () => {
      clearTimeout(subtitleDelay);
      clearTimeout(nextBlockDelay);
    };
  }, [index]);

  return (
    <div className="h-screen w-screen bg-black text-white flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          onAnimationStart={() => console.log("Animation started for:", index)}
          onAnimationComplete={() => console.log("Animation complete for:", index)}
          className="flex flex-col items-center text-center max-w-xl px-6 w-full"
        >
          <motion.h1
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-semibold mb-4 min-h-[3.5rem]"
          >
            {blocks[index].title}
          </motion.h1>

          <div className="min-h-[4.5rem]">
            {showSubtitle && (
              <motion.p
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-xl text-white/80 max-w-2xl mx-auto"
              >
                {blocks[index].text}
              </motion.p>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
