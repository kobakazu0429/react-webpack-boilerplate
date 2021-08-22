import React, { VFC } from "react";
import { ThemeProvider } from "@/theme/ThemeProvider";
import { GlobalStyle } from "@/theme/GlobalStyle";
import { createRouter } from "@/routes";
import { TopPage } from "@/pages/TopPage";

const routes = [
  {
    exact: true,
    path: "/",
    component: TopPage
  }
];

const Router = createRouter({ routes });

export const App: VFC = () => {
  return (
    <ThemeProvider themeName="default">
      <GlobalStyle />
      {Router}
    </ThemeProvider>
  );
};
