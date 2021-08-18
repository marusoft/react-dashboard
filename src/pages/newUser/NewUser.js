import React from "react";
import "./newUser.css";

const NewUser = () => {
  return (
    <div className="new-user">
      <h1 className="new-user-title">New User</h1>
      <form className="new-user-form">
        <div className="new-user-item">
          <label>Username</label>
          <input type="text" placeholder="Alimi" />
        </div>
        <div className="new-user-item">
          <label>Fullname</label>
          <input type="text" placeholder="Alimi Kehinde" />
        </div>
        <div className="new-user-item">
          <label>Email</label>
          <input type="email" placeholder="alimi.kmaruf@gmail.com" />
        </div>
        <div className="new-user-item">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="new-user-item">
          <label>Phone</label>
          <input type="text" placeholder="+234499055877" />
        </div>
        <div className="new-user-item">
          <label>Address</label>
          <input type="text" placeholder="Lagos | Nigeria" />
        </div>
        <div className="new-user-item">
          <label>Gender</label>
          <div className="new-user-gender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="male">Female</label>
          </div>
        </div>
        <div className="new-user-item">
          <label>Active</label>
          <select className="new-user-select" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </form>
      <button className="new-user-button">Create</button>
    </div>
  );
};

export default NewUser;
