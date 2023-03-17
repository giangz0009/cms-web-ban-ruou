import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import MainWrapperContainer from "src/containers/MainWrapperContainer";
import AuthProvider from "src/layouts/Auth/AuthProvider";
import ProtectedRoute from "src/layouts/Auth/ProtectedRoute";
import Login from "./Login";

type Props = {};

export const sideBar: RouteObject[] = [
  {
    path: "/home",
    element: <p>Sản phẩm</p>,
  },
  {
    path: "/don-hang",
    element: <p>Đơn hàng</p>,
  },
  {
    path: "/khach-hang",
    element: <p>Khách hàng</p>,
  },
  {
    path: "/thuong-hieu",
    element: <p>Khách hàng</p>,
  },
  {
    path: "/thong-ke",
    children: [
      { path: "/thong-ke/doanh-thu", element: <p>Thống kê doanh thu</p> },
      { path: "/thong-ke/san-pham", element: <p>Thống kê sản phẩm</p> },
      { path: "/thong-ke/don-hang", element: <p>Thống kê đơn hàng</p> },
      { path: "/thong-ke/best-seller", element: <p>Thống kê best seller</p> },
    ],
  },
  {
    path: "/thanh-toan",
    element: <p>Thanh Toán</p>,
  },
  {
    path: "/phan-quyen",
    element: <p>Phân quyền</p>,
  },
  {
    path: "/support",
    element: <p>Support</p>,
  },
  {
    path: "/quang-cao",
    element: <p>Quảng Cáo</p>,
  },
  {
    path: "/kho",
    element: <p>Quản lý kho</p>,
  },
];

const router = createBrowserRouter([
  {
    element: (
      <ProtectedRoute>
        <MainWrapperContainer />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <Navigate to={"/home"} />,
      },
      ...sideBar,
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const MainRoute = (props: Props) => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default MainRoute;
