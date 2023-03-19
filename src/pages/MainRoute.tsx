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
import ComingSoon from "src/layouts/CommingSoon";
import Home from "./Home";
import Login from "./Login";

type Props = {};

export const sideBar: RouteObject[] = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/don-hang",
    element: <ComingSoon feature="Đơn hàng" />,
  },
  {
    path: "/khach-hang",
    element: <ComingSoon feature="Khách hàng" />,
  },
  {
    path: "/thuong-hieu",
    element: <ComingSoon feature="Thương hiệu" />,
  },
  {
    path: "/thong-ke",
    children: [
      {
        path: "/thong-ke/doanh-thu",
        element: <ComingSoon feature="Doanh thu" />,
      },
      {
        path: "/thong-ke/san-pham",
        element: <ComingSoon feature="Sản phẩm" />,
      },
      {
        path: "/thong-ke/don-hang",
        element: <ComingSoon feature="Thống kê đơn hàng" />,
      },
      {
        path: "/thong-ke/best-seller",
        element: <ComingSoon feature="Best seller" />,
      },
    ],
  },
  {
    path: "/thanh-toan",
    element: <ComingSoon feature="Thanh Toán" />,
  },
  {
    path: "/phan-quyen",
    element: <ComingSoon feature="Phân quyền" />,
  },
  {
    path: "/support",
    element: <ComingSoon feature="Support" />,
  },
  {
    path: "/quang-cao",
    element: <ComingSoon feature="Quảng cáo" />,
  },
  {
    path: "/kho",
    element: <ComingSoon feature="Kho" />,
  },
];

const router = createBrowserRouter([
  { path: "/*", element: <p className="text-[6rem]">Page Not Found</p> },
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
