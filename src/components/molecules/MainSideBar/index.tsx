import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import React, { ReactNode, useCallback, useMemo } from "react";
import {
  Menu,
  MenuItem,
  Sidebar,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { sideBar } from "src/pages/MainRoute";
import AdbIcon from "@mui/icons-material/Adb";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const sideBarList: {
  [key: string]: string;
} = {
  "/home": "Sản Phẩm",
  "/don-hang": "Đơn Hàng",
  "/khach-hang": "Khách Hàng",
  "/thuong-hieu": "Thương Hiệu",
  "/thong-ke": "Thống kê",
  "/thong-ke/doanh-thu": "Doanh Thu",
  "/thong-ke/san-pham": "Sản Phẩm",
  "/thong-ke/don-hang": "Đơn Hàng",
  "/thong-ke/best-seller": "Best Seller",
  "/thanh-toan": "Thanh Toán",
  "/phan-quyen": "Phân Quyền",
  "/support": "Support",
  "/quang-cao": "Quảng Cáo",
  "/kho": "Quản Lý Kho",
};

interface MenuData {
  title: string;
  url?: string;
  enabled: boolean;
  topLevel: boolean;
  subMenuItems?: Array<any>;
  icon?: ReactNode;
}

type Props = {};

const MainSideBar = (props: Props) => {
  const { collapseSidebar } = useProSidebar();

  const newSideBar = useMemo((): Array<MenuData> => {
    if (sideBar) {
      return sideBar.map((val) => {
        const newObj: MenuData = {
          title: sideBarList[val.path ?? "/"],
          url: val.path,
          enabled: true,
          topLevel: true,
          subMenuItems: undefined,
          icon: <BookmarkIcon />,
        };
        if (val.children) {
          newObj.subMenuItems = val.children.map((data) => {
            const newSubMenuObj = {
              title: sideBarList[data.path ?? "/"],
              url: `${data.path}`,
              enabled: true,
            };
            return newSubMenuObj;
          });
        }
        return newObj;
      });
    }
    return [];
  }, []);

  const location = useLocation();
  const pathName = location.pathname;

  const navigate = useNavigate();

  const handleClickCollapseSidebar = () => {
    collapseSidebar();
  };

  const handleNavigate = useCallback(
    (url: string) => () => {
      navigate(url);
    },
    [navigate]
  );

  return (
    <div className="py-8 h-[100vh] bg-gray-400/10">
      <Box
        className="ml-[-10px] h-full"
        sx={{
          ".ps-sidebar-container": {
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          },
          ".ps-submenu-content": {
            backgroundColor: "transparent",
            marginTop: "12px",
          },
          ".ps-menu-label": {
            fontSize: "1.6rem",
          },
          ".ps-menu-button:hover": {
            backgroundColor: "#eecef9 !important",
          },
        }}
      >
        <Sidebar
          style={{
            borderColor: "transparent",
            overflow: "hidden",
            height: "100%",
          }}
        >
          <div className="flex flex-col px-12 relative my-6">
            <NavLink
              to={"/"}
              className="flex flex-1 items-center overflow-hidden"
            >
              <AdbIcon />
              <Typography
                variant="h5"
                noWrap
                component="p"
                sx={{
                  ml: 2,
                  display: { xs: "flex" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>
            </NavLink>
            <Box className="flex items-center absolute right-0 top-1/2 -translate-y-1/2 px-2">
              <IconButton
                onClick={handleClickCollapseSidebar}
                sx={{
                  backgroundColor: "rgba(0,0,0,0.05)",
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </div>
          <Menu
            style={{
              backgroundColor: "transparent",
              flexGrow: 1,
              overflow: "scroll",
            }}
            menuItemStyles={{
              button: ({ active }) => {
                // only apply styles on first level elements of the tree
                return {
                  backgroundColor: active ? "#eecef9" : "transparent",
                };
              },
            }}
          >
            {newSideBar.map((elm) => {
              return !elm.subMenuItems ? (
                <MenuItem
                  icon={elm.icon}
                  key={elm.url}
                  onClick={handleNavigate(elm.url ?? "")}
                  active={pathName === elm.url}
                >
                  {elm.title}
                </MenuItem>
              ) : (
                <SubMenu
                  icon={elm.icon}
                  key={elm.url}
                  label={elm.title}
                  active={pathName.startsWith(elm.url ?? "")}
                >
                  {elm.subMenuItems.map((item) => {
                    return (
                      <MenuItem
                        icon={item.icon}
                        key={item.url}
                        onClick={handleNavigate(item.url)}
                        active={pathName === item.url}
                      >
                        <Typography
                          color={"black"}
                          fontSize="1.4rem"
                          fontWeight={500}
                        >
                          {item.title}
                        </Typography>
                      </MenuItem>
                    );
                  })}
                </SubMenu>
              );
            })}
          </Menu>
        </Sidebar>
      </Box>
    </div>
  );
};

export default MainSideBar;
