/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StepForm from "./StepForm";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { IoAddSharp } from "react-icons/io5";
import { GrLinkNext } from "react-icons/gr";

export default function Accordions({ opensteps, setOpenSteps }) {
  const StepFormSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    discrepancies: Yup.string().required("Required"),
    employeeName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });
  const [expanded, setExpanded] = useState(false);
  // const [, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {

    setExpanded(isExpanded ? panel : false);
  };

  const handleSubmit = () => {
    //console.log(opensteps)
    setOpenSteps((prevStep) => {
      //console.log(prevStep)
      let nextStep;
      if (prevStep === 3) {
        nextStep = 1;
        console.log(opensteps)
        setOpenSteps(2);
      }else if(prevStep  === 1){
        nextStep = 2;
        setOpenSteps(3);
      
      }
      // else if(prevStep  === 1){
      //   nextStep = 3;
      //   setOpenSteps(1);
      // }
      else {
        nextStep = Math.min(prevStep + 1, 7); // Increment step and cap at 7
        setOpenSteps(nextStep);
      }
      console.log(nextStep)
      setExpanded(`panel${nextStep}`);
      return nextStep;
    });
  };

  return (
    <div className="md:flex space-y-6 md:space-y-0 w-full h-screen md:mt-12 ">
      <Formik
        initialValues={{
          name: "",
          discrepancies: "",
          employeeName: "",
          email: "",
        }}
        validationSchema={StepFormSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
          // setExpanded("panel1");
        }}
      >
        {({ errors, touched }) => (
          <>
            <Form className="w-full h-[500px] md:top-[144px] rounded-xl md:p-6">
              <div className=" md:w-full h-[600px]  md:px-12 space-y-6">
                {/* 1 */}
                {
                opensteps == 1 ||
                opensteps == 2 ||
                opensteps == 3 ||
                opensteps == 4 ||
                opensteps == 5 ||
                opensteps == 6 ||
                opensteps == 7 ? (
                  <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography
                        sx={{ width: "33%", flexShrink: 0 }}
                        className="  p-3  items-center"
                      >
                        1
                      </Typography>
                      <Typography className=" p-3  items-center text-slate-500 ">
                        First Step
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <StepForm />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ) : null}

                {/* 2 */}
                
                {
                opensteps == 1 ||
                opensteps == 2 ||
                opensteps == 3 ||
                opensteps == 4 ||
                opensteps == 5 ||
                opensteps == 6 ||
                opensteps == 7 ? (
                  <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography
                        sx={{ width: "33%", flexShrink: 0 }}
                        className="  p-3 items-center"
                      >
                        2
                      </Typography>
                      <Typography className="  p-3 items-center  text-slate-500">
                        Secound Step
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <StepForm />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ) : null}

                {/* 3 */}
                {
                opensteps == 1 ||
                opensteps == 2 ||
                opensteps == 3 ||
                opensteps == 4 ||
                opensteps == 5 ||
                opensteps == 6 ||
                opensteps == 7 ? (
                  <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography
                        sx={{ width: "33%", flexShrink: 0 }}
                        className="  p-3 items-center"
                      >
                        3
                      </Typography>
                      <Typography className="  p-3 items-center  text-slate-500">
                        Third Step
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <StepForm />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ) : null}

                {/* 4 */}
                {opensteps == 4 ||
                opensteps == 5 ||
                opensteps == 6 ||
                opensteps == 7 ? (
                  <Accordion
                    expanded={expanded === "panel4"}
                    onChange={handleChange("panel4")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography
                        sx={{ width: "33%", flexShrink: 0 }}
                        className="  p-3 items-center"
                      >
                        4
                      </Typography>
                      <Typography className="  p-3 items-center text-slate-500">
                        Forth Step
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <StepForm />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ) : null}
                {/* 5 */}
                {opensteps == 5 || opensteps == 6 || opensteps == 7 ? (
                  <Accordion
                    expanded={expanded === "panel5"}
                    onChange={handleChange("panel5")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography
                        sx={{ width: "33%", flexShrink: 0 }}
                        className="  p-3  items-center"
                      >
                        5
                      </Typography>
                      <Typography className="  p-3 items-center text-slate-500">
                        Fivth Step
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <StepForm />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ) : null}
                {/* 6 */}
                {opensteps == 6 || opensteps == 7 ? (
                  <Accordion
                    expanded={expanded === "panel6"}
                    onChange={handleChange("panel6")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography
                        sx={{ width: "33%", flexShrink: 0 }}
                        className="  p-3 items-center"
                      >
                        6
                      </Typography>
                      <Typography className="  p-3 items-center text-slate-500">
                        Six Step
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <StepForm />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ) : null}
                {/* 7 */}
                {opensteps == 7 ? (
                  <Accordion
                    expanded={expanded === "panel7"}
                    onChange={handleChange("panel7")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography
                        sx={{ width: "33%", flexShrink: 0 }}
                        className="  p-3 items-center"
                      >
                        7
                      </Typography>
                      <Typography className="  p-3 items-center text-slate-500">
                        Seven Step
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <StepForm />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ) : null}
              </div>
              <div className="w-full flex justify-between py-4 px-6 bg-white fixed bottom-0 left-0 md:left-auto md:w-[61%]  border-gray-300 ">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="py-2 px-4 bg-green-500 text-white rounded-lg flex items-center gap-2 ml-auto"
                >
                  Submit
                  <GrLinkNext className="text-xl" />
                </button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
}
