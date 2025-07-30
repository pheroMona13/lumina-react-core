import React from "react";
import LumIcon from "../icon";
import { IconName } from "../../assets/icons";
import "./LumAlert.scss";

export type LumAlertProps = {
  indicatorIcon?: IconName;
  message?: string;
};

function LumAlert({ indicatorIcon = "info2", message }: LumAlertProps) {
  return (
    <div className="LumAlert">
      <LumIcon name={indicatorIcon} />
      <div className="text">{message}</div>
      <LumIcon name="close" className="close-icon" />
    </div>
  );
}

export default LumAlert;
