import { uid } from "uid/single";
import { makeAutoObservable } from "mobx";
import { ItemList } from "./ItemList";

export class Item {
  constructor(
    public value: string,
    public list: ItemList,
    public packed: boolean = false,
    public id: string = uid()
  ) {
    makeAutoObservable(this);
  }

  get unpacked() {
    return !this.packed;
  }

  toggle = () => {
    this.packed = !this.packed;
  };

  remove = () => {
    this.list.removeItem(this);
  };
}
