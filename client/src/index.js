import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.css";
import App from "./App";

const AppWithProvider = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(AppWithProvider, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
