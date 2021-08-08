import React, { useContext } from "react";
import { Detail as DetailMovie } from "../Detail/Movie";
import { Detail as DetailTv } from "../Detail/Tv";
import { PersonDetail } from "../Detail/Person";
import { UiContext } from "../../context";

export default function DetailPres({ type }) {
  const { modeDark } = useContext(UiContext);
  if (type === "movie") {
    return <DetailMovie modeDark={modeDark} />;
  } else if (type === "tv") {
    return <DetailTv modeDark={modeDark} />;
  } else {
    return <PersonDetail modeDark={modeDark} />;
  }
}
