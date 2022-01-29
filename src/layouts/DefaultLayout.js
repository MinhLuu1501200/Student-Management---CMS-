import React, { useState } from "react";
import { Layout, Menu, Breadcrumb, Switch } from "antd";

import "./dashboard.css";
import { Link, Route, Routes, Navigate, Redirect } from "react-router-dom";
import routers from "../routers";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
/**
 * @author
 * @function DefaultLayout
 **/
export const DefaultLayout = ({ routes }) => {
  let [collapsed, setCollapsed] = useState(false);
  let onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            {routers.map((menu) => {
              return menu.children && menu.children.length > 0 ? (
                <SubMenu key={menu.path} icon={menu.icon} title={menu.title}>
                  {menu.children.map((subMenu) => {
                    return (
                      <Menu.Item key={subMenu.path}>
                        <Link to={subMenu.path}>{subMenu.title}</Link>
                      </Menu.Item>
                    );
                  })}
                </SubMenu>
              ) : (
                <Menu.Item key={menu.path} icon={menu.icon}>
                  <Link to={menu.path}>{menu.title}</Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{ padding: 0, backgroundColor: "#001529" }}
          />
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {/* {maincontent} */}
              <Routes>
                {routers.map((menu) => {
                  return menu.children.length > 0 ? (
                    menu.children.map((subMenu) => (
                      <Route path={subMenu.path} element={subMenu.component} />
                    ))
                  ) : (
                    <Route path={menu.path} element={menu.component} />
                  );
                })}
                <Route path="*" element={<Navigate to="page404" />} />
              </Routes>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            CMS - Customer Management Sysytem
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};
