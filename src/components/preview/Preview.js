import { Avatar } from "@mui/material";
import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useReactToPrint } from "react-to-print";
import "./preview.css";
import {
  Add,
  InsertDriveFile,
  MoreHoriz,
  Remove,
  WindowOutlined,
} from "@mui/icons-material";

function Preview(props) {
  const information = props.information;
  const previewContainerRef = useRef(null);
  const [isColorOpen, setIsColorOpen] = useState(false);
  const colorPalate = ["#1e2532", "#a85a0e", "#282b8f", "#094025"];
  const [color, setColor] = useState("#1e2532");
  const [isDropOpen, setIsDropOpen] = useState(false);

  const handleColor = (e, color) => {
    e.stopPropagation();
    setColor(color);
    setIsColorOpen(false);
  };

  // to download resume as PDF
  const downloadPDF = () => {
    if (previewContainerRef.current) {
      html2canvas(previewContainerRef.current).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF("p", "mm", "a4");
        pdf.addImage(imgData, "PNG", 0, 0, 210, 297); // A4 size: 210 x 297 mm
        pdf.save("resume.pdf");
      });
    }
  };

  const handlePrint = useReactToPrint({
    content: () => previewContainerRef.current,
  });
  const handleDocx = () => {
    handlePrint();
    setIsDropOpen(false);
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
          <button id="pdfBtn" onClick={downloadPDF}>
            Download PDF
          </button>
          <button id="moreBtn" onClick={() => setIsDropOpen(!isDropOpen)}>
            <MoreHoriz />
          </button>
          {isDropOpen ? (
            <div className="dropdown_menu">
              <div className="docx flx" onClick={handleDocx}>
                <InsertDriveFile fontSize="small" />
                <h4>Export To DOCX</h4>
              </div>
            </div>
          ) : null}
        </div>
        <div className="avatar">
          <Avatar src={information.personal.photo} />
        </div>
      </div>
      <div className="preview_main_container" ref={previewContainerRef}>
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
              <div className="flx-clm-2px">
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
          {information.personal.github !== "" ||
          information.personal.linkedin !== "" ? (
            <div className="profile_links flx-clm">
              <h4>Links</h4>
              {information.personal.github !== "" ? (
                <div className="profile_github">
                  <a href={information.personal.github} target="_blank">
                    <p>Github</p>
                  </a>
                </div>
              ) : null}
              {information.personal.linkedin !== "" ? (
                <div className="profile_linkedin">
                  <a href={information.personal.linkedin} target="_blank">
                    <p>LinkedIn</p>
                  </a>
                </div>
              ) : null}
            </div>
          ) : null}

          {information.skill.length !== 0 ? (
            <div className="profile_skills flx-clm">
              <h4>Skills</h4>
              {information.skill.map((data, idx) => (
                <div key={idx} className="flx-clm-2px">
                  <p>{data.skillname}</p>
                  <progress value={data.skilllevel} max="100"></progress>
                </div>
              ))}
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
            <div className="profile_experience flx-clm">
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
            <div className="profile_education flx-clm">
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
