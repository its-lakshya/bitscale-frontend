import Image from "next/image";
import cloudIcon from "../assets/icons/cloud.svg";
import coinsIcon from "../assets/icons/coins.svg";
import homeIcon from "../assets/icons/home.svg";
import rocketIcon from "../assets/icons/rocket.svg";
import starIcon from "../assets/icons/star.svg";

const Header = () => {
  return (
    <header className="w-full px-6 py-2 flex items-center justify-between text-sm font-medium">
      <div className="flex items-center gap-4">
        <div className="size-6 flex justify-center items-center rounded-sm bg-[#F3F4F6]">
          <Image src={homeIcon} alt="home icon" />
        </div>
        <div className="flex items-center gap-4">
          <Image src={starIcon} alt="star icon" />
          <div className="flex items-center gap-1 md:gap-2 w-full min-w-0">
            <span className="text-[#9CA3AF] truncate max-lg:w-22" title="Workbook - Bitscale UX/UI testing flow"
            >
              Workbook - Bitscale UX/UI testing flow
            </span>
            <span className="text-[#9CA3AF] shrink-0">/</span>
            <span className="text-[#374151] truncate min-w-0 max-lg:w-20" title="Bitscale grid only"
            >
              Bitscale grid only
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1.5 px-3 py-1 bg-[#FBF3DB] text-[#CB912E] rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
          <Image src={rocketIcon} alt="rocket icon" />
          <span className='max-md:hidden'>Upgrade Plan</span>
        </button>
        <Image src={cloudIcon} alt="cloud icon" />
        <button className="flex items-center gap-4 px-2 py-1 bg-[#EDF3EC] text-xs border border-[#98BCA6] rounded-[10px] hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="flex items-center gap-1.5 max-md:hidden">
            <Image src={coinsIcon} alt="coins icon" />
            <span className="text-[#438361] ">500/500</span>
          </div>
          <span className="w-10 h-5 flex items-center justify-center text-white bg-[#438361] rounded-lg">
            Free
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
