import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiEye, FiGrid, FiUsers } from "react-icons/fi";
import cheveroneDownWhiteIcon from "../../assets/icons/chevron-down-white.svg";
import starIcon from "../../assets/icons/star-tripple.svg";

const EnrichmentButton = () => {
  const enrichRef = useRef<HTMLDivElement>(null);
  const [enrichOpen, setEnrichOpen] = useState(false);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (enrichRef.current && !enrichRef.current.contains(e.target as Node)) {
        setEnrichOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);
  return (
    <div
      className="relative hover:scale-105 transition-all duration-300"
      ref={enrichRef}
    >
      <div
        className="flex items-center gap-0.5 cursor-pointer"
        onClick={() => setEnrichOpen(!enrichOpen)}
      >
        <button className="h-7 flex items-center gap-2 px-3 rounded-l-lg max-lg:rounded-lg bg-[#1F2A37] text-white cursor-pointer">
          <Image src={starIcon} alt="start icon" />
          <span className="max-lg:hidden">Enrichment</span>
        </button>
        <button className="h-7 flex items-center gap-2 px-2 rounded-r-lg bg-[#1F2A37] text-white cursor-pointer max-lg:hidden">
          <Image src={cheveroneDownWhiteIcon} alt="down arrow icon" />
        </button>
      </div>

      {enrichOpen && (
        <div className="absolute right-0 top-9 bg-white border border-[#E5E7EB] rounded-xl shadow-lg z-50 min-w-47 overflow-hidden">
          {[
            { label: "Find Emails", icon: <FiUsers /> },
            { label: "Verify Contacts", icon: <FiEye /> },
            { label: "Enrich Companies", icon: <FiGrid /> },
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
  );
};

export default EnrichmentButton;
