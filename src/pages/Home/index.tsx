import { Modal } from "@mui/material";
import React, { useCallback, useState } from "react";
import { TableColumn } from "react-data-table-component";
import TableActions from "src/components/atoms/TableActons";
import ModalDataTableInfo from "src/components/molecules/DataTableInfo";
import DataTableInfo, {
  TableDataInfo,
  useTableRowClick,
} from "src/components/molecules/DataTableInfo";
import MainLayout from "src/layouts/MainLayout";

interface tableDataType {
  id: string;
  productName: string;
  image: string;
  brand: string;
  amount: number;
}

const columns: TableColumn<tableDataType>[] = [
  {
    name: "Tên",
    selector: (row) => row.productName,
    sortable: true,
  },
  {
    name: "Hình Ảnh",
    selector: (row) => row.image,
    sortable: true,
    cell(row, rowIndex, column, id) {
      return <img width={50} height={50} alt="product" src={row.image} />;
    },
  },
  {
    name: "Thương Hiệu",
    selector: (row) => row.brand,
    sortable: true,
  },
  {
    name: "Số Lượng",
    selector: (row) => row.amount,
    sortable: true,
  },
  {
    name: "Actions",
    selector: (row) => row.id,
    cell(row, rowIndex, column, id) {
      return <TableActions actionsLIst={["edit", "delete"]} />;
    },
  },
];

type Props = {};

const Home = (props: Props) => {
  const {
    currentRow,
    setCurrentRow,
    closeModal,
    onClickedRow,
    isShowModal,
    modalTitle,
    setModalTitle,
  } = useTableRowClick();

  const handleClickedRow = useCallback(
    (row: tableDataType, e: React.MouseEvent<Element, MouseEvent>) => {
      const { id, ...removedIdColRow } = row;
      const newData: TableDataInfo = {
        productName: {
          label: removedIdColRow.productName,
          title: "Tên sản phẩm",
          responsive: {
            xs: 12,
            md: 6,
          },
        },
        brand: {
          label: removedIdColRow.brand,
          title: "Thương hiệu",
          responsive: {
            xs: 12,
            md: 6,
          },
        },
        amount: {
          label: removedIdColRow.amount.toString(),
          title: "Số lượng",
          responsive: {
            xs: 12,
            md: 6,
          },
        },
        image: {
          label: "Hình ảnh",
          title: "Hình ảnh",
          responsive: {
            xs: 12,
            md: 6,
          },
        },
      };

      setCurrentRow(newData);

      setModalTitle("Thông tin sản phẩm");
      return onClickedRow(row, e);
    },
    [currentRow]
  );

  return (
    <>
      <MainLayout.ContentWithTable
        columns={columns}
        data={data}
        title="Sản phẩm"
        onRowClicked={handleClickedRow}
        onAdd={() => {}}
      />
      <ModalDataTableInfo
        title={modalTitle}
        data={currentRow}
        open={isShowModal}
        onClose={closeModal}
      />
    </>
  );
};

export default Home;

const data: tableDataType[] = [
  {
    id: "1",
    productName: "Sản phẩm 1",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    brand: "Thương hiệu 1",
    amount: 10,
  },
  {
    id: "2",
    productName: "Sản phẩm 2",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    brand: "Thương hiệu 2",
    amount: 10,
  },
  {
    id: "3",
    productName: "Sản phẩm 3",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    brand: "Thương hiệu 3",
    amount: 10,
  },
  {
    id: "4",
    productName: "Sản phẩm 4",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    brand: "Thương hiệu 4",
    amount: 10,
  },
  {
    id: "5",
    productName: "Sản phẩm 5",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    brand: "Thương hiệu 5",
    amount: 10,
  },
  {
    id: "6",
    productName: "Sản phẩm 6",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    brand: "Thương hiệu 6",
    amount: 10,
  },
  {
    id: "7",
    productName: "Sản phẩm 7",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    brand: "Thương hiệu 7",
    amount: 10,
  },
  {
    id: "8",
    productName: "Sản phẩm 8",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    brand: "Thương hiệu 8",
    amount: 10,
  },
  {
    id: "9",
    productName: "Sản phẩm 9",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    brand: "Thương hiệu 9",
    amount: 10,
  },
  {
    id: "10",
    productName: "Sản phẩm 10",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    brand: "Thương hiệu 10",
    amount: 10,
  },
  {
    id: "11",
    productName: "Sản phẩm 11",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    brand: "Thương hiệu 11",
    amount: 10,
  },
  {
    id: "12",
    productName: "Sản phẩm 12",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    brand: "Thương hiệu 12",
    amount: 10,
  },
  {
    id: "14",
    productName: "Sản phẩm 14",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    brand: "Thương hiệu 14",
    amount: 10,
  },
  {
    id: "15",
    productName: "Sản phẩm 15",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    brand: "Thương hiệu 15",
    amount: 10,
  },
  {
    id: "16",
    productName: "Sản phẩm 16",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    brand: "Thương hiệu 16",
    amount: 10,
  },
  {
    id: "17",
    productName: "Sản phẩm 17",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    brand: "Thương hiệu 17",
    amount: 10,
  },
  {
    id: "18",
    productName: "Sản phẩm 18",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    brand: "Thương hiệu 18",
    amount: 10,
  },
  {
    id: "19",
    productName: "Sản phẩm 19",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    brand: "Thương hiệu 19",
    amount: 10,
  },
  {
    id: "20",
    productName: "Sản phẩm 20",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    brand: "Thương hiệu 20",
    amount: 10,
  },
];
