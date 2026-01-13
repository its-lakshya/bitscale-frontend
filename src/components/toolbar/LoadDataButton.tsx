"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiLink, FiRefreshCcw, FiUpload, FiUsers } from "react-icons/fi";

import buildingsIcon from "../../assets/icons/buildings.svg";
import cheveroneDownIcon from "../../assets/icons/chevron-down.svg";
import peopleIcon from "../../assets/icons/people.svg";

export default function LoadDataButton() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const items = [
    { label: "Upload CSV", icon: <FiUpload /> },
    { label: "Import from CRM", icon: <FiUsers /> },
    { label: "Connect Google Sheets", icon: <FiLink /> },
    { label: "Re-import Dataset", icon: <FiRefreshCcw /> },
  ];

  return (
    <div
      className="relative hover:scale-105 transition-all duration-300"
      ref={ref}
    >
      <div
        onClick={() => setOpen(!open)}
        className="relative px-3 h-7 flex items-center gap-2 bg-[#F3F4F6] text-[#1F2A37] rounded-lg cursor-pointer"
      >
        <span className="flex items-center">
          <Image src={peopleIcon} alt="people icon" />
          <Image src={buildingsIcon} alt="building icon" className="-ml-2.5" />
        </span>
        Load <span className="max-lg:hidden">Data</span>
        <Image
          src={cheveroneDownIcon}
          alt="down arrow icon"
          className="max-md:hidden"
        />
        <span className="absolute size-4 -top-1.5 -right-1 bg-[#1A56DB] flex items-center justify-center text-white text-[10px] rounded-full">
          1
        </span>
      </div>

      {open && (
        <div className="absolute left-0 top-9 bg-white border border-[#E5E7EB] rounded-xl shadow-lg z-50 min-w-52.5 overflow-hidden">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 px-3 py-2 text-xs text-[#374151] hover:bg-gray-100 cursor-pointer transition-all"
            >
              <span className="text-gray-500">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
