import { uid } from "uid/single";
import { makeAutoObservable } from "mobx";
import ItemStore from "./ItemStore";

export default class Item {
  public id: string = uid();
  public list: ItemStore;
  public value: string = "";
  public packed: boolean = false;

  constructor(value: string, list: ItemStore) {
    makeAutoObservable(this);
    this.value = value;
    this.list = list;
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
