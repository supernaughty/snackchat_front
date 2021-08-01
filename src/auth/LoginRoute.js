import React from "react";
import { Route, Redirect } from "react-router-dom";

const isLogin = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return false;
  } else return true;
};

const LoginRoute = (props) => {
  return <>{isLogin() ? <Route {...props} /> : <Redirect to="/" />}</>;
};

export default LoginRoute;
