import React from "react";
import "./app.less";
import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";
import Main from "./main/Main";
import Card from "./main/Card/Сard";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/card/:username/:userRepo/" component={Card} />
          <Redirect to="/"></Redirect>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
