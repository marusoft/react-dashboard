import {
  CalendarToday,
  LocationSearching,
  PhoneAndroid,
  PermIdentity,
  MailOutline,
  Publish,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./user.css";

const User = () => {
  return (
    <div className="user">
      <div className="user-title-container">
        <h1 className="user-title">Edit User</h1>
        <Link to="/newUser">
          <button className="user-edit-btn">Create</button>
        </Link>
      </div>
      <div className="user-container">
        <div className="user-display">
          <div className="user-display-top">
            <img
              src="https://res.cloudinary.com/marusofteamwork/image/upload/v1606370631/ki0x0wxpikvg8z2doed1.jpg"
              alt="user"
              className="user-display-img"
            />
            <div className="user-display-top-title">
              <span className="user-display-username">Alimi Kehinde</span>
              <span className="user-dispplay-job">Software Engineer</span>
            </div>
          </div>
          <div className="user-display-bottom">
            <span className="user-display-bottom-title">Account Details</span>
            <div className="user-display-info">
              <PermIdentity className="user-display-icon" />
              <span className="user-display-info-title">@marusoft1</span>
            </div>
            <div className="user-display-info">
              <CalendarToday className="user-display-icon" />
              <span className="user-display-info-title">11.12.1884</span>
            </div>
            <span className="user-display-bottom-title">Contact Details</span>
            <div className="user-display-info">
              <PhoneAndroid className="user-display-icon" />
              <span className="user-display-info-title">+45378688</span>
            </div>
            <div className="user-display-info">
              <MailOutline className="user-display-icon" />
              <span className="user-display-info-title">
                marusoft12@gmail.com
              </span>
            </div>
            <div className="user-display-info">
              <LocationSearching className="user-display-icon" />
              <span className="user-display-info-title">Lagos | Nigeria</span>
            </div>
          </div>
        </div>
        <div className="user-update">
          <span className="user-update-title">Edit</span>
          <form className="user-update-form">
            <div className="user-update-left">
              <div className="user-update-item">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="@marusoft1"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Full name</label>
                <input
                  type="text"
                  placeholder="Alimi Kehinde"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="marusoft12@gmail.com"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+45378688"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Lagos | Nigeria"
                  className="user-update-input"
                />
              </div>
            </div>
            <div className="user-update-right">
              <div className="user-update-upload">
                <img
                  src="https://res.cloudinary.com/marusofteamwork/image/upload/v1606370631/ki0x0wxpikvg8z2doed1.jpg"
                  alt="user update"
                  className="user-update-img"
                />
                <label htmlFor="file">
                  <Publish className="user-upadte-icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="user-update-button">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
