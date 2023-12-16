import { Slider } from "@mui/material";
import React from "react";

function Skills() {
  return (
    <div className="form">
      <div className="form_row">
        <div className="form_input_container">
          <h4>Skill</h4>
          <input id="skill" type="text" />
        </div>
        <div className="form_input_container">
          <h4>Level</h4>
          <Slider
            defaultValue={30}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={100}
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
