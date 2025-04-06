"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [showContext, setShowContext] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowContext(true), 3000);
    const t2 = setTimeout(() => setShowButton(true), 6000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-gray-900 px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">You’ve arrived.</h1>

      {showContext && (
        <p className="text-base md:text-lg text-gray-600 mt-4 transition-opacity duration-1000 opacity-100">
          This space honors your rhythm. There is no pressure. Only presence.
        </p>
      )}

      {showButton && (
        <a
          href="/start"
          className="mt-10 px-6 py-2 border border-gray-300 rounded-2xl text-sm text-gray-700 hover:bg-gray-100 transition-all"
        >
          Begin
        </a>
      )}
    </div>
  );
}

