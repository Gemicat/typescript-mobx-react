import React, { createContext } from "react";
import ReactDOM from "react-dom";

import Application from "./components/Application";
import "./index.css";
import ItemList from "./store/ItemStore";

const itemList = new ItemList();
export const StoreContext = createContext(itemList);

ReactDOM.render(
  <StoreContext.Provider value={itemList}>
    <Application />
  </StoreContext.Provider>,
  document.getElementById("root")
);
