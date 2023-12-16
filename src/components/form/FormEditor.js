import React, { useState } from "react";
import "./formeditor.css";
import PersonalDetails from "./formSections/PersonalDetails";
import Education from "./formSections/Education";
import Experience from "./formSections/Experience";
import Skills from "./formSections/Skills";

function FormEditor(props) {
  const information = props.information;
  const setInformation = props.setInformation;
  const sections = props.formTitles;
  const [currentSection, setCurrentSection] = useState(0);

  const handleSave = () => {
    if (currentSection !== sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };
  const handlePrev = () => {
    if (currentSection !== 0) {
      setCurrentSection(currentSection - 1);
    }
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
              <p style={{ fontWeight: "600" }}>0%</p>
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
        <progress value="0" max="100"></progress>
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
          />
        ) : currentSection === 2 ? (
          <Experience
            information={information.experience}
            setInformation={setInformation}
          />
        ) : (
          <Skills
            information={information.skill}
            setInformation={setInformation}
          />
        )}
        <div className="next_prev_holder">
          <button onClick={handlePrev} disabled={currentSection === 0}>
            Prev
          </button>
          <button onClick={handleSave}>
            {currentSection === sections.length - 1 ? "Save" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormEditor;
