import React, { VFC } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { themes, ThemeName } from "./theme";

interface Props {
  themeName: ThemeName;
  children: React.ReactNode;
}

export const ThemeProvider: VFC<Props> = ({ themeName, children }) => {
  return (
    <StyledThemeProvider theme={themes[themeName]}>
      {children}
    </StyledThemeProvider>
  );
};
