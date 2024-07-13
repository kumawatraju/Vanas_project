import { HiMenu, HiOutlineSearch } from "react-icons/hi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { GrAddCircle } from "react-icons/gr";
import { RiMenu4Line } from "react-icons/ri";

function Header({ handleToggleSidebar }) {
  return (
    <div className="bg-white md:h-16 h-14 flex justify-between px-8 items-center w-full z-10">
      <div className="flex items-center gap-3">
        <HiMenu className="cursor-pointer" onClick={handleToggleSidebar} />
        <h2 className="text-xl font-sans font-bold">Dashboard</h2>
      </div>
      <div className="flex items-center lg:space-x-5 space-x-2">
        <div className="relative">
          <HiOutlineSearch
            fontSize={20}
            className="absolute text-gray-400 top-1/2 -translate-y-1/2 left-3 md:block hidden"
          />
          <input
            type="text"
            placeholder="Search for task and etc."
            className="text-sm focus:outline-none h-10 xl:w-[14rem] lg:w-[14rem] w-[10rem] rounded-lg bg-transparent pl-9 text-[#778CA2] md:block hidden"
          />
        </div>
        <span className="w-10 h-10 rounded-full hover:bg-blue-100 relative cursor-pointer">
          <MdOutlineNotificationsNone className="text-2xl mt-2 ml-2 text-[#778CA2]" />
          <span className="absolute w-4 h-4 bg-pink-600 text-white rounded-full text-center text-xs top-0 right-1">
            7
          </span>
        </span>
        <GrAddCircle className="text-[#778CA2]" />
        <RiMenu4Line className="text-[#778CA2]" />
        <div className="flex gap-4">
          <img
            src="./images/image2.jpg"
            alt="user profile image"
            className="w-12 h-12 rounded-full bg-cover border-t-gray-700"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
