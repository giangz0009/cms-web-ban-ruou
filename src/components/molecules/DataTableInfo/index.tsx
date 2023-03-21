import React, { ReactNode, useCallback, useMemo, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, GridSize, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export type DataTableInfoType<T> = {
  title: string;
  label: string;
  responsive?: {
    xs?: boolean | GridSize;
    md?: boolean | GridSize;
    lg?: boolean | GridSize;
    xl?: boolean | GridSize;
  };
  render?: (row: T) => ReactNode;
};

export interface TableDataInfo {
  [key: string]: DataTableInfoType<any>;
}

export const useTableRowClick = () => {
  const [currentRow, setCurrentRow] = useState<TableDataInfo>({});
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("Modal Title");

  const closeModal = () => {
    setIsShowModal(false);
  };

  const showModal = () => {
    setIsShowModal(true);
  };

  const onClickedRow = useCallback(
    (row: any, e: React.MouseEvent<Element, MouseEvent>) => {
      showModal();
    },
    [isShowModal]
  );

  return {
    currentRow,
    setCurrentRow,
    isShowModal,
    onClickedRow,
    closeModal,
    modalTitle,
    setModalTitle,
  } as const;
};

type ModalDataTableInfoProps = {
  title: string;
  data: TableDataInfo;
  open?: boolean;
  onClose?: () => void;
};

const ModalDataTableInfo: React.FC<ModalDataTableInfoProps> = ({
  title,
  data,
  onClose,
  open,
}) => {
  const renderData = useMemo(() => {
    return Object.keys(data).map((key, index) => {
      const val = data[key];

      return (
        <Grid xs={12} {...val.responsive} key={index}>
          <Box className="flex items-center py-2">
            <h3 className="text-3xl min-w-[140px]">{val.title}:</h3>
            {val.render ? (
              val.render(val)
            ) : (
              <p className="text-3xl font-bold">{val.label}</p>
            )}
          </Box>
        </Grid>
      );
    });
  }, [data]);

  return (
    <Modal open={!!open} onClose={onClose}>
      <Box sx={style}>
        <Box className="relative flex flex-col h-[80vh] min-w-[400px] max-w-[1000px] bg-white p-8 rounded-3xl">
          <Box>
            <h3 className="text-[3rem] font-bold mb-8">{title}</h3>
          </Box>
          <Box className="flex-1 overflow-scroll">
            <Grid container>{renderData}</Grid>
          </Box>
          <Box className="absolute top-0 right-0">
            <IconButton
              onClick={() => {
                onClose && onClose();
              }}
            >
              <CloseIcon
                sx={{
                  fontSize: "3rem",
                }}
              />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalDataTableInfo;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  p: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
