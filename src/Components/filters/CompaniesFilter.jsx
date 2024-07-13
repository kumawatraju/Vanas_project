/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { MultiSelect } from "primereact/multiselect";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { GrLinkNext } from "react-icons/gr";

const CompaniesFilterSchema = Yup.object().shape({
  selectCustomerType: Yup.array()
    .min(1, "Select at least one Customer Type")
    .nullable(),
  selectedIndustries: Yup.array()
    .min(1, "Select at least one Industry")
    .nullable(),
  selecteMarketVertical: Yup.array()
    .min(1, "Select at least one Market Vertical")
    .nullable(),
  selectedProductType: Yup.array()
    .min(1, "Select at least one Product Type")
    .nullable(),
  selectedTechonologySpace: Yup.array()
    .min(1, "Select at least one Technology Space")
    .nullable(),
  selectedTechonology: Yup.array()
    .min(1, "Select at least one Technology Type")
    .nullable(),
  selectedOtherinfo: Yup.array()
    .min(1, "Select at least one Other Info")
    .nullable(),
  selectedExeHiglight: Yup.array()
    .min(1, "Select at least one Exec Highlight")
    .nullable(),
  selectedUnivercitiesLookup: Yup.array()
    .min(1, "Select at least one Universities Lookup")
    .nullable(),
  selectedInvestedBy: Yup.array()
    .min(1, "Select at least one Invested By")
    .nullable(),
  selectedHqLocation: Yup.array()
    .min(1, "Select at least one HQ Location")
    .nullable(),
});

const initialValues = {
  selectCustomerType: [],
  selectedIndustries: [],
  selecteMarketVertical: [],
  selectedProductType: [],
  selectedTechonologySpace: [],
  selectedTechonology: [],
  selectedOtherinfo: [],
  selectedExeHiglight: [],
  selectedUnivercitiesLookup: [],
  selectedInvestedBy: [],
  selectedHqLocation: [],
};

export default function CompaniesFilter({ handledata }) {
  const [selectCustomerType, setselectCustomerType] = useState(null);
  const [selectedIndustries, setSelectedIndustries] = useState(null);
  const [selecteMarketVertical, setSelecteMarketVertical] = useState(null);
  const [selectedProductType, setSelectedProductType] = useState(null);
  const [selectedTechonologySpace, setSelectedTechonologySpace] =
    useState(null);
  const [selectedTechonology, setSelectedTechonology] = useState(null);
  const [selectedOtherinfo, setSelectedOtherinfo] = useState(null);
  const [selectedExeHiglight, setSelectedExeHiglight] = useState(null);
  const [selectedUnivercitiesLookup, setSelectedUnivercitiesLookup] =
    useState(null);
  const [selectedInvestedBy, setSelectedInvestedBy] = useState(null);
  const [selectedHqLocation, setSelectHqLocation] = useState(null);

  const CustomerType = [
    { name: "Business(B2B)" },
    { name: "Consumer(B2C)" },
    { name: "Government (B2G)" },
  ];
  const industriesType = [
    { name: "Accounting" },
    { name: "3D Printing" },
    { name: "Art" },
  ];
  const marketVerticalType = [
    { name: "Agriculture" },
    { name: "Business Service" },
    { name: "Cybersecurity" },
    { name: "Social Impect" },
  ];
  const productType = [{ name: "Goods" }, { name: "Service" }];
  const techonologySpaceType = [
    { name: "Aerospace / Aviotion" },
    { name: "Ai / Mi" },
    { name: "Internate" },
  ];
  const techonologyType = [
    { name: "Artificial intelligence" },
    { name: "Software" },
    { name: "Hardware" },
    { name: "Blockchain" },
  ];
  const otherInfo = [
    { name: "S20" },
    { name: "S21" },
    { name: "S22" },
    { name: "S24" },
  ];
  const exeHiglight = [
    { name: "$10m Club" },
    { name: "$50m Club" },
    { name: "Current Student" },
    { name: "Venture BackGround" },
  ];
  const univercitiesLookup = [
    { name: "AIIMS Patna" },
    { name: "USAF Academy" },
    { name: "S22" },
    { name: "S24" },
  ];
  const investedBy = [
    { name: "Tata Capital" },
    { name: "jio" },
    { name: "Mahindra Finance" },
  ];
  const hqLocation = [
    { name: "Tata Capital" },
    { name: "jio" },
    { name: "Mahindra Finance" },
  ];

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={CompaniesFilterSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
          handledata(2);
        }}
      >
        {({ values, setFieldValue, errors, touched }) => (
          <>
            <div className="w-full border-b border-gray-300 rounded-lg p-3 shadow-lg mb-6 bg-white">
              <div className=" text-2xl py-2 font-[600] text-blue-500 px-3">
                Find Companices
              </div>
              <p className="text-[17px]  w-full px-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                tenetur autem doloribus suscipit amet officiis nostrum quidem,
                eveniet libero. Quod fugit error optio iste expedita quam
                necessitatibus reprehenderit, vitae assumenda?
              </p>
            </div>
            <Form>
              <div className="w-full">
                <div className="w-full bg-white shadow-lg rounded-lg h-screen px-2    ">
                  {/*  By Company Categories */}
                  <div className="md:px-6 text-xl font-bold py-3 font-sans">
                    By Company Categories
                  </div>
                  <div className="md:flex w-full  md:px-6 md:space-y-0 space-y-6 gap-6  ">
                    <div className="space-y-6 w-full">
                      {/* 1 field */}
                      <div className="card flex justify-content-center bg-gray-200 rounded-xl custom-multiselect">
                        <Field
                          name="selectCustomerType"
                          render={({ field }) => (
                            <MultiSelect
                              {...field}
                              onChange={(e) => {
                                setFieldValue("selectCustomerType", e.value);
                              }}
                              options={CustomerType}
                              optionLabel="name"
                              filter
                              placeholder="Customer Type"
                              maxSelectedLabels={3}
                              className="w-full md:w-20rem bg-blue-50 rounded-xl py-1 custom-multiselect-option"
                            />
                          )}
                        />
                      </div>
                      {errors.selectCustomerType &&
                        touched.selectCustomerType && (
                          <div className="text-red-500   bg-white">
                            {errors.selectCustomerType}
                          </div>
                        )}
                      {/* 3 field */}
                      <div className="card flex justify-content-center bg-gray-200  rounded-xl">
                        <Field
                          name="selecteMarketVertical"
                          render={({ field }) => (
                            <MultiSelect
                              {...field}
                              value={values.selecteMarketVertical}
                              onChange={(e) => {
                                setFieldValue("selecteMarketVertical", e.value);
                              }}
                              options={marketVerticalType}
                              optionLabel="name"
                              filter
                              placeholder="Market Vertical"
                              maxSelectedLabels={3}
                              className="w-full md:w-20rem py-1 bg-blue-50  rounded-xl"
                            />
                          )}
                        />
                      </div>
                      {errors.selecteMarketVertical &&
                        touched.selecteMarketVertical && (
                          <div className="text-red-500 bg-white">
                            {errors.selecteMarketVertical}
                          </div>
                        )}
                      {/* 5 field */}
                      <div className="card flex justify-content-center bg-gray-200  rounded-xl">
                        <Field
                          name="selectedTechonologySpace"
                          render={({ field }) => (
                            <MultiSelect
                              {...field}
                              value={values.selectedTechonologySpace}
                              onChange={(e) => {
                                setFieldValue(
                                  "selectedTechonologySpace",
                                  e.value
                                );
                              }}
                              options={techonologySpaceType}
                              optionLabel="name"
                              filter
                              placeholder=" Technology Space"
                              maxSelectedLabels={3}
                              className="w-full md:w-20rem bg-blue-50 py-1  rounded-xl"
                            />
                          )}
                        />
                      </div>
                      {errors.selectedTechonologySpace &&
                        touched.selectedTechonologySpace && (
                          <div className="text-red-500 bg-white">
                            {errors.selectedTechonologySpace}
                          </div>
                        )}
                      {/* 7 field */}
                      <div className="card flex justify-content-center bg-gray-200  rounded-xl">
                        <Field
                          name="selectedOtherinfo"
                          render={({ field }) => (
                            <MultiSelect
                              {...field}
                              value={values.selectedOtherinfo}
                              onChange={(e) => {
                                setFieldValue("selectedOtherinfo", e.value);
                              }}
                              options={otherInfo}
                              optionLabel="name"
                              filter
                              placeholder="Other Info (YC Batch)"
                              maxSelectedLabels={3}
                              className="w-full md:w-20rem bg-blue-50 py-1  rounded-xl"
                            />
                          )}
                        />
                      </div>
                      {errors.selectedOtherinfo &&
                        touched.selectedOtherinfo && (
                          <div className="text-red-500 bg-white">
                            {errors.selectedOtherinfo}
                          </div>
                        )}
                    </div>
                    <div className="md:flex w-full  gap-6">
                      <div className="space-y-6 w-full">
                        {/* 2 field */}
                        <div className="card flex justify-content-center bg-gray-200  rounded-xl">
                          <Field
                            name="selectedIndustries"
                            render={({ field }) => (
                              <MultiSelect
                                {...field}
                                value={values.selectedIndustries}
                                onChange={(e) => {
                                  setFieldValue("selectedIndustries", e.value);
                                }}
                                options={industriesType}
                                optionLabel="name"
                                filter
                                placeholder="Industries"
                                maxSelectedLabels={3}
                                className="w-full py-1  bg-blue-50  rounded-xl"
                              />
                            )}
                          />
                        </div>
                        {errors.selectedIndustries &&
                          touched.selectedIndustries && (
                            <div className="text-red-500 bg-white">
                              {errors.selectedIndustries}
                            </div>
                          )}
                        {/* 4 field */}
                        <div className="card flex justify-content-center bg-gray-200  rounded-xl">
                          <Field
                            name="selectedProductType"
                            render={({ field }) => (
                              <MultiSelect
                                {...field}
                                value={values.selectedProductType}
                                onChange={(e) => {
                                  setFieldValue("selectedProductType", e.value);
                                }}
                                options={productType}
                                optionLabel="name"
                                filter
                                placeholder="Product Type"
                                maxSelectedLabels={3}
                                className="w-full md:w-20rem py-1 bg-blue-50  rounded-xl"
                              />
                            )}
                          />
                        </div>
                        {errors.selectedProductType &&
                          touched.selectedProductType && (
                            <div className="text-red-500 bg-white">
                              {errors.selectedProductType}
                            </div>
                          )}
                        {/* 6 field */}
                        <div className="card flex justify-content-center bg-gray-200  rounded-xl">
                          <Field
                            name="selectedTechonology"
                            render={({ field }) => (
                              <MultiSelect
                                {...field}
                                value={values.selectedTechonology}
                                onChange={(e) => {
                                  setFieldValue("selectedTechonology", e.value);
                                }}
                                options={techonologyType}
                                optionLabel="name"
                                filter
                                placeholder="Technology Type"
                                maxSelectedLabels={3}
                                className="w-full md:w-20rem py-1 bg-blue-50  rounded-xl"
                              />
                            )}
                          />
                        </div>
                        {errors.selectedTechonology &&
                          touched.selectedTechonology && (
                            <div className="text-red-500 bg-white">
                              {errors.selectedTechonology}
                            </div>
                          )}
                      </div>
                    </div>
                  </div>

                  {/*     By Company Exec */}
                  <div className="md:px-6 text-xl font-bold py-6 font-sans">
                    By Company Execs
                  </div>
                  <div className="md:flex w-full md:px-6 md:space-y-0 space-y-6 gap-6 ">
                    {/* 1 field */}
                    <div className="w-full">
                      <div className="card flex justify-content-center bg-gray-200 w-full  rounded-xl">
                        <Field
                          name="selectedUnivercitiesLookup"
                          render={({ field }) => (
                            <MultiSelect
                              {...field}
                              value={values.selectedUnivercitiesLookup}
                              onChange={(e) => {
                                setFieldValue(
                                  "selectedUnivercitiesLookup",
                                  e.value
                                );
                              }}
                              options={univercitiesLookup}
                              optionLabel="name"
                              filter
                              placeholder="Universities Lookup"
                              maxSelectedLabels={3}
                              className="w-full py-1 md:w-20rem bg-blue-50  rounded-xl"
                            />
                          )}
                        />
                      </div>
                      {errors.selectedUnivercitiesLookup &&
                        touched.selectedUnivercitiesLookup && (
                          <div className="text-red-500 bg-white pt-3">
                            {errors.selectedUnivercitiesLookup}
                          </div>
                        )}
                    </div>
                    {/* 2 field */}
                    <div className="w-full">
                      <div className="card flex justify-content-center bg-gray-200 w-full  rounded-xl">
                        <Field
                          name="selectedExeHiglight"
                          render={({ field }) => (
                            <MultiSelect
                              {...field}
                              value={values.selectedExeHiglight}
                              onChange={(e) => {
                                setFieldValue("selectedExeHiglight", e.value);
                              }}
                              options={exeHiglight}
                              optionLabel="name"
                              filter
                              placeholder="Exec Highlight"
                              maxSelectedLabels={3}
                              className="w-full md:w-20rem py-1 bg-blue-50  rounded-xl"
                            />
                          )}
                        />
                      </div>
                      {errors.selectedExeHiglight &&
                        touched.selectedExeHiglight && (
                          <div className="text-red-500 bg-white pt-3">
                            {errors.selectedExeHiglight}
                          </div>
                        )}
                    </div>
                  </div>
                  {/*     By Company Info */}
                  <div className="md:px-6 text-xl font-bold py-6 font-sans">
                    By Company Info
                  </div>
                  <div className="md:flex w-full md:px-6 md:space-y-0 space-y-6 gap-6 ">
                    {/* 1 field */}
                    <div className="w-full">
                      <div className="card flex justify-content-center bg-gray-200 w-full  rounded-xl">
                        <Field
                          name="selectedInvestedBy"
                          render={({ field }) => (
                            <MultiSelect
                              {...field}
                              value={values.selectedInvestedBy}
                              onChange={(e) => {
                                setFieldValue("selectedInvestedBy", e.value);
                              }}
                              options={investedBy}
                              optionLabel="name"
                              filter
                              placeholder="invested By"
                              maxSelectedLabels={3}
                              className="w-full md:w-20rem bg-blue-50 py-1  rounded-xl"
                            />
                          )}
                        />
                      </div>
                      {errors.selectedInvestedBy &&
                        touched.selectedInvestedBy && (
                          <div className="text-red-500 bg-white pt-3">
                            {errors.selectedInvestedBy}
                          </div>
                        )}
                    </div>
                    {/* 2 field */}
                    <div className="w-full">
                      <div className="card flex justify-content-center bg-gray-200 w-full  rounded-xl">
                        <Field
                          name="selectedHqLocation"
                          render={({ field }) => (
                            <MultiSelect
                              {...field}
                              value={values.selectedHqLocation}
                              onChange={(e) => {
                                setFieldValue("selectedHqLocation", e.value);
                              }}
                              options={hqLocation}
                              optionLabel="name"
                              filter
                              placeholder="HQ Location"
                              maxSelectedLabels={3}
                              className="w-full md:w-20rem bg-blue-50 py-1  rounded-xl"
                            />
                          )}
                        />
                      </div>
                      {errors.selectedHqLocation &&
                        touched.selectedHqLocation && (
                          <div className="text-red-500 bg-white pt-3">
                            {errors.selectedHqLocation}
                          </div>
                        )}
                    </div>
                  </div>
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
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}
