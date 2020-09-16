import React from "react";
import "./style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "../page/home";
import LoginPage from "../page/login";
import RegisterPage from "../page/register";
import ProfilePage from "../page/profile";
import DetailPage from "../page/detail";
import PaymentPage from "../page/payment";

// server 103.153.73.118
export default function App() {
  return (
    <Router>
      <Route path="/home" component={HomePage} />
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/signup" component={RegisterPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/detail/:id?" component={DetailPage} />
      <Route path="/cart" component={PaymentPage} />
    </Router>
  );
}
