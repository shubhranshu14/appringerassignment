import { Close } from "@mui/icons-material";
import React from "react";

function Education() {
  return (
    <div className="form">
      <div className="tabs">
        <div className="tab">
          <p>Education 1</p>
          <Close fontSize="small" />
        </div>
        <div className="tab">
          <p>Education 2</p>
          <Close fontSize="small" />
        </div>
      </div>
      <div className="form_row">
        <div className="form_input_container">
          <h4>School</h4>
          <input id="schoolname" type="text" />
        </div>
        <div className="form_input_container">
          <h4>Degree</h4>
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
    </div>
  );
}

export default Education;
