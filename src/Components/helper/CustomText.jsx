import React from "react";

export default function CustomText({ title }) {
  return (
    <div>
      <div className=" text-[12px] text-gray-400 py-3 ml-2 capitalize">
        {title}
      </div>
    </div>
  );
}
