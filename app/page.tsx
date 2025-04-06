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
    <div className="h-screen w-screen flex items-center justify-center bg-black text-white text-center px-4">
      <div>
        <h1 className="text-4xl font-bold mb-4">Test Block</h1>
        {visible && (
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            This paragraph appeared after 3 seconds.
          </p>
        )}
      </div>
    </div>
  );
}

