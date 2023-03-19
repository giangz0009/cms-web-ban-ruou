import React, { useMemo } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

type ActionType = "edit" | "delete";

type TableActionsProps = {
  actionsLIst: ActionType[];
  onEdit?: () => void;
  onDelete?: () => void;
};

interface ActionCompProps {
  type: ActionType;
  onEdit?: () => void;
  onDelete?: () => void;
}

const ActionComp: React.FC<ActionCompProps> = ({ type }) => {
  const _renderEditAction = useMemo(() => {
    return (
      <IconButton aria-label="Sửa">
        <EditIcon />
      </IconButton>
    );
  }, []);
  const _renderDeleteAction = useMemo(() => {
    return (
      <IconButton aria-label="Xóa">
        <DeleteIcon />
      </IconButton>
    );
  }, []);

  switch (type) {
    case "edit":
      return _renderEditAction;

    default:
      return _renderDeleteAction;
  }
};

const TableActions: React.FC<TableActionsProps> = ({ actionsLIst }) => {
  const _renderActionsList = useMemo(() => {
    return actionsLIst.map((action, index) => (
      <ActionComp type={action} key={`${action} + ${index}`} />
    ));
  }, [actionsLIst]);

  return <div>{_renderActionsList}</div>;
};

export default TableActions;
