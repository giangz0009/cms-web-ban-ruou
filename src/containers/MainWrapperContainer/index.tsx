import React from "react";
import { Outlet } from "react-router-dom";
import AppHeader from "src/components/molecules/AppHeader";
import MainSideBar from "src/components/molecules/MainSideBar";
import MainLayout from "src/layouts/MainLayout";

type Props = {};

const MainWrapperContainer = (props: Props) => {
  return (
    <div>
      {/* <AppHeader /> */}
      <MainLayout.Wrap>
        <MainLayout.SideBar>
          <MainSideBar />
        </MainLayout.SideBar>
        <MainLayout.Content>
          <Outlet />
        </MainLayout.Content>
      </MainLayout.Wrap>
    </div>
  );
};

export default MainWrapperContainer;
