import React from "react";
import {
  Timeline,
  TrendingUp,
  PermIdentity,
  WorkOutline,
  Report,
  Dashboard,
  Poll,
  Storefront,
  AttachMoney,
  Mail,
  Feedback,
  Message,
} from "@material-ui/icons";
import "./sidebar.css";

const sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item active">
              <Dashboard className="sidebar-icons" />
              Home
            </li>
            <li className="sidebar-list-item">
              <Timeline className="sidebar-icons" />
              Analytics
            </li>
            <li className="sidebar-list-item">
              <TrendingUp className="sidebar-icons" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Quick Menu</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <PermIdentity className="sidebar-icons" />
              Users
            </li>
            <li className="sidebar-list-item">
              <Storefront className="sidebar-icons" />
              Products
            </li>
            <li className="sidebar-list-item">
              <AttachMoney className="sidebar-icons" />
              Transactions
            </li>
            <li className="sidebar-list-item">
              <Poll className="sidebar-icons" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Notifications</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <Mail className="sidebar-icons" />
              Mail
            </li>
            <li className="sidebar-list-item">
              <Feedback className="sidebar-icons" />
              Feedback
            </li>
            <li className="sidebar-list-item">
              <Message className="sidebar-icons" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Staff</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <WorkOutline className="sidebar-icons" />
              Manage
            </li>
            <li className="sidebar-list-item">
              <Timeline className="sidebar-icons" />
              Analytics
            </li>
            <li className="sidebar-list-item">
              <Report className="sidebar-icons" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
