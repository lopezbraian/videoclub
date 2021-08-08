import React, { useContext } from "react";
import { Switch } from "@material-ui/core";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import "./style-buttonTheme.scss";
import { UiContext } from "../context";

export default function ButtonTheme() {
  const { modeDark, changeTheme } = useContext(UiContext);

  const handleChange = () => {
    changeTheme();
  };
  return (
    <div className="wrap-button-theme">
      <WbSunnyIcon style={{ color: "white" }} />
      <Switch checked={modeDark} onChange={handleChange} name="checkedA" />
      <Brightness2Icon style={{ color: "white" }} />
    </div>
  );
}
