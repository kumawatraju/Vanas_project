import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LuKanban } from "react-icons/lu";
import { FaAffiliatetheme, FaTasks } from "react-icons/fa";
import { TbAppsFilled } from "react-icons/tb";
import CustomLink from "../helper/CustomLink";
import { MdContentCopy, MdDashboard } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { RiContactsBook2Fill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { GiHelp, GiInspiration } from "react-icons/gi";
import { SiAntdesign } from "react-icons/si";

const Sidebar = ({ isExpanded }) => {
  return (
    <div
      className={`flex-col bg-white ${
        !isExpanded ? "md:w-64 w-0" : "md:w-16  "
      } md:block h-screen md:scroll-y-auto   z-20   `}
    >
      <div className="flex items-center text-center justify-start px-1 py-3">
        <div className="p-3 ml-2">
          <Link to={"/"}>
            <img
              src="./images/logo.jpg"
              alt="logo-image"
              className={`${!isExpanded ? "" : ""} w-24 md:block hidden`}
            />
          </Link>
        </div>
      </div>

      {/* Sidebar links and icons */}
      <div className={`${!isExpanded ? "" : ""}`}>
        <div className="p-4 space-y-2">
          <div className={`text-[#778CA2] p-2 md:block hidden `}>
            {isExpanded ? null : "Navigation"}
          </div>
          <CustomLink
            isExpanded={isExpanded}
            to={"/"}
            title={"Dashboard"}
            Icon={<MdDashboard />}
          />
          <CustomLink
            isExpanded={isExpanded}
            to={"/projects"}
            title={"Projects"}
            Icon={<GoProjectSymlink />}
          />
          <CustomLink
            isExpanded={isExpanded}
            to={"/tasks"}
            title={"Tasks"}
            Icon={<FaTasks />}
          />
          <CustomLink
            isExpanded={isExpanded}
            to={"/kanban_dask"}
            title={"Kanban Desk"}
            Icon={<LuKanban />}
          />
          <CustomLink
            isExpanded={isExpanded}
            to={"/calender"}
            title={"Calender"}
            Icon={<SlCalender />}
          />
          <CustomLink
            isExpanded={isExpanded}
            to={"/contacts"}
            title={"Contacts"}
            Icon={<RiContactsBook2Fill />}
          />
          <CustomLink
            isExpanded={isExpanded}
            to={"/all_apps"}
            title={"All Apps"}
            Icon={<TbAppsFilled />}
          />
          <div className="text-[#778CA2] p-2 py-4 font-bold md:block hidden">
            {isExpanded ? null : "Latest Projects"}
          </div>
          <CustomLink
            isExpanded={isExpanded}
            to={"/all_apps"}
            title={"UI/UX Inspiration"}
            Icon={<GiInspiration />}
          />
          <CustomLink
            isExpanded={isExpanded}
            to={"/all_apps"}
            title={"Theme Development"}
            Icon={<FaAffiliatetheme />}
          />
          <CustomLink
            isExpanded={isExpanded}
            to={"/all_apps"}
            title={"Campaing Design"}
            Icon={<SiAntdesign />}
          />
          <CustomLink
            isExpanded={isExpanded}
            to={"/all_apps"}
            title={"Content Creation"}
            Icon={<MdContentCopy />}
          />
        </div>
        <div className="p-4 pt-12">
          <CustomLink
            isExpanded={isExpanded}
            to={"/help_center"}
            title={"Help Center"}
            Icon={<GiHelp />}
          />
          <CustomLink
            isExpanded={isExpanded}
            to={"/setting"}
            title={"Setting"}
            Icon={<IoMdSettings />}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
