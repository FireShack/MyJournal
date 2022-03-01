import React from "react";
import { RoutesComp } from "../router/RoutesComp";
import { store } from "../store/store";
import { Provider } from "react-redux";
import "../styles/styles.scss";

export const JournalApp = () => {
  return (
    <Provider store={store}>
      <RoutesComp />
    </Provider>
  );
};
