import Image from "next/image";
import infoCircleIcon from "../assets/icons/info-circle.svg"

const Alert = () => {
  return (
    <div className="w-full h-11 bg-[#C81E1E] text-white flex items-center justify-center gap-6 max-md:gap-3 max-sm:text-[10px] text-sm max-md:text-xs font-medium">
      <p className='flex items-center gap-2'>
        Payment failed. 450,000 credits will permanently expire in 30 days
        <Image src={infoCircleIcon} alt="info icon" />
      </p>
      <button className="bg-white text-[#374151] font-semibold px-4 py-1 max-md:px-2 rounded-lg cursor-pointer hover:text-[#C81E1E] hover:scale-105 transition-all duration-300">
        Pay <span className="max-md:hidden">Now</span>
      </button>
    </div>
  );
};

export default Alert;