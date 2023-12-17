import { Add, Close } from "@mui/icons-material";
import { Slider } from "@mui/material";
import React, { useState } from "react";

function Skills(props) {
  const information = props.information;
  const setInformation = props.setInformation;
  const setIsSnackOpen = props.setIsSnackOpen;
  const setProgressValue = props.setProgressValue;
  const progressValue = props.progressValue;
  const [progressUpdated, setProgressUpdated] = useState(false);

  const [skillinfo, setSkillinfo] = useState({
    skillname: "",
    skilllevel: "",
  });

  const [activeTab, setActiveTab] = useState(null);

  const loadTab = (idx) => {
    const activeTabData = information[idx] || {};
    setSkillinfo({
      skillname: activeTabData.skillname || "",
      skilllevel: activeTabData.level || 10,
    });
    setActiveTab(idx);
  };
  //for deleting the selected tab
  const delTab = (e, idx) => {
    e.stopPropagation();
    const dataAfterDel = information.filter((data, index) => idx !== index);
    setInformation((prev) => ({
      ...prev,
      skill: dataAfterDel,
    }));
  };

  const handleAddmore = () => {
    if (activeTab !== null) {
      setInformation((prev) => {
        const updatedskill = [...prev.skill];
        updatedskill[activeTab] = { ...skillinfo };

        return {
          ...prev,
          skill: updatedskill,
        };
      });
    } else {
      if (skillinfo.skillname === "") {
        setIsSnackOpen(true);
        return;
      }
      setInformation((prev) => ({
        ...prev,
        skill: [...prev.skill, { ...skillinfo }],
      }));
    }
    if (skillinfo.skillname !== "" && !progressUpdated) {
      setProgressValue(progressValue + 25);
      setProgressUpdated(true);
    }

    setSkillinfo({
      skillname: "",
      skilllevel: 10,
    });

    setActiveTab(null);
  };

  return (
    <div className="form">
      <div className="tabs">
        {information.map((item, idx) => (
          <div
            className={`tab ${activeTab === idx ? "active" : ""}`}
            key={idx}
            onClick={() => loadTab(idx)}
          >
            <p>Skill {idx + 1}</p>
            <Close fontSize="small" onClick={(e) => delTab(e, idx)} />
          </div>
        ))}
      </div>
      <div className="form_row">
        <div className="form_input_container">
          <h4>Skill</h4>
          <input
            id="skill"
            type="text"
            value={skillinfo.skillname}
            onChange={(e) =>
              setSkillinfo((prev) => ({ ...prev, skillname: e.target.value }))
            }
          />
        </div>
        <div className="form_input_container">
          <h4>Level</h4>
          <Slider
            defaultValue={skillinfo.skilllevel}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={100}
            onChange={(e, value) =>
              setSkillinfo((prev) => ({ ...prev, skilllevel: value }))
            }
          />
        </div>
      </div>
      <div className="addMore_row" onClick={handleAddmore}>
        <Add style={{ fontSize: "small" }} />
        <h6>Add Skill</h6>
      </div>
    </div>
  );
}

export default Skills;
