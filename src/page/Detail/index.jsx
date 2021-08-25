import React from "react";
import { Detail as DetailMovie } from "../Detail/Movie";
import { Detail as DetailTv } from "../Detail/Tv";
import { PersonDetail } from "../Detail/Person";

export default function DetailPres({ type }) {
  if (type === "movie") {
    return <DetailMovie/>;
  } else if (type === "tv") {
    return <DetailTv/>;
  } else {
    return <PersonDetail/>;
  }
}
