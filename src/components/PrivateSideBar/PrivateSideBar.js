import React from "react";
import "./PrivateSideBar.css";
import Avatar from "@material-ui/core/Avatar";
import PrivateImg from "./private_side_bar.png";
import EditInfo from "../EditInfo/EditInfo";

function PrivateSideBar({ name, email, image }) {
  return (
    <div>
      <div className="private_side_bar">
        <Avatar
          className="private_avatar"
          style={{ height: "15vw", width: "15vw", borderRadius: "20px" }}
          alt="private_img"
          src={image}
        />
        <div className="change_avatar">
          Click image above to upload a new image
        </div>

        <div className="user_info">
          <div className="privatetext">Name: {name}</div>
          <div className="privatetext">Email: {email}</div>
        </div>

        <div>
          <EditInfo currentname={name} currentemail={email}></EditInfo>
        </div>

        <img src={PrivateImg} alt="private" />
      </div>
    </div>
  );
}

export default PrivateSideBar;
