import { uid } from "uid/single";
import { makeAutoObservable } from "mobx";
import { ItemList } from "./ItemList";

export class Item {
  public id: string = uid();
  public packed: boolean = false;

  constructor(public value: string, public list: ItemList) {
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
