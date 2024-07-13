/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
// eslint-disable-next-line no-unused-vars
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Accordions from "./Accordions";
import { GrLinkNext } from "react-icons/gr";

export default function DurationServices() {
  const [opensteps, setOpenSteps] = useState(3); // Initially set to 3

  const initialValues = {
    "duration-service": "3", // Preselect the 3 option
  };

  const validationSchema = Yup.object({
    "duration-service": Yup.string().required(
      "Please select at least one duration service"
    ),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <>
      <ToastContainer />
      <div className="">
        <div className="w-full border-b border-gray-300 rounded-lg p-3 shadow-lg mb-6 bg-white">
          <div className="text-2xl font-sans py-2 font-[600] text-blue-500 px-3">
            Meeting Steps
          </div>
          <p className="text-[17px] w-full px-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
            tenetur autem doloribus suscipit amet officiis nostrum quidem,
            eveniet libero. Quod fugit error optio iste expedita quam
            necessitatibus reprehenderit, vitae assumenda?
          </p>
        </div>
        <div className="bg-white shadow-lg py-4 rounded-lg">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ setFieldValue, values }) => (
              <Form>
                <div className="w-full grid md:grid-cols-6 lg:gap-[10.5rem] lg:ml-12">
                  {[3, 4, 5, 6, 7].map((num) => (
                    <DurationServicesBox
                      key={num}
                      number={num}
                      text="Steps"
                      setOpenSteps={setOpenSteps}
                      setFieldValue={setFieldValue}
                      isChecked={values["duration-service"] === num.toString()} // Check if the current box is selected
                    />
                  ))}
                </div>
              </Form>
            )}
          </Formik>


          <div className="">
            <Accordions opensteps={opensteps} setOpenSteps={setOpenSteps}/>
          </div>



          {/* <div className="w-full flex justify-between py-4 px-6 bg-white fixed bottom-0 left-0 md:left-auto md:w-[61%]  border-gray-300">
            <button
              type="submit"
              className="py-2 px-4 bg-green-500 text-white rounded-lg flex items-center gap-2 ml-auto"
            >
              Submit
              <GrLinkNext className="text-xl" />
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}

export const DurationServicesBox = ({
  number,
  text,
  setOpenSteps,
  setFieldValue,
  isChecked,
}) => {
  const handleClick = () => {
    setOpenSteps(number);
    setFieldValue("duration-service", number.toString()); // Set the selected value
  };

  return (
    <div className="w-full">
      <div className="">
        <label
          className="duration-option border-b-2 border-blue-800"
          onClick={handleClick}
        >
          <Field
            type="radio"
            name="duration-service"
            value={number}
            className="d-checkbox"
            checked={isChecked}
          />
          <span className="checkbox-circle-tick"></span>
          <span className="duration-box text-center w-full sm:w-full md:w-40 md:h-40 lg:w-48 lg:h-48 flex flex-col justify-center items-center border border-gray-300">
            <span className="text-md text-gray-500">{number}</span>
            <h2 className="text-3xl text-gray-500">{text}</h2>
          </span>
        </label>
      </div>
    </div>
  );
};
