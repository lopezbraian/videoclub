import React, { useState } from "react";

export const UiContext = React.createContext(false);

export default function MyThemeProvider({ children }) {
  const [modeDark, setModeDark] = useState(false);

  const changeTheme = () => {
    setModeDark(!modeDark);
  };

  const value = {
    changeTheme,
    modeDark,
  };
  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}
