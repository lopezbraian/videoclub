import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { WrapperForm } from "./style";
import { UiContext } from "../../context";

export default function SearchPres({ initialValue }) {
  const { modeDark } = useContext(UiContext);
  const [query, setQuery] = useState(initialValue);
  const history = useHistory();
  const handleInput = (event) => {
    setQuery(event.target.value);
  };
  const search = async (event) => {
    event.preventDefault();
    if (query.length > 3) {
      history.push(`/search?query=${query}`);
    }
  };
  return (
    <WrapperForm onSubmit={search} modeDark={modeDark}>
      <input
        value={query}
        onChange={handleInput}
        placeholder="Buscar..."
      ></input>
      <button className="button-app" onClick={search}>
        Buscar
      </button>
    </WrapperForm>
  );
}
