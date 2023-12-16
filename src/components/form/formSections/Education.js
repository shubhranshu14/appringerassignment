import { Add, Close } from "@mui/icons-material";
import React, { useState } from "react";

function Education(props) {
  const information = props.information;
  const setInformation = props.setInformation;
  const [educationinfo, setEducationinfo] = useState({
    schoolname: "",
    degree: "",
    startdate: "",
    enddate: "",
    city: "",
  });
  const [activeTab, setActiveTab] = useState(null);
  const loadTab = (idx) => {
    setActiveTab(idx);
    const activeTabData = information[idx] || {}; // Handle the case when the index is out of bounds
    setEducationinfo({
      schoolname: activeTabData.schoolname || "",
      degree: activeTabData.degree || "",
      startdate: activeTabData.startdate || "",
      enddate: activeTabData.enddate || "",
      city: activeTabData.city || "",
    });
  };

  //for deleting the selected tab
  const delTab = (e, idx) => {
    e.stopPropagation();
    const dataAfterDel = information.filter((data, index) => idx !== index);
    setInformation((prev) => ({
      ...prev,
      education: dataAfterDel,
    }));
  };

  //for saving the current information and adding more tabs for that information
  const handleAddmore = () => {
    if (activeTab !== null) {
      setInformation((prev) => {
        const updatedEducation = [...prev.education];
        updatedEducation[activeTab] = { ...educationinfo };

        return {
          ...prev,
          education: updatedEducation,
        };
      });
    } else {
      // If there's no active tab, add a new entry to the education array
      setInformation((prev) => ({
        ...prev,
        education: [...prev.education, { ...educationinfo }],
      }));
    }

    setEducationinfo({
      schoolname: "",
      degree: "",
      startdate: "",
      enddate: "",
      city: "",
    });

    setActiveTab(null); // Reset active tab when adding more
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
            <p>Education {idx + 1}</p>
            <Close fontSize="small" onClick={(e) => delTab(e, idx)} />
          </div>
        ))}
      </div>
      <div className="form_row">
        <div className="form_input_container">
          <h4>School</h4>
          <input
            id="schoolname"
            type="text"
            value={educationinfo.schoolname}
            onChange={(e) =>
              setEducationinfo((prev) => ({
                ...prev,
                schoolname: e.target.value,
              }))
            }
          />
        </div>
        <div className="form_input_container">
          <h4>Degree</h4>
          <input
            id="companyName"
            type="text"
            value={educationinfo.degree}
            onChange={(e) =>
              setEducationinfo((prev) => ({ ...prev, degree: e.target.value }))
            }
          />
        </div>
      </div>

      <div className="form_row">
        <div className="form_input_container">
          <h4>Start & End Date</h4>
          <div className="date_holder">
            <input
              id="startDate"
              type="month"
              value={educationinfo.startdate}
              onChange={(e) =>
                setEducationinfo((prev) => ({
                  ...prev,
                  startdate: e.target.value,
                }))
              }
            />
            <input
              id="endDate"
              type="month"
              value={educationinfo.enddate}
              onChange={(e) =>
                setEducationinfo((prev) => ({
                  ...prev,
                  enddate: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <div className="form_input_container">
          <h4>City</h4>
          <input
            id="city"
            type="text"
            value={educationinfo.city}
            onChange={(e) =>
              setEducationinfo((prev) => ({ ...prev, city: e.target.value }))
            }
          />
        </div>
      </div>
      <div className="addMore_row" onClick={handleAddmore}>
        <Add style={{ fontSize: "small" }} />
        <h6>Add Education</h6>
      </div>
    </div>
  );
}

export default Education;
