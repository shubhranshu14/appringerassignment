import React, { useEffect, useState } from "react";
import "./body.css";
import FormEditor from "../form/FormEditor";
import Preview from "../preview/Preview";

function Body() {
  const formTitles = ["Personal Details", "Education", "Experience", "Skills"];
  const [information, setInformation] = useState({
    personal: {
      jobtitle: "",
      photo: "",
      fname: "",
      lname: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      profile: "",
    },
    education: [],
    experience: [],
    skill: [],
  });
  console.log(information.education);

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
