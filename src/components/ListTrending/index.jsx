import React, { useEffect, useState } from "react";
import api from "../../api";
import { PosterSkeleton } from "../../utils/Skeleton/Poster-Skeleton";
import TitleSection from "../TitleSection";
import Switch from "./Switch";
import { WrapperHeaderList, WrapperSwitch } from "./Style-ListTrending";
import { WrapperList } from "../WrapperList";

export const ListTrendig = () => {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [time, setTime] = useState("day");
  const [type, setType] = useState("all");

  useEffect(() => {
    async function getData() {
      try {
        const res = await api.getTrending(type, time);
        if (!res) return false;
        setData(res.results);
        setLoaded(true);
      } catch {}
    }
    getData();
  }, [type, time]);
  return (
    <>
      <WrapperHeaderList>
        <TitleSection
          text={`Top en ${
            type === "all"
              ? "series y peliculas"
              : type === "movie"
              ? "Peliculas"
              : "Series"
          }`}
        />
        <WrapperSwitch>
          <Switch select={setType} option={["all", "tv", "movie"]} />
          <Switch select={setTime} option={["day", "week"]} />
        </WrapperSwitch>
      </WrapperHeaderList>
      {loaded ? (
        <WrapperList data={data} type={type}></WrapperList>
      ) : (
        <PosterSkeleton />
      )}
    </>
  );
};
