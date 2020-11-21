import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import React from "react";

const CustomButton = ({ tip, children, onClick, className }) => {
  return (
    <Tooltip title={tip} placement="top" arrow>
      <IconButton onClick={onClick} className={className}>
        {children}
      </IconButton>
    </Tooltip>
  );
};

export default CustomButton;
