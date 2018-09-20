import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import store from "store/index";



const root = document.getElementById("root");
const render = (Component: any): void => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    root
  );
};
render(App);

registerServiceWorker();
