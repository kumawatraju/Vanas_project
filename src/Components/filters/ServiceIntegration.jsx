/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { IoIosCheckmark } from "react-icons/io";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdArrowBack } from "react-icons/md";
import { GrLinkNext } from "react-icons/gr";

// eslint-disable-next-line react/prop-types
export default function ServiceIntegration({ handledata }) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const validationSchema = Yup.object({
    airtable: Yup.boolean(),
    drive: Yup.boolean(),
    hubspot: Yup.boolean(),
    affinity: Yup.boolean(),
  });

  const initialValues = {
    airtable: false,
    drive: false,
    hubspot: false,
    affinity: false,
  };

  const onSubmit = (values) => {
    if (!Object.values(values).some((val) => val === true)) {
      toast.error("Please select at least one service integration.");
      return;
    }
    console.log("Form data", values);
    handledata(3);
  };

  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleChange, values, setFieldValue }) => (
          <Form className="w-full">
            <div className="w-full border-b border-gray-300 rounded-lg p-3 shadow-lg mb-6 bg-white">
              <div className=" text-2xl font-sans py-2 font-[600] text-blue-500 px-3">
              Services Integration
              </div>
              <p className="text-[17px] w-full px-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                tenetur autem doloribus suscipit amet officiis nostrum quidem,
                eveniet libero. Quod fugit error optio iste expedita quam
                necessitatibus reprehenderit, vitae assumenda?
              </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 bg-white p-3 rounded-lg">
              {Object.entries(initialValues).map(([key]) => (
                <div className=" " key={key}>
                  <label className="option_item">
                    <Field
                      type="checkbox"
                      name={key}
                      className="checkbox"
                      onChange={handleChange}
                      checked={values[key]}
                    />
                    <span className="option_inner cursor-pointer">
                      <IoIosCheckmark className="tickmark text-white text-[14px]" />
                      <span className="icon">
                        <img
                          src={
                            key === "airtable"
                              ? "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Airtable_Logo.svg/2560px-Airtable_Logo.svg.png"
                              : key === "drive"
                              ? "https://upload.wikimedia.org/wikipedia/commons/f/fb/Google_Drive_-_New_Logo.png"
                              : key === "hubspot"
                              ? "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/2560px-HubSpot_Logo.svg.png"
                              : key === "affinity"
                              ? "https://assets-global.website-files.com/6372644369a530caa8c39dfc/6375427ad0fd91028b655a3b_Affinity%20Logo%20Colour.svg"
                              : ""
                          }
                          alt={key}
                          className="w-48"
                        />
                      </span>
                      <span className="name py-12">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </span>
                    </span>
                  </label>
                </div>
              ))}
            </div>

            <div className="w-full flex justify-between py-4 px-6 bg-white fixed bottom-0 left-0 md:left-auto md:w-[61%]  border-gray-300">
              <button
                type="submit"
                className="py-2 px-4 bg-blue-500 text-white rounded-lg flex items-center gap-2 ml-auto"
              >
                Next
                <GrLinkNext className="text-xl" />
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
