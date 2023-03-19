import React, { PropsWithChildren } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";
import MainDataTable, {
  MainDataTableProps,
  useSearchFeature,
} from "../MainDataTable";
import SearchInput from "src/components/atoms/Input/SearchInput";

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

interface ContentWithTableProps extends MainDataTableProps {
  title?: string;
}

const ContentWithTable: React.FC<ContentWithTableProps> = ({
  title,
  ...props
}) => {
  const { filterText, setFilterText, filteredItems } = useSearchFeature(
    props.data
  );

  return (
    <div className="MainLayout-ContentWithTable h-full flex flex-col p-10">
      <div className="flex mb-8">
        {title && <h1 className="text-[3rem] font-semibold">{title}</h1>}
        <div className="flex-1 flex justify-end">
          <SearchInput value={filterText} onSearch={setFilterText} />
        </div>
      </div>
      <div className="flex flex-1 flex-col border border-[rgba(0, 0, 0, 0.12)] rounded-xl overflow-hidden">
        <MainDataTable {...props} data={filteredItems} />
      </div>
    </div>
  );
};

const MainLayout = { Wrap, SideBar, Content, ContentWithTable };

export default MainLayout;
