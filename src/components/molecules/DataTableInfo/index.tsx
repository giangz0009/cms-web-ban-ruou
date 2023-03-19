import React, { ReactNode, useCallback, useMemo, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, GridSize, Modal, Typography } from "@mui/material";

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
          {val.render ? (
            val.render(val)
          ) : (
            <p className="text-2xl font-bold text-[red]">{val.label}</p>
          )}
        </Grid>
      );
    });
  }, [data]);

  return (
    <Modal open={!!open} onClose={onClose}>
      <Box sx={style}>
        <Box>
          <h3 className="text-3xl text-blue-600 font-bold">{title}</h3>
        </Box>
        <Box>
          <Grid container>{renderData}</Grid>
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
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
