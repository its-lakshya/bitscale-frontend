"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type DropdownItem = {
  label: string;
  icon?: React.ReactNode;
};

export const ToolbarButton = ({
  label,
  badge,
  icon,
  dropdownItems,
}: {
  label: string;
  badge?: string;
  icon: string;
  dropdownItems?: DropdownItem[];
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div
      ref={ref}
      className="relative group"
      onClick={() => setOpen(!open)}
    >
      <button className="relative p-2 h-7 flex items-center gap-1.5 text-[#374151] text-xs border border-[#E5E7EB] rounded-lg cursor-pointer">
        <Image src={icon} alt="icon" />
        <span className="max-md:hidden">{label}</span>
        <span
          className={`absolute ${
            badge ? "size-4 -top-1.5 -right-2" : "size-1.5 -top-0.5 -right-0.5"
          } bg-[#1A56DB] flex items-center justify-center text-white text-[10px] rounded-full`}
        >
          {badge}
        </span>
      </button>

      {dropdownItems && open && (
        <div className="absolute top-9 left-0 bg-white border border-[#E5E7EB] rounded-xl shadow-lg z-50 min-w-47 overflow-hidden">
          {dropdownItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 px-3 py-2 text-xs text-[#374151] hover:bg-gray-100 cursor-pointer transition"
            >
              <span className="text-[#374151]">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
