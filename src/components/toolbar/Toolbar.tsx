"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FiFilter, FiTrash2, FiEye, FiGrid, FiUsers, FiUpload, FiRefreshCcw } from "react-icons/fi";

import cheveroneDownIcon from "../../assets/icons/chevron-down.svg";
import colIcon from "../../assets/icons/col.svg";
import filterIcon from "../../assets/icons/filter.svg";
import rowIcon from "../../assets/icons/row.svg";
import sortIcon from "../../assets/icons/sort.svg";
import starRoundedIcon from "../../assets/icons/star-double.svg";

import { ToolbarButton } from "./ToolbarButton";
import LoadDataButton from "./LoadDataButton";
import { RiSortAlphabetDesc } from "react-icons/ri";
import { IoTimerOutline } from "react-icons/io5";
import { LuBuilding } from "react-icons/lu";
import EnrichmentButton from "./EnrichmentButton";

export default function Toolbar() {
  const [actionOpen, setActionOpen] = useState(false);

  const actionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (actionRef.current && !actionRef.current.contains(e.target as Node)) {
        setActionOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div className="w-full h-14 bg-white border-t border-[#E5E7EB] rounded-md px-4 flex items-center justify-between text-sm font-medium">

      <div className="flex items-center gap-3">
        <LoadDataButton />

        <div className="h-5 w-px bg-[#D1D5DB]" />

        <ToolbarButton
          icon={rowIcon}
          label="2000 Rows"
          dropdownItems={[
            { label: "1000 Rows" },
            { label: "2000 Rows" },
            { label: "5000 Rows" },
          ]}
        />

        <ToolbarButton
          icon={colIcon}
          label="16/20 Columns"
          dropdownItems={[
            { label: "Show All", icon: <FiEye /> },
            { label: "Hide Empty", icon: <FiGrid /> },
            { label: "Manage Columns", icon: <FiUsers /> },
          ]}
        />

        <ToolbarButton
          icon={sortIcon}
          label="Sort by"
          dropdownItems={[
            { label: "Name", icon: <RiSortAlphabetDesc /> },
            { label: "Company", icon: <LuBuilding /> },
            { label: "Last Updated", icon: <IoTimerOutline /> },
          ]}
        />

        <ToolbarButton
          icon={filterIcon}
          label="Filter"
          badge="1"
          dropdownItems={[
            { label: "Add Filter", icon: <FiFilter /> },
            { label: "Clear Filters", icon: <FiTrash2 /> },
          ]}
        />
      </div>

      <div className="flex items-center gap-3">

        <div className="relative" ref={actionRef}>
          <div
            onClick={() => setActionOpen(!actionOpen)}
            className="px-3 h-7 flex items-center gap-2 bg-[#F3F4F6] text-[#1F2A37] rounded-lg cursor-pointer hover:scale-105 translate-full duration-300"
          >
            Action
            <Image src={cheveroneDownIcon} alt="down arrow icon" />
          </div>

          {actionOpen && (
            <div className="absolute right-0 top-9 bg-white border border-[#E5E7EB] rounded-xl shadow-lg z-50 min-w-[180px] overflow-hidden">
              {[
                { label: "Export", icon: <FiUpload /> },
                { label: "Delete", icon: <FiTrash2 /> },
                { label: "Assign", icon: <FiUsers /> },
                { label: "Run on Selected", icon: <FiRefreshCcw /> },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-3 py-2 text-xs text-[#374151] hover:bg-gray-100 cursor-pointer"
                >
                  <span className="text-gray-500">{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          )}
        </div>
        <EnrichmentButton />

        <Image src={starRoundedIcon} alt="button" />
      </div>
    </div>
  );
}
