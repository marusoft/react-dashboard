import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="top-left">
          <span className="logo">Marusoft</span>
        </div>
        <div className="top-right">
          <div className="topbar-icon-containers">
            <NotificationsNone />
            <span className="icon-badge">2</span>
          </div>
          <div className="topbar-icon-containers">
            <Language />
            <span className="icon-badge">2</span>
          </div>
          <div className="topbar-icon-containers">
            <Settings />
          </div>
          <img src="https://res.cloudinary.com/marusofteamwork/image/upload/v1606370631/ki0x0wxpikvg8z2doed1.jpg" alt="me" className="top-avatar" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
