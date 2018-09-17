import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { AppContainer } from "react-hot-loader";

// ReactDOM.render(
//   <AppContainer>
//     <App />
//   </AppContainer>,
//   document.getElementById("root") as HTMLElement
// );

const root = document.getElementById("root");
const render = (Component: any): void => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    root
  );
};
render(App);


registerServiceWorker();
