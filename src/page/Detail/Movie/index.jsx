import React, { useEffect, useState, useRef , useContext } from "react";
import { useParams } from "react-router-dom";
import { Hero } from "../Common/Hero";
import api from "../../../api/index";
import ListCast from "../../../components/ListCast";
import { CirculesProgress } from "../../../components/Loading";
import { WrapperDetail } from "./style";
import Similar from "../../../components/Similar";
import { UiContext } from "../../../context";

export const MovieDetail = () => {
  const { modeDark } = useContext(UiContext);
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState({});
  const ref = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    async function getData() {
      try {
        const res = await api.getDatailMovie(id);
        if (res) {
          setData(res);
          setLoaded(true);
        } else {
          window.location.replace("/404");
        }
      } catch {
        return false;
      }
    }
    getData();
  }, [id]);

  return (
    <WrapperDetail ref={ref}>
      {!loaded ? (
        <CirculesProgress />
      ) : (
        <>
          <Hero
            refElement={ref}
            data={data}
            modeDark={modeDark}
            type="movie"
          ></Hero>
          <ListCast type={"movie"} id={data.id} />
          <Similar type="movie" id={data.id} modeDark={modeDark}></Similar>
        </>
      )}
    </WrapperDetail>
  );
};
