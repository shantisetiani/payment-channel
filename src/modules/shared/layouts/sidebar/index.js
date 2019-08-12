import React from "react";
import { Avatar, Menu, Drawer, Icon } from "antd";
import { NavLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { PUBLIC_URL } from "../../../../config/url";
import { MENU } from "@skeleton/config/menu";

const Sidebar = ({ collapsed, toggle, location, logout }) => {
  const locs = location.pathname
    ? location.pathname.replace(PUBLIC_URL, "").split("/")
    : [];
  const getActiveNavLink = () => (locs.length > 1 ? locs[1] : "");
  return (
    <Drawer
      className="sidebar__drawer"
      title=" "
      placement="left"
      onClose={toggle}
      visible={collapsed}
    >
      <div>
        <div className="sidebar__profile">
          <Avatar size={40} icon="user" />
          <NavLink to="/setting">
            <Icon className="sidebar__setting-btn" type="setting" />
          </NavLink>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["/"]}
          selectedKeys={[getActiveNavLink()]}
          onClick={toggle}
        >
          <Menu.Item key="1">
            <NavLink to={MENU.DASHBOARD}>Dashboard</NavLink>
          </Menu.Item>
          <Menu.Item key="4" onClick={logout}>
            Logout
          </Menu.Item>
        </Menu>
      </div>
    </Drawer>
  );
};

Sidebar.defaultProps = {
  toggle: () => {},
  collapsed: false
};

Sidebar.propTypes = {
  toggle: PropTypes.func,
  collapsed: PropTypes.bool,
  location: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

export default withRouter(Sidebar);
