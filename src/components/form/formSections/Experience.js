import { Add, Close } from "@mui/icons-material";
import React, { useState } from "react";

function Experience(props) {
  const information = props.information;
  const setInformation = props.setInformation;

  const [experienceinfo, setExperienceinfo] = useState({
    title: "",
    companyname: "",
    startdate: "",
    enddate: "",
    city: "",
    description: ["", "", "", ""],
  });

  const [activeTab, setActiveTab] = useState(null);

  const loadTab = (idx) => {
    const activeTabData = information[idx] || {};
    setExperienceinfo({
      title: activeTabData.title || "",
      companyname: activeTabData.companyname || "",
      startdate: activeTabData.startdate || "",
      enddate: activeTabData.enddate || "",
      city: activeTabData.city || "",
      description: activeTabData.description || ["", "", "", ""],
    });
    setActiveTab(idx);
  };
  //for saving the current information and adding more tabs for that information
  const handleAddmore = () => {
    if (activeTab !== null) {
      setInformation((prev) => {
        const updatedExperience = [...prev.experience];
        updatedExperience[activeTab] = { ...experienceinfo };

        return {
          ...prev,
          experience: updatedExperience,
        };
      });
    } else {
      setInformation((prev) => ({
        ...prev,
        experience: [...prev.experience, { ...experienceinfo }],
      }));
    }

    setExperienceinfo({
      title: "",
      companyname: "",
      startdate: "",
      enddate: "",
      city: "",
      description: ["", "", "", ""],
    });

    setActiveTab(null);
  };
  //for deleting the selected tab
  const delTab = (e, idx) => {
    e.stopPropagation();
    const dataAfterDel = information.filter((data, index) => idx !== index);
    setInformation((prev) => ({
      ...prev,
      experience: dataAfterDel,
    }));
  };

  const handleDescriptionChange = (index, value) => {
    setExperienceinfo((prev) => {
      const updatedDescription = [...prev.description];
      updatedDescription[index] = value;

      return {
        ...prev,
        description: updatedDescription,
      };
    });
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
            <p>Experience {idx + 1}</p>
            <Close fontSize="small" onClick={(e) => delTab(e, idx)} />
          </div>
        ))}
      </div>
      <div className="form_row">
        <div className="form_input_container">
          <h4>Title</h4>
          <input
            id="title"
            type="text"
            value={experienceinfo.title}
            onChange={(e) =>
              setExperienceinfo((prev) => ({ ...prev, title: e.target.value }))
            }
          />
        </div>
        <div className="form_input_container">
          <h4>Company Name</h4>
          <input
            id="companyName"
            type="text"
            value={experienceinfo.companyname}
            onChange={(e) =>
              setExperienceinfo((prev) => ({
                ...prev,
                companyname: e.target.value,
              }))
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
              value={experienceinfo.startdate}
              onChange={(e) =>
                setExperienceinfo((prev) => ({
                  ...prev,
                  startdate: e.target.value,
                }))
              }
            />
            <input
              id="endDate"
              type="month"
              value={experienceinfo.enddate}
              onChange={(e) =>
                setExperienceinfo((prev) => ({
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
            value={experienceinfo.city}
            onChange={(e) =>
              setExperienceinfo((prev) => ({ ...prev, city: e.target.value }))
            }
          />
        </div>
      </div>

      <div className="form_row">
        <div className="form_description_container">
          <h4>Description</h4>
          {experienceinfo.description.map((line, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Line ${index + 1}`}
              value={line}
              onChange={(e) => handleDescriptionChange(index, e.target.value)}
            />
          ))}
        </div>
      </div>

      <div className="addMore_row" onClick={handleAddmore}>
        <Add style={{ fontSize: "small" }} />
        <h6>Add Experience</h6>
      </div>
    </div>
  );
}

export default Experience;
