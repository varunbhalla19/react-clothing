import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import store, { persistedStore } from "./redux/store";

import { PersistGate } from "redux-persist/integration/react";

import CartProvider from "./Context/Cart/CartProvider";

ReactDOM.render(
  <Provider store={store}>
    <CartProvider>
      <BrowserRouter>
        <PersistGate persistor={persistedStore}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </CartProvider>
  </Provider>,
  document.getElementById("root")
);
