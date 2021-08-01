import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import styled from "styled-components";
import Login from "../pages/Login";
import {USER, ADMIN} from "../auth/AuthRole";
import Home from "../pages/Home";
import LoginRoute from "../auth/LoginRoute";
import AuthRoute from "../auth/AuthRoute";

const Main = styled.div`
  display: flex;
  min-height: 100vh;
`;
const MainComponent = styled.div`
  width: 85%;
`;

function ChatApp() {
  return (
    <>
      <Router>
        <Main>
          <MainComponent>
            <Switch>
              <AuthRoute exact path="/" component={Home} role={USER} />
              <LoginRoute exact path="/login" component={Login} />
            </Switch>
          </MainComponent>
        </Main>
      </Router>
    </>
  );
}

export default ChatApp;
