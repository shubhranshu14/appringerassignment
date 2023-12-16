import React, { useState } from "react";
import "./formeditor.css";
import PersonalDetails from "./formSections/PersonalDetails";
import Education from "./formSections/Education";
import Experience from "./formSections/Experience";
import Skills from "./formSections/Skills";
import { Snackbar } from "@mui/material";

function FormEditor(props) {
  const information = props.information;
  const setInformation = props.setInformation;
  const sections = props.formTitles;
  const [currentSection, setCurrentSection] = useState(0);
  const [isSnackOpen, setIsSnackOpen] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  const [progressUpdated, setProgressUpdated] = useState(false);

  const handleNext = () => {
    if (currentSection !== sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
    if (
      information.personal.fname !== "" &&
      information.personal.lname !== "" &&
      !progressUpdated
    ) {
      setProgressValue(progressValue + 25);
      setProgressUpdated(true);
    }
  };
  const handlePrev = () => {
    if (currentSection !== 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  //for closing snackbar
  const handleCloseSnackbar = () => {
    setIsSnackOpen(false);
  };

  return (
    <div className="formEditor">
      <div className="progressBar">
        <div className="progressPercent">
          <div className="progressFilled">
            <div
              style={{
                backgroundColor: "#ff000096",
                display: "inline-block",
                padding: "0 5px",
                borderRadius: "4px",
                color: "white",
              }}
            >
              <p style={{ fontWeight: "600" }}>{progressValue}%</p>
            </div>
            <p>Resume Score</p>
          </div>
          <div className="progressLeft">
            <div
              style={{
                backgroundColor: "#00800075",
                display: "inline-block",
                padding: "0 5px",
                borderRadius: "4px",
                color: "green",
              }}
            >
              <p style={{ fontWeight: "600" }}>+25%</p>
            </div>
            <p>Add {sections[currentSection]}</p>
          </div>
        </div>
        <progress value={progressValue} max="100"></progress>
      </div>
      <div className="formContainer">
        {<h2>{sections[currentSection]}</h2>}
        {currentSection === 0 ? (
          <PersonalDetails
            information={information.personal}
            setInformation={setInformation}
          />
        ) : currentSection === 1 ? (
          <Education
            information={information.education}
            setInformation={setInformation}
            setIsSnackOpen={setIsSnackOpen}
            progressValue={progressValue}
            setProgressValue={setProgressValue}
          />
        ) : currentSection === 2 ? (
          <Experience
            information={information.experience}
            setInformation={setInformation}
            setIsSnackOpen={setIsSnackOpen}
            progressValue={progressValue}
            setProgressValue={setProgressValue}
          />
        ) : (
          <Skills
            information={information.skill}
            setInformation={setInformation}
            setIsSnackOpen={setIsSnackOpen}
            progressValue={progressValue}
            setProgressValue={setProgressValue}
          />
        )}
        <div className="next_prev_holder">
          <button onClick={handlePrev} disabled={currentSection === 0}>
            Prev
          </button>
          <button
            onClick={handleNext}
            disabled={currentSection === sections.length - 1}
          >
            Next
          </button>
        </div>
      </div>
      <Snackbar
        open={isSnackOpen}
        onClose={handleCloseSnackbar}
        autoHideDuration={3000}
        message="Fill information"
      />
    </div>
  );
}

export default FormEditor;
