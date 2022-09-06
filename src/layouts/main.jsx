import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/common/navbar/navbar";
import { ROUTER_PATH } from "../helpers/path";

function MainLayout() {
  const navbarItems = [
    { title: "Colors (Task 1)", link: ROUTER_PATH.colors },
    { title: "Crm (Task 2)", link: ROUTER_PATH.crm },
  ];

  return (
    <div className="d-flex flex-column vh-100">
      <NavBar menuList={navbarItems} />
      <div className="container h-100">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
