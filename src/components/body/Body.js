import React, { useState } from "react";
import "./body.css";
import FormEditor from "../form/FormEditor";
import Preview from "../preview/Preview";

function Body() {
  // different sections of resume
  const formTitles = ["Personal Details", "Education", "Experience", "Skills"];

  const [information, setInformation] = useState({
    personal: {
      jobtitle: "",
      photo: "",
      fname: "",
      lname: "",
      email: "",
      phone: "",
      github: "",
      linkedin: "",
      country: "",
      city: "",
      profile: "",
    },
    education: [],
    experience: [],
    skill: [],
  });

  return (
    <div className="body">
      <FormEditor
        formTitles={formTitles}
        information={information}
        setInformation={setInformation}
      />
      <Preview information={information} />
    </div>
  );
}

export default Body;
