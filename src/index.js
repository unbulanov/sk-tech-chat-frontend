import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import Messenger from "./components/Messenger";
import "./index.css";
import reducers from "./reducers";
import rootSaga from "./sagas";

import { ThemeProvider } from "@mui/material";

import { THEME } from "constants/typographyFont";

try {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducers, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);

  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={THEME}>
        <Messenger />
      </ThemeProvider>
    </Provider>,
    document.querySelector("#root"),
  );
} catch (error) {
  console.log("Error!", error);
}
