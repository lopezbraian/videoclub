import React, { useContext } from "react";
import Routes from "./route";
import GlobalStyle from "./styles/Style-Global";
import { UiContext } from "./context";

export default function App() {
  const { modeDark } = useContext(UiContext);
  return (
    <>
      <GlobalStyle themeDark={modeDark} />
      <Routes />
    </>
  );
}
