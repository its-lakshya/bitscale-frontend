import Image from "next/image";
import buildingsIcon from "../../../assets/icons/buildings.svg";
import calendarIcon from "../../../assets/icons/calendar.svg";
import florinIcon from "../../../assets/icons/florin.svg";
import mailIcon from "../../../assets/icons/mail.svg";
import peopleIcon from "../../../assets/icons/people.svg";
import gptIcon from "../../../assets/icons/gpt.svg";
import enrichIcon from "../../../assets/icons/enrich.svg";
import phoneIcon from "../../../assets/icons/phone.svg";
import checkboxIcon from "../../../assets/icons/checkbox.svg";
import playIcon from "../../../assets/icons/play.svg";

const headerCell =
  "px-3 py-2 w-52 h-[34px] bg-[#FAFAFA] border border-[#E5E7EB] border-l-0 text-left text-xs font-medium text-[#374151]";

const TableHeader: React.FC = () => {
  return (
    <thead className="sticky top-0">
      <tr>
        <th className={`${headerCell} w-[60px]`}>
          <span className='w-full flex items-center gap-2'>
            <Image src={checkboxIcon} alt="checkbox icon" />
            <Image src={playIcon} alt="play icon" />
          </span>
        </th>
        <th className={headerCell}>
          <span className="flex items-center gap-2">
            <span className="flex items-center">
              <Image src={peopleIcon} alt="people icon" />
              <Image
                src={buildingsIcon}
                alt="building icon"
                className="-ml-2.5"
              />
            </span>
            Imported Data
          </span>
        </th>
        <th className={headerCell}>
          <span className="flex items-center gap-2">
            <Image src={calendarIcon} alt="calander icon" />
            Last Updated At
          </span>
        </th>
        <th className={headerCell}>
          <span className="flex items-center gap-2">
            <Image src={florinIcon} alt="florin icon" />
            Company Name
          </span>
        </th>
        <th className={headerCell}>
          <span className="flex items-center gap-2">
            <Image src={florinIcon} alt="florin icon" />
            Company Website
          </span>
        </th>
        <th className={headerCell}>
          <span className="flex items-center gap-2">
            <Image src={florinIcon} alt="florin icon" />
            LinkedIn Job URL
          </span>
        </th>
        <th className={headerCell}>
          <span className="flex items-center gap-2">
            <Image src={mailIcon} alt="mail icon" />
            Email Waterfall
          </span>
        </th>
        <th className={headerCell}>
          <span className="flex items-center gap-2">
            <Image src={gptIcon} alt="gpt icon" />
            Find ICP
          </span>
        </th>
        <th className={headerCell}>
          <span className="flex items-center gap-2">
            <Image src={florinIcon} alt="florin icon" />
            Email Address
          </span>
        </th>
        <th className={headerCell}>
          <span className="flex items-center gap-2">
            <Image src={enrichIcon} alt="enrich icon" />
            Enrich Compnay
          </span>
        </th>
        <th className={headerCell}>
          <span className="flex items-center gap-2">
            <Image src={phoneIcon} alt="phone icon" />
            Phone Waterfall
          </span>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
