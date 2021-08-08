import React, { useContext } from "react";
import { WrapperSelector } from "./Style-TitleSection";
import { UiContext } from "../../context";

export default function TitleSection({ text }) {
  const { modeDark } = useContext(UiContext);
  return (
    <WrapperSelector modeDark={modeDark}>
      <h2>{text}</h2>
    </WrapperSelector>
  );
}
