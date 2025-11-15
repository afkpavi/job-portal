"use client";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import theme from "./theme";
import { Provider } from "react-redux";
import store from "./redux/store";

type Props = {
  children: React.ReactNode;
};

const MUIProvider = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Provider>
  );
};

export default MUIProvider;
