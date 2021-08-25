import React, { useEffect, useState, useContext } from "react";
import { Filter } from "./Filter";
import { useLocation } from "react-router-dom";
import api from "../../api";
import { Results } from "./Results";
import InputSearch from "../../components/Search";
import { CirculesProgress } from "../../components/Loading";
import { WrapperSearch } from "./style";
import { UiContext } from "../../context";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function maxTypes(types) {
  let maxType;
  let max = 0;
  Object.keys(types).map((v) => {
    if (types[v] > max) {
      maxType = v;
      max = types[v];
    }
  });
  return maxType;
}
function useGetTypes(data = []) {
  const types = {
    movie: 0,
    tv: 0,
    person: 0,
  };
  if (!data.results) return types;
  data.results.forEach((d) => {
    if (d.media_type === "movie") {
      types.movie++;
    } else if (d.media_type === "tv") {
      types.tv++;
    } else if (d.media_type === "person") {
      types.person++;
    }
  });
  return types;
}
export default function SearchPres() {
  const { modeDark } = useContext(UiContext);
  const query = useQuery().get("query");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [selectType, setSelectType] = useState("")
  const [types , setTypes] = useState({movie:0 , tv:0 , person:0})

  useEffect(() => {
    async function getData() {
      if (query === "") return false;
      try {
        setLoading(true);
        const result = await api.querySearch(query);
        if (result) {
          setData(result);
          setTypes(useGetTypes(result))
          //selecciona el tipo que mas resultado tiene
        }
        setLoading(false);
      } catch {
        return false;
      }
    }
    getData();
  }, [query]);

  useEffect(() => {
    setSelectType(maxTypes(types))
    
  }, [types])

  return (
    <>
      {loading ? (
        <CirculesProgress />
      ) : (
        <>
          <WrapperSearch>
            <InputSearch initialValue={query} />
          </WrapperSearch>
          <Filter
            modeDark={modeDark}
            types={types}
            setSelectType={setSelectType}
            selectType={selectType}
          ></Filter>
          <Results
            modeDark={modeDark}
            data={data}
            selectType={selectType}
          ></Results>
        </>
      )}
    </>
  );
}
