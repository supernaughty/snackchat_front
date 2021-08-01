import React from "react";
import { Route, Redirect } from "react-router-dom";
import {checkAuth} from "./AuthService";

const AuthRoute = (props) => {
  return <>{checkAuth() ? <Route {...props} /> : <Redirect to="/login" />}</>;
};

export default AuthRoute;
