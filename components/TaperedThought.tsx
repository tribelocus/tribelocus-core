"use client";

import React, { useEffect, useState } from "react";

interface TaperedThoughtProps {
  title: string;
  context: string;
}

export default function TaperedThought({ title, context }: TaperedThoughtProps) {
  const [showContext, setShowContext] = useState(false);

  useEffect(() => {
    const contextTimer = setTimeout(() => {
      setShowContext(true);
    }, 3000); // show context after 3s

    return () => clearTimeout(contextTimer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
      {showContext && (
        <p className="text-lg md:text-xl text-gray-400 transition-opacity duration-1000 ease-in">
          {context}
        </p>
      )}
    </div>
  );
}
