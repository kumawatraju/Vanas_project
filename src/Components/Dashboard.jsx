// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import CompaniesFilter from "./filters/CompaniesFilter";

import ServiceIntegration from "./filters/ServiceIntegration";
import FormProgress from "./helper/FormProgress";
import DurationServices from "./filters/DurationServices";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import "primereact/resources/themes/saga-blue/theme.css"; // Theme CSS
import "primereact/resources/primereact.min.css"; // PrimeReact CSS
 
 

export default function Dashboard() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleCompaniesFilter = (value) => {
    setCurrentStep(value);
  };
 
  return (
    <div className="wizard md:flex multisteps-form w-full text-black relative  ">
      <div className="steps order-2 md:w-[22%] w-full bg-white shadow-lg pl-12 fixed right-0">
        <FormProgress
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </div>  

      <div className="multisteps-form__form md:w-[76%] w-full h-screen order-1   md:rounded-tl-2xl md:rounded-bl-2xl overflow-y-scroll">
        <div className="p-6">
          {currentStep === 1 && (
            <CompaniesFilter handledata={handleCompaniesFilter} />
          )}
          {currentStep === 2 && (
            <ServiceIntegration handledata={handleCompaniesFilter} />
          )}
          {currentStep === 3 && <DurationServices />}
        </div>
      </div>
    </div>
  );
}
