import React from "react";
import "./PrivateSideBar.css";
import Avatar from "@material-ui/core/Avatar";
import PrivateImg from "./private_side_bar.png";

function PrivateSideBar() {
  return (
    <div>
      <div className="private_side_bar">
        <Avatar
          className="private_avatar"
          style={{ height: "158px", width: "147px", borderRadius: "20px" }}
          alt="profile_img"
          src=""
        />
        <h2 className="user_name">User Name</h2>
        <div className="user_state">
          <text>I am wondering why this happened</text>
        </div>
        <button className="user_notification">Notification</button>
        <div className="user_info">
          <text>Age:</text>
          <text>Location:</text>
          <text>XXX:</text>
        </div>
        <img src={PrivateImg} alt="private"></img>
      </div>
    </div>
  );
}

export default PrivateSideBar;
