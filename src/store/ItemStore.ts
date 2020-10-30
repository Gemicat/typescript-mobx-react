import { makeAutoObservable } from "mobx";
import Item from "./ItemModel";

export default class ItemStore {
  public items: Item[] = [];
  public unpackedItemsFilter: string = "";
  public packedItemsFilter: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  get packedItems() {
    return this.items.filter((item) => item.packed);
  }

  get unpackedItems() {
    return this.items.filter((item) => item.unpacked);
  }

  get filteredPackedList() {
    return this.items.filter((item) =>
      item.value.includes(this.packedItemsFilter)
    );
  }

  get filteredUnpackedList() {
    return this.items.filter((item) =>
      item.value.includes(this.unpackedItemsFilter)
    );
  }

  addItem = (value: string) => {
    this.items.push(new Item(value, this));
  };

  updatePackedItemsFilter = (value: string) => {
    this.packedItemsFilter = value;
  };

  updateUnpackedItemsFilter = (value: string) => {
    this.unpackedItemsFilter = value;
  };

  removeItem = (itemToRemove: Item) => {
    this.items.filter((item) => item !== itemToRemove);
    console.log(this.items.length);
  };
}
