"use client";

import closeIcon from "@/assets/icons/close.svg";
import expandIcon from "@/assets/icons/expand.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

const GridRunningNotification: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [progress, setProgress] = useState(10);

  // Simulate progress
  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 5));
    }, 5000);

    return () => clearInterval(interval);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <div
        className={`relative bg-white border border-[#E5E7EB] rounded-xl shadow-lg transition-all
          ${expanded ? "w-105 p-4 flex flex-col" : "w-80 px-3.5 py-2 flex items-center gap-2.5"}
        `}
      >
        <div className={`flex items-center gap-2.5 w-full ${expanded ? "" : ""}`}>
          <span className="text-sm font-semibold text-[#374151] whitespace-nowrap">
            Grid running
          </span>

          <div className="flex-1 flex items-center">
            <div className="w-full h-2 rounded-full bg-[#E0E3E7] overflow-hidden">
              <div
                className="h-full bg-[#1A56DB] transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="text-xs font-medium text-[#1A56DB] whitespace-nowrap">
            {progress}%
          </div>
        </div>

        {expanded && (
          <div className="mt-3 text-xs text-[#6B7280] space-y-1">
            <p className='animate-pulse'>• Processing imported rows</p>
            <p className='animate-pulse'>• Running enrichments</p>
            <p className='animate-pulse'>• Evaluating conditions</p>
          </div>
        )}

        <div className="absolute -top-5.5 -right-6 flex items-center gap-2 px-2 py-1 bg-white rounded-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <button
            className="cursor-pointer p-1 rounded hover:bg-gray-100"
            onClick={() => setExpanded((p) => !p)}
          >
            <Image src={expandIcon} alt="expand" />
          </button>

          <button
            className="cursor-pointer p-1 rounded hover:bg-gray-100"
            onClick={() => setVisible(false)}
          >
            <Image src={closeIcon} alt="close" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GridRunningNotification;