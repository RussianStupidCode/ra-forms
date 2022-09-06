import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Colors from "./components/UI/colors/colors";
import CRM from "./components/UI/crm/crm";
import { ROUTER_PATH } from "./helpers/path";
import MainLayout from "./layouts/main";

function App() {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route
          path={ROUTER_PATH.base}
          element={<Navigate replace to={ROUTER_PATH.colors} />}
        />
        <Route path={ROUTER_PATH.colors} element={<Colors />} />
        <Route path={ROUTER_PATH.crm} element={<CRM />} />
      </Route>
    </Routes>
  );
}

export default App;
