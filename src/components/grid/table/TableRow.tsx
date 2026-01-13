"use client"

import { GridRow, StatusValues } from "@/types/grid";
import Image from "next/image";
import chevronRightIcon from "../../../assets/icons/chevron-right.svg";
import linkIcon from "../../../assets/icons/link.svg";
import peopleIcon from "../../../assets/icons/people.svg";
import CompanyLogo from "@/components/CompanyLogo";
import { TableRowShimmer } from "../shimmer/ShimmerGrid";
import { useEffect, useState } from "react";

interface Props {
  data: GridRow;
}

const TableRow: React.FC<Props> = ({ data }) => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
  
      return () => clearTimeout(timer);
    }, []);
  
    if(loading) return <TableRowShimmer />
  return (
    <tr className="text-xs font-normal hover:bg-gray-50 transition">
      <td className="px-3 py-1.5 border border-[#F3F4F6]  text-[#6B7280]">
        <span className='flex items-center justify-center'>
          {data.id}
        </span>
      </td>

      <td className="px-3 py-1.5 border border-[#F3F4F6]">
        <div className="flex items-center justify-between px-2 py-1 w-full bg-[#E7F3F8] rounded-full">
          <span className="flex items-center gap-2">
            <Image src={peopleIcon} alt="people icon" />
            <span className="text-[#374151]">{data.personName}</span>
          </span>
          <Image src={chevronRightIcon} alt="righ arrow icon" />
        </div>
      </td>

      <td className="px-3 py-1.5 text-[#374151] border border-[#F3F4F6]">{data.lastUpdated}</td>

      <td className="px-3 py-1.5 text-[#111928] border border-[#F3F4F6]">
        <span className='flex items-center gap-2'>
          <CompanyLogo name={data.company} />
          {data.company}
        </span>
        </td>

      <td className="px-3 py-1.5 text-[#4B5563] border border-[#F3F4F6]">
        <span className="flex items-center gap-2 cursor-pointer">
          <Image src={linkIcon} alt="lin icon" />
          {data.website}
        </span>
      </td>

      <td className="px-3 py-1.5 text-[#4B5563] border border-[#F3F4F6] cursor-pointer">
        <span className="flex items-center gap-2">
          <Image src={linkIcon} alt="lin icon" />
          <span className='max-w-54 truncate'>{data.linkedinJobUrl}</span>
        </span>
      </td>

      <td className="px-3 py-1.5 border border-[#F3F4F6]">
        {data.emailStatus === StatusValues.success ? (
          <div className="flex items-center justify-between px-2 py-1 w-full bg-[#E7F3F8] rounded-full">
            <span className="flex items-center gap-2">
              ✅<span className="text-[#374151]">Email Found</span>
            </span>
            <Image src={chevronRightIcon} alt="righ arrow icon" />
          </div>
        ) : (
          <p className="text-[#C27803] italic">Run conditions not met</p>
        )}
      </td>

      <td className="px-3 py-1.5 border border-[#F3F4F6]">
        <span className="flex items-center gap-2 text-[#111928]">
          {data.findIcp === StatusValues.success ? "ICP" : "NON - ICP"}
        </span>
      </td>
      <td className="px-3 py-1.5 border border-[#F3F4F6]">
        <span className="flex items-center gap-2 text-[#111928]">
          {data.email}
        </span>
      </td>
      <td className="px-3 py-1.5 max-w-52 border border-[#F3F4F6]">
        <span className="flex items-center gap-2 text-[#111928]">
          {data.enrichCompany === StatusValues.success ? (
            <span className="max-w-full truncate cursor-default">
              Bitscale Evaluation - Account relevancy check.csv
            </span>
          ) : (
            <span className="text-[#F05252] italic">
              An Error occurred. Try again
            </span>
          )}
        </span>
      </td>
      <td className="px-3 py-1.5 max-w-52 border border-[#F3F4F6]">
        <span className="flex items-center">
          <span className="text-[#F05252] italic max-w-full truncate cursor-default">
            Your credits are exhausted. Please recharge.
          </span>
        </span>
      </td>
    </tr>
  );
};

export default TableRow;
