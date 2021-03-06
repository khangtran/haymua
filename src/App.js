import React from "react";
import "./style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "./page/home";
import LoginPage from "./page/login";
import RegisterPage from "./page/register";
import ProfilePage from "./page/profile";
import DetailPage from "./page/detail";
import PaymentPage from "./page/payment";
import SearchPage from "./page/search";

import { AdminLoginPage, AdminPage } from "./page/admin";

// server 103.153.73.118
export default function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={RegisterPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/detail/:id?" component={DetailPage} />
      <Route path="/cart" component={PaymentPage} />

      <Route path="/timkiem/:q?" component={SearchPage} />

      <Route path="/admin/login" component={AdminLoginPage} />
      <Route path="/admin" component={AdminPage} />

      <Route path="/seller-login" component={AdminLoginPage} />
      <Route path="/seller" component={AdminPage} />
    </Router>
  );
}
