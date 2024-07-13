import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { FormImage } from "../helper/FormImage";

const ResetSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});
const ResetPassword = () => {
  return (
    <div className="md:flex space-y-6 md:space-y-0 w-full h-screen justify-evenly">
      <div className=" md:w-1/2 md:mt-48 mt-6 md:px-0 px-6">
        <div className="flex justify-center">
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={ResetSchema}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              resetForm();
            }}
          >
            {({ errors, touched, isSubmitting }) => (
              <div className=" w-[412px] h-auto   top-[144px] bg-white  shadow-md rounded-xl">
                <h1 className="text-xl font-sans font-bold py-6 px-6">
                  Reset Password
                </h1>
                <div className="bg-slate-200 h-[.5px] w-full "></div>

                <Form>
                  <div className="space-y-2 px-6">
                    <label
                      htmlFor="Email"
                      className="flex  font-normal text-md text-slate-700 pt-4"
                    >
                      Your email
                    </label>
                    <Field
                      className="border rounded-md border-gray-200 text-bold text-sm  focus:outline-none w-full p-3"
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                    />
                    {errors.email && touched.email && (
                      <div className="text-red-600">{errors.email}</div>
                    )}

                    <div className="py-4">
                      <button
                        type="submit"
                        className="text-white w-full  p-2 bg-blue-500  rounded-lg capitalize "
                      >
                        Reset Password
                      </button>
                    </div>
                  </div>

                  <div className="">
                    <div className="bg-slate-200 h-[.5px] w-full"></div>
                    <div className="text-center p-2   py-8">
                      Don't have an Account?{" "}
                      <Link
                        to={"/signup"}
                        className="text-blue-500 cursor-pointer underline"
                      >
                        Sign Up here{" "}
                      </Link>
                    </div>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
      <div className=" ">
        <FormImage />
      </div>
    </div>
  );
};

export default ResetPassword;
