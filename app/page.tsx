"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log("useEffect ran.");
    setTimeout(() => {
      setVisible(true);
    }, 3000);
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center text-center px-4">
        <h1 className="text-4xl font-semibold mb-4 min-h-[3.5rem]">
          Test Block
        </h1>
  
        <div className="min-h-[4.5rem]">
          {visible && (
            <p className="text-lg text-gray-400 max-w-xl mx-auto">
              This paragraph appeared after 3 seconds.
            </p>
          )}
        </div>
      </div>
    </div>
  );  
}

