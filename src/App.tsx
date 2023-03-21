import React from "react";
import "./index.css";
import MainRoute from "./pages/MainRoute";
import { ProSidebarProvider } from "react-pro-sidebar";
import MuiMainTheme from "./layouts/Theme";

function App() {
  return (
    <MuiMainTheme>
      <ProSidebarProvider>
        <MainRoute />
      </ProSidebarProvider>
    </MuiMainTheme>
  );
}

export default App;
