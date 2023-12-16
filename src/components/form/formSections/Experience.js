import { Close } from "@mui/icons-material";
import React from "react";

function Experience(props) {
  const information = props.information;
  return (
    <div className="form">
      <div className="tabs">
        {information.map((item, idx) => (
          <div className="tab" key={idx}>
            <p>Experience {idx + 1}</p>
            <Close fontSize="small" />
          </div>
        ))}
      </div>
      <div className="form_row">
        <div className="form_input_container">
          <h4>Title</h4>
          <input id="title" type="text" />
        </div>
        <div className="form_input_container">
          <h4>Company Name</h4>
          <input id="companyName" type="text" />
        </div>
      </div>

      <div className="form_row">
        <div className="form_input_container">
          <h4>Start & End Date</h4>
          <div className="date_holder">
            <input id="startDate" type="month" />
            <input id="endDate" type="month" />
          </div>
        </div>
        <div className="form_input_container">
          <h4>City</h4>
          <input id="city" type="text" />
        </div>
      </div>

      <div className="form_row">
        <div className="form_description_container">
          <h4>Description</h4>
          <input id="description" type="text" placeholder="Line 1" />
          <input id="description" type="text" placeholder="Line 2" />
          <input id="description" type="text" placeholder="Line 3" />
          <input id="description" type="text" placeholder="Line 4" />
        </div>
      </div>
    </div>
  );
}

export default Experience;
