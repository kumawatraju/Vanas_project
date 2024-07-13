/* eslint-disable no-unused-vars */
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { IoAddSharp } from "react-icons/io5";

export default function StepForm() {
  return (
    <>
      <div className="">
        <div className="w-full h-[500px] md:top-[144px] rounded-xl md:p-6">
          <div className="w-full space-y-4">
            <label htmlFor="name" className="flex font-sans">
              Step Name
            </label>
            <Field
              className="border rounded-md border-gray-200 text-bold text-sm w-full p-3 focus:outline-none focus:ring-1 focus:ring-gray-500 bg-blue-50"
              type="text"
              name="name"
              placeholder="Enter Your name"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-600"
            />

            <label htmlFor="discrepancies" className="flex">
              Discrepancies
            </label>
            <Field
              name="discrepancies"
              as="textarea"
              placeholder="Enter discrepancies"
              className="border w-full p-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 h-14 bg-blue-50"
            />
            <ErrorMessage
              name="discrepancies"
              component="div"
              className="text-red-600"
            />
            <div className="">
              <label htmlFor="" className="font-sans">
                Add Employee{" "}
              </label>
            </div>
            <div className="md:flex w-full gap-6 md:space-y-0 space-y-6">
              <div className="w-full md:w-auto flex-1">
                <Field
                  className="border rounded-md border-gray-200    w-full p-3 h-14 focus:outline-none focus:ring-1 focus:ring-gray-500 bg-blue-50"
                  type="text"
                  name="employeeName"
                  placeholder="Employee name"
                />
                <ErrorMessage
                  name="employeeName"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="w-full md:w-auto flex-1">
                <Field
                  className="border rounded-md border-gray-200    w-full p-3 h-14 focus:outline-none focus:ring-1 focus:ring-gray-500 bg-blue-50"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="w-full md:w-auto">
                <button
                  type="submit"
                  className="bg-blue-600 px-4 py-2 rounded-md text-white w-full h-12 md:h-14 flex items-center justify-center gap-2"
                >
                  Add{" "}
                  <span className="text-white">
                    <IoAddSharp className="text-xl text-white" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
