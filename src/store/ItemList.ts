import { IObservableArray, makeAutoObservable } from "mobx";
import { Item } from "./ItemModel";

export class ItemList {
  public unpackedItemsFilter: string = "";
  public packedItemsFilter: string = "";
  public items = ([] as unknown) as IObservableArray<Item>;

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
    return this.packedItems.filter((item) =>
      item.value.includes(this.packedItemsFilter)
    );
  }

  get filteredUnpackedList() {
    return this.unpackedItems.filter((item) =>
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
    this.items.remove(itemToRemove);
  };

  unpackAll = () => {
    this.items.forEach((item) => {
      if (item.packed) {
        item.toggle();
      }
    });
  };
}
