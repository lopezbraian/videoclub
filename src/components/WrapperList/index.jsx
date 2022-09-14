import React from "react";
import Poster from "../Poster";
import { WrapPoster } from "../../styles/Style-WrapPoster";

export const WrapperList = ({ data = [], type }) => {
  return (
    <WrapPoster>
      {data.map((data, index) => {
        return (
          <Poster key={index} data={data} type={data.media_type || type} />
        );
      })}
    </WrapPoster>
  );
};
