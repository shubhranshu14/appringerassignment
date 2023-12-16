import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./preview.css";
import { Add, MoreHoriz, Remove, WindowOutlined } from "@mui/icons-material";

function Preview(props) {
  const information = props.information;
  const [isColorOpen, setIsColorOpen] = useState(false);
  const colorPalate = ["#1e2532", "#a85a0e", "#282b8f", "#094025"];
  const [color, setColor] = useState("#1e2532");

  const handleColor = (e, color) => {
    e.stopPropagation();
    setColor(color);
    setIsColorOpen(false);
  };
  return (
    <div className="preview">
      <div className="previewHeader">
        <div className="previewHeader_one">
          <div className="templateBtn" onClick={() => setIsColorOpen(true)}>
            <WindowOutlined style={{ color: "#fff" }} />
            <p>Select template</p>
            {isColorOpen ? (
              <div className="color_palate">
                {colorPalate.map((color, idx) => (
                  <div
                    className="color_holder"
                    style={{ backgroundColor: color }}
                    key={idx}
                    onClick={(e) => handleColor(e, color)}
                  ></div>
                ))}
              </div>
            ) : null}
          </div>
          <div className="fontBtn">
            <button>
              <Remove />
            </button>
            <h4>Aa</h4>
            <button>
              <Add />
            </button>
          </div>
        </div>

        <div className="downloadBtns">
          <button id="pdfBtn">Download PDF</button>
          <button id="moreBtn">
            <MoreHoriz />
          </button>
        </div>
        <div className="avatar">
          <Avatar src={information.personal.photo} />
        </div>
      </div>
      <div className="preview_main_container">
        {/* this is the left part of the preview, it contains profile photo, name, address, phone, email and skills */}
        <div className="personal_details" style={{ backgroundColor: color }}>
          {information.personal.photo !== "" ? (
            <div className="profile_photo">
              <img src={information.personal.photo} alt="profilePhoto" />
            </div>
          ) : null}
          <div>
            {information.personal.fname !== "" ||
            information.personal.lname !== "" ? (
              <div className="profile_name flx">
                <h4>{information.personal.fname}</h4>
                <h4>{information.personal.lname}</h4>
              </div>
            ) : null}
            {information.personal.jobtitle !== "" ? (
              <div className="profile_job">
                <p>{information.personal.jobtitle}</p>
              </div>
            ) : null}
          </div>
          {information.personal.city !== "" ||
          information.personal.country !== "" ||
          information.personal.phone !== "" ||
          information.personal.email !== "" ? (
            <div className="profile_details flx-clm">
              <h4>Details</h4>
              <div>
                {information.personal.city !== "" ||
                information.personal.country !== "" ? (
                  <div className="profile_address">
                    <h6>Address</h6>
                    <div className="flx">
                      <p>{information.personal.city}</p>
                      <p>{information.personal.country}</p>
                    </div>
                  </div>
                ) : null}
                {information.personal.phone !== "" ? (
                  <div className="profile_phone">
                    <h6>Phone</h6>
                    <p>{information.personal.phone}</p>
                  </div>
                ) : null}
                {information.personal.email !== "" ? (
                  <div className="profile_email">
                    <h6>Email</h6>
                    <p>{information.personal.email}</p>
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
        {/* this is the right part of the preview it contains profile, experience, education */}
        <div className="experience_details">
          {information.personal.profile !== "" ? (
            <div className="profile_dis flx-clm">
              <h4>Profile</h4>
              <p>{information.personal.profile}</p>
            </div>
          ) : null}
          {information.experience.length !== 0 ? (
            <div className="profile_experience">
              <h4>Experience</h4>
              {information.experience.map((data, idx) => (
                <div className="profile_exp_tab" key={idx}>
                  <h6>
                    {data.companyname},{data.city}
                  </h6>
                  <h6>{data.title}</h6>
                  <p>
                    {data.startdate} - {data.enddate}
                  </p>
                  <ul>
                    {data.description.map((data, idx) => (
                      <li key={idx}>{data}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : null}
          {information.education.length !== 0 ? (
            <div className="profile_education">
              <h4>Education</h4>
              {information.education.map((data, idx) => (
                <div className="profile_edu_tab" key={idx}>
                  <h6>
                    {data.schoolname},{data.city}
                  </h6>
                  <p>
                    {data.degree}, {data.startdate} - {data.enddate}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Preview;
