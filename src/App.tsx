import React from "react";
import "./index.css";
import MainRoute from "./pages/MainRoute";
import { ProSidebarProvider } from "react-pro-sidebar";

function App() {
  return (
    <ProSidebarProvider>
      <MainRoute />
    </ProSidebarProvider>
  );
}

export default App;
