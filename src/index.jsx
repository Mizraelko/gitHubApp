import React from "react";
import { render } from "react-dom";

import "./index.less";
import App from "./component/App";
import { store } from "./reducers/index";
import { Provider } from "react-redux";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
