import { createTheme, ThemeProvider } from "@mui/material";
import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

const theme = createTheme({
  palette: {
    primary: {
      light: "#be00ff",
      main: "#eecef9",
      dark: "#be00ff",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const MuiMainTheme: React.FC<Props> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiMainTheme;
