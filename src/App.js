import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import routers from "./routers";
import { LoginPage } from "./views/pages/login/LoginPage";
import "./App.css";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Page404 } from "./views/pages/Page404/Page404";
/**
 * @author
 * @function App
 **/

export const App = (props) => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/page404" element={<Page404 />} />
        <Route path="*" element={<DefaultLayout routers={routers} />} />
      </Routes>
    </Router>
  );
};
