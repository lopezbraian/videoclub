import React, { useContext } from "react";
import { getUrlImage } from "../../utils/getUrlFromImages";
import { Vote } from "../Vote";
import { Link } from "react-router-dom";
import {
  Img,
  WrapperPoster,
  WrapperImage,
  Vote as VoteStyle,
  WrapperTitle,
  Name,
  Date,
} from "./Style-Poster";
import { UiContext } from "../../context";

export default function PosterPres({ data, type }) {
  const { modeDark } = useContext(UiContext);
  return (
    <WrapperPoster>
      <WrapperImage>
        <Link to={type === "movie" ? `/movie/${data.id}` : `/tv/${data.id}`}>
          <Img
            width="150px"
            height="200px"
            src={getUrlImage(200, data.poster_path)}
          ></Img>
        </Link>
      </WrapperImage>
      <WrapperTitle>
        <VoteStyle>
          <Vote vote={data.vote_average} />
        </VoteStyle>
        <Name modeDark={modeDark}>{data.title || data.name}</Name>
        {type === "tv" && <Date modeDark={modeDark}>Primer episodio</Date>}
        <Date modeDark={modeDark}>
          {data.release_date || data.first_air_date}
        </Date>
      </WrapperTitle>
    </WrapperPoster>
  );
}
