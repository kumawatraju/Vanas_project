"use client";
import React, { useState } from "react";
import { MultiSelect } from "primereact/multiselect";
export default function MeetingStep() {
  const [selectedCities, setSelectedCities] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  return (
    <>
      <div className="w-full">
        <div className="md:px-24">
          <div className=" text-xl font-bold py-3">Meeting Steps</div>
          <div className= " item-cenetr md:w-1/2  md:px-6 space-y-6 p-8 rounded-lg ">

            <label htmlFor="add steps" className="flex font-bold">
              Add Steps
            </label>
            <input
              type="number"
              placeholder="Select number .."
              className="md:w-full border p-2 rounded-md w-full"
            />
            <button className=" w-full bg-blue-600 md:px-4 py-2 rounded-md text-white">Add More..</button>
          </div>
        </div>
      </div>
    </>
  );
}
