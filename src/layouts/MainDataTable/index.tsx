import React, { useState } from "react";
import DataTable, {
  TableColumn,
  TableProps,
  TableStyles,
} from "react-data-table-component";

export interface MainDataTableProps extends TableProps<any> {
  columns: TableColumn<any>[];
  data: Array<any>;
  selectableRows?: boolean;
  progressPending?: boolean;
}

export const useSearchFeature = (data: Array<any>) => {
  const [filterText, setFilterText] = useState<string>("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const filteredItems = React.useMemo(() => {
    return data.filter((item) => {
      const keys = Object.keys(item);

      return keys.some(
        (key) =>
          item[key] &&
          item[key].toString().toLowerCase().includes(filterText.toLowerCase())
      );
    });
  }, [filterText, data]);

  const handleClear = () => {
    if (filterText) {
      setResetPaginationToggle(!resetPaginationToggle);
      setFilterText("");
    }
  };

  return {
    filterText,
    setFilterText,
    resetPaginationToggle,
    filteredItems,
    handleClear,
  } as const;
};

const MainDataTable: React.FC<MainDataTableProps> = ({ ...props }) => {
  return (
    <DataTable
      pagination
      customStyles={customStyles}
      className="flex-1"
      fixedHeader
      highlightOnHover
      pointerOnHover
      {...props}
    />
  );
};

export default MainDataTable;

const customStyles: TableStyles | undefined = {
  rows: {
    style: {
      minHeight: "72px", // override the row height
    },
  },
  headRow: {
    style: {
      background: "#eecef9",
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      fontSize: "4rem",
      fontWeight: 600,
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
      fontSize: "2rem",
    },
  },
  pagination: {
    style: {
      background: "#eecef9",
    },
  },
};
