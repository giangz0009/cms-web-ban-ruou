import React, { PropsWithChildren } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";

interface WrapProps extends PropsWithChildren {}

const Wrap: React.FC<WrapProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        height: "100vh",
      }}
    >
      {children}
    </Box>
  );
};

interface SideBarProps extends PropsWithChildren {}

const SideBar: React.FC<SideBarProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          md: "block",
        },
      }}
    >
      {children}
    </Box>
  );
};

interface ContentProps extends PropsWithChildren {}

const Content: React.FC<ContentProps> = ({ children }) => {
  return <Box className="flex-1">{children}</Box>;
};

const MainLayout = { Wrap, SideBar, Content };

export default MainLayout;
