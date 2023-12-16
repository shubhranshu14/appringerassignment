import React, { useState } from "react";
import "./form.css";
import { AccountBox } from "@mui/icons-material";

function PersonalDetails(props) {
  const information = props.information;
  const setInformation = props.setInformation;
  const [uploadPhoto, setUploadPhoto] = useState(false);
  document.body.addEventListener("click", () => {
    if (uploadPhoto) {
      setUploadPhoto(false);
    }
  });

  // const handlePersonal = (e) => {
  //   const { name, value } = e.target;
  //   setInformation((prev) => ({
  //     ...prev,
  //     personal: {
  //       ...prev.personal,
  //       detail: {
  //         ...prev.personal.detail,
  //         [name]: value,
  //       },
  //     },
  //   }));
  // };
  return (
    <div className="form">
      <div className="form_row">
        <div className="form_input_container">
          <h4>Wanted Job Title</h4>
          <input
            id="wantedJob"
            type="text"
            name="jobtitle"
            value={information.jobtitle}
            onChange={(e) =>
              setInformation((prev) => ({
                ...prev,
                personal: {
                  ...prev.personal,
                  jobtitle: e.target.value,
                },
              }))
            }
          />
        </div>
        <div className="form_input_container upload_photo">
          <AccountBox style={{ color: "rgb(239, 242, 249)" }} />
          <div className="updloadPhoto">
            <input
              id="filephoto"
              style={{ display: "none" }}
              name="photo"
              type="file"
              value={information.photo}
              onChange={(e) =>
                setInformation((prev) => ({
                  ...prev,
                  personal: {
                    ...prev.personal,
                    photo: e.target.value,
                  },
                }))
              }
            />
            <label htmlFor="filephoto">Upload photo</label>
          </div>
        </div>
      </div>

      <div className="form_row">
        <div className="form_input_container">
          <h4>First Name</h4>
          <input
            id="fname"
            type="text"
            value={information.fname}
            onChange={(e) =>
              setInformation((prev) => ({
                ...prev,
                personal: {
                  ...prev.personal,
                  fname: e.target.value,
                },
              }))
            }
          />
        </div>
        <div className="form_input_container">
          <h4>Last Name</h4>
          <input
            id="lname"
            type="text"
            value={information.lname}
            onChange={(e) =>
              setInformation((prev) => ({
                ...prev,
                personal: {
                  ...prev.personal,
                  lname: e.target.value,
                },
              }))
            }
          />
        </div>
      </div>

      <div className="form_row">
        <div className="form_input_container">
          <h4>Email</h4>
          <input
            id="email"
            type="email"
            value={information.email}
            onChange={(e) =>
              setInformation((prev) => ({
                ...prev,
                personal: {
                  ...prev.personal,
                  email: e.target.value,
                },
              }))
            }
          />
        </div>
        <div className="form_input_container">
          <h4>Phone</h4>
          <input
            id="phone"
            type="tel"
            value={information.phone}
            onChange={(e) =>
              setInformation((prev) => ({
                ...prev,
                personal: {
                  ...prev.personal,
                  phone: e.target.value,
                },
              }))
            }
          />
        </div>
      </div>

      <div className="form_row">
        <div className="form_input_container">
          <h4>Country</h4>
          <input
            id="country"
            type="text"
            value={information.country}
            onChange={(e) =>
              setInformation((prev) => ({
                ...prev,
                personal: {
                  ...prev.personal,
                  country: e.target.value,
                },
              }))
            }
          />
        </div>
        <div className="form_input_container">
          <h4>City</h4>
          <input
            id="city"
            type="text"
            value={information.city}
            onChange={(e) =>
              setInformation((prev) => ({
                ...prev,
                personal: {
                  ...prev.personal,
                  city: e.target.value,
                },
              }))
            }
          />
        </div>
      </div>

      <div className="form_row">
        <div className="form_input_container">
          <h4>Profile</h4>
          <textarea
            style={{
              maxWidth: "100%",
              minWidth: "100%",
              minHeight: "100px",
              maxHeight: "100px",
            }}
            id="city"
            type="text"
            value={information.profile}
            onChange={(e) =>
              setInformation((prev) => ({
                ...prev,
                personal: {
                  ...prev.personal,
                  profile: e.target.value,
                },
              }))
            }
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
