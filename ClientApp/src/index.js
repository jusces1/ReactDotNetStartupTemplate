import "semantic-ui-css/semantic.min.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { createBrowserHistory } from "history";
import configureStore from "./app/store/configureStore";
import App from "./app/layout/App";
import { addLocaleData } from "react-intl"
import en from "react-intl/locale-data/en"
import lt from "react-intl/locale-data/lt"
import registerServiceWorker from "./registerServiceWorker";
import { localeSet } from "./features/Examples/Languages/localeActions"
// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const history = createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = window.initialReduxState;
const store = configureStore(history, initialState);

const rootElement = document.getElementById("root");

addLocaleData(en);
addLocaleData(lt);

if (localStorage.alhubLang) store.dispatch(localeSet(localStorage.alhubLang));
registerServiceWorker();

const render = Component => {
  return ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    rootElement
  );
};


render(App);

if (module.hot) {
  module.hot.accept("../src/app/layout/App", () => {
    const NextApp = require("./app/layout/App").default;
    render(NextApp);
  });
}