/* eslint-disable no-unused-vars */
import React from "react";

// eslint-disable-next-line react/prop-types
export default function FormProgress({ currentStep, setCurrentStep }) {
  return (
    <>
      <div className="multisteps-form__progress md:h-screen">
        <span
          onClick={() => setCurrentStep(1)}
          className={`multisteps-form__progress-btn ${
            currentStep === 1 ? "js-active" : ""
          }  `}
          title="Application data"
        >
          <i className="far fa-user"></i>
          <span className="font-sans">Find Companices</span>
        </span>

        <span
          onClick={() => setCurrentStep(2)}
          className={`multisteps-form__progress-btn ${
            currentStep === 2 ? "js-active" : ""
          }  `}
          title="Tax residency"
        >
          <i className="far fa-user"></i>
          <span className="font-sans">Services Integration</span>
        </span>

        <span
          onClick={() => setCurrentStep(3)}
          className={`multisteps-form__progress-btn ${
            currentStep === 3 ? "js-active" : ""
          }  `}
          title="Indentity documents"
        >
          <i className="far fa-user"></i>
          <span className="font-sans">Metting Steps</span>
        </span>
        {/* <span
          className={`multisteps-form__progress-btn ${
            currentStep === 4 ? "js-active" : ""
          }  `}
          title="Investability"
        >
          <i className="far fa-user"></i>
          <span>Choose a payment</span>
        </span>
        <span
          className={`multisteps-form__progress-btn ${
            currentStep === 5 ? "js-active" : ""
          }  `}
          title="Review"
        >
          <i className="far fa-user"></i>
          <span>Review </span>
        </span> */}
      </div>
    </>
  );
}
