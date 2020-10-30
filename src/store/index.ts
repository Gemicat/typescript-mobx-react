import { createContext } from "react";
import { ItemList } from "./ItemList";

const itemList = new ItemList();
export const StoreContext = createContext(itemList);
