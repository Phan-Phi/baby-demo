import React, { createContext, useCallback, useState } from "react";

export const ColorModeContext = createContext<{
  currentMode: string;
  setColorMode: (value: string) => void;
}>({
  currentMode: "",
  setColorMode: () => {},
});

const DeviceContext = ({ children }: { children?: React.ReactNode }) => {
  const [mode, setMode] = useState<string>("dark");

  const setDarkMode = useCallback((value: string) => {
    setMode(value);
  }, []);

  return (
    <ColorModeContext.Provider
      value={{
        currentMode: mode,
        setColorMode: setDarkMode,
      }}
    >
      {children}
    </ColorModeContext.Provider>
  );
};

export default DeviceContext;
