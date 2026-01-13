"use client";

import { footerTabs } from "@/data/footerTabs";
import Image from "next/image";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import beeIcon from "../assets/icons/bee.svg";
import deleteIcon from "../assets/icons/delete.svg";
import frameIcon from "../assets/icons/frame.svg";
import hourglassIcon from "../assets/icons/hourglass.svg";
import plusIcon from "../assets/icons/plus.svg";

const Footer = () => {
  const [activeTab, setActiveTab] = useState("Bitscale grid only");
  const [showMoreButton, setShowMoreButton] = useState(false);

  return (
    <footer className="w-full flex items-center justify-between gap-2 h-10 px-3 text-xs font-medium border-t border-[#F3F4F6] sticky bottom-0">
      <div className="flex items-center gap-4 flex-1 h-full max-md:w-1/3 md:max-lg:w-1/3 lg:max-2xl:w-1/2">
        <button className="flex items-center gap-2 px-3 py-1 border border-gray-200 rounded-lg w-max">
          <Image src={plusIcon} alt="plus icon" />
          <span className="max-lg:hidden">Grid</span>
        </button>
        <div className="w-full h-full flex items-center overflow-x-auto overflow-y-hidden no-scrollbar">
          {footerTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 max-lg:px-1 py-1 h-full cursor-pointer whitespace-nowrap border-t-2 transition-colors ${
                activeTab === tab
                  ? "border-[#1A56DB] text-[#1A56DB]"
                  : "border-transparent text-[#9CA3AF]"
              }`}
            >
              <span className="grid grid-cols-[1fr_16px] items-center gap-2 max-xl:gap-1 max-lg:gap-0 min-w-0 max-w-27.5 sm:max-w-35 md:max-w-45 ">
                <span className="truncate" title={tab}>
                  {tab}
                </span>
                <span className="flex justify-end">
                  <BsThreeDotsVertical
                    className={`text-[14px] transition-opacity ${
                      activeTab === tab ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </span>
              </span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="p-1 hover:bg-gray-100 rounded-lg cursor-pointer">
            <IoIosArrowBack className="text-[#D1D5DB] text-[14px]" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded-lg cursor-pointer">
            <IoIosArrowForward className="text-[#374151] text-[14px]" />
          </button>
        </div>
      </div>

      <div className="relative w-max">
        <button
          className="rounded-lg border border-[#F3F4F6] px-2 py-1 flex items-center md:hidden"
          onClick={() => setShowMoreButton(!showMoreButton)}
        >
          More
        </button>

        <div
          className={`flex items-center gap-4 max-md:absolute max-md:w-36 max-md:bottom-10 max-md:flex-col max-md:bg-white max-md:px-2 max-md:right-0 max-md:gap-2 max-md:items-start max-md:shadow-[0px_2px_5px_0px_rgba(0,0,0,0.102)] max-md:rounded-md max-md:p-2 ${
            showMoreButton ? "max-md:block" : "max-md:hidden"
          }`}
        >
          <button className="flex items-center gap-2 text-[#C81E1E] cursor-pointer max-md:px-2 max-md:py-1.5">
            <Image src={deleteIcon} alt="delete Icon" />
            Kill Run
          </button>

          <div className="h-5 w-px bg-[#E5E7EB] max-md:hidden" />
          <div className="flex items-center gap-2 text-[#374151] max-md:flex-col max-md:items-start">
            <button className="relative flex items-center gap-2 px-2 py-1.5 rounded-lg border border-[#E5E7EB] cursor-pointer">
              <Image src={hourglassIcon} alt="hourglass icon" />
              Auto Run
              <span className="size-6 absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#1A56DB] rounded-full max-md:hidden"></span>
            </button>
            <button
              className={`relative flex items-center gap-2 px-2 py-1.5 rounded-lg border border-[#E5E7EB] cursor-pointer`}
            >
              <Image src={frameIcon} alt="frame Icon" />
              Auto Dedupe
              <span className="size-6 absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#1A56DB] rounded-full max-md:hidden"></span>
            </button>
            <button className="flex items-center gap-2 px-2 py-1.5 bg-[#F3F4F6] border border-[#E5E7EB] text-[#1F2A37] rounded-full cursor-pointer">
              <Image src={beeIcon} alt="bee icon" />
              Support
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
